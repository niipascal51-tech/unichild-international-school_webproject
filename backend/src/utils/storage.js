const crypto = require('crypto');
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  BlobSASPermissions,
  generateBlobSASQueryParameters,
} = require('@azure/storage-blob');

const EXT = { 'application/pdf': 'pdf', 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };
const containerName = () => process.env.STORAGE_CONTAINER || 'school-files';

let credential;
let container;
const getContainer = () => {
  if (!container) {
    const account = process.env.AZURE_STORAGE_ACCOUNT;
    const key = process.env.AZURE_STORAGE_KEY;
    if (!account || !key) throw new Error('Storage is not configured');
    credential = new StorageSharedKeyCredential(account, key);
    const service = new BlobServiceClient(`https://${account}.blob.core.windows.net`, credential);
    container = service.getContainerClient(containerName());
  }
  return container;
};

const detectType = (b) => {
  if (!b || b.length < 12) return null;
  if (b.subarray(0, 4).toString('latin1') === '%PDF') return 'application/pdf';
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'image/jpeg';
  if (b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return 'image/png';
  }
  if (b.subarray(0, 4).toString('latin1') === 'RIFF' && b.subarray(8, 12).toString('latin1') === 'WEBP') {
    return 'image/webp';
  }
  return null;
};

const saveFile = async (folder, buffer, mime) => {
  const key = `${folder}/${crypto.randomUUID()}.${EXT[mime]}`;
  try {
    await getContainer().getBlockBlobClient(key).uploadData(buffer, {
      blobHTTPHeaders: { blobContentType: mime, blobContentDisposition: 'inline' },
    });
  } catch (error) {
    throw new Error(`Upload failed: ${error.message}`);
  }
  return key;
};

const removeFile = async (key) => {
  try {
    await getContainer().getBlobClient(key).deleteIfExists();
  } catch (error) {
    console.error('Storage delete failed:', error.message);
  }
};

const urlFor = (key, downloadName) => {
  const blob = getContainer().getBlobClient(key);
  if (!downloadName) return blob.url;

  const sas = generateBlobSASQueryParameters(
    {
      containerName: containerName(),
      blobName: key,
      permissions: BlobSASPermissions.parse('r'),
      startsOn: new Date(Date.now() - 5 * 60 * 1000),
      expiresOn: new Date(Date.now() + 60 * 60 * 1000),
      contentDisposition: `attachment; filename="${downloadName}"`,
    },
    credential
  ).toString();
  return `${blob.url}?${sas}`;
};

module.exports = { detectType, saveFile, removeFile, urlFor };