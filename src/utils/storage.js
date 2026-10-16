const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

const EXT = { 'application/pdf': 'pdf', 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };
const bucket = () => process.env.STORAGE_BUCKET || 'school-files';

let client;
const getClient = () => {
  if (!client) {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Storage is not configured');
    }
    client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });
  }
  return client;
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
  const { error } = await getClient()
    .storage.from(bucket())
    .upload(key, buffer, { contentType: mime, upsert: false });
  if (error) throw new Error(`Upload failed: ${error.message}`);
  return key;
};

const removeFile = async (key) => {
  const { error } = await getClient().storage.from(bucket()).remove([key]);
  if (error) console.error('Storage delete failed:', error.message);
};

const urlFor = (key, downloadName) =>
  getClient()
    .storage.from(bucket())
    .getPublicUrl(key, downloadName ? { download: downloadName } : undefined).data.publicUrl;

module.exports = { detectType, saveFile, removeFile, urlFor };