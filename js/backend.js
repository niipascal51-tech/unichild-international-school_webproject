const BACKEND_API_DEFAULT = "http://localhost:5000/api";
const BACKEND_API_KEY = "unichild-backend-api-url";
const BACKEND_TOKEN_KEY = "unichild-backend-token";
const BACKEND_USER_KEY = "unichild-backend-user";

function backendApiUrl() {
  return localStorage.getItem(BACKEND_API_KEY) || BACKEND_API_DEFAULT;
}

window.configureUnichildBackend = url => {
  const value = String(url || "").trim().replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(value)) throw new Error("The backend URL must start with http:// or https://.");
  localStorage.setItem(BACKEND_API_KEY, value);
  return value;
};

function backendUser() {
  try {
    return JSON.parse(localStorage.getItem(BACKEND_USER_KEY) || "null");
  } catch (error) {
    console.error("Unable to read the backend user session:", error);
    localStorage.removeItem(BACKEND_USER_KEY);
    return null;
  }
}

function clearBackendSession() {
  localStorage.removeItem(BACKEND_TOKEN_KEY);
  localStorage.removeItem(BACKEND_USER_KEY);
}

async function backendRequest(path, options = {}) {
  const method = options.method || "GET";
  const headers = new Headers(options.headers || {});
  const token = localStorage.getItem(BACKEND_TOKEN_KEY);
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (options.body && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }
  let response;
  try {
    response = await fetch(`${backendApiUrl()}${path}`, {
      method,
      headers,
      body: options.body instanceof FormData
        ? options.body
        : options.body
          ? JSON.stringify(options.body)
          : undefined,
    });
  } catch (error) {
    throw new Error(`The school server is unavailable at ${backendApiUrl()}. Start the backend or configure its deployed API URL.`);
  }
  if (response.status === 401) {
    clearBackendSession();
    throw new Error("Your school session has expired. Please sign in again.");
  }
  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("application/json")
    ? await response.json().catch(() => ({}))
    : await response.text();
  if (!response.ok) {
    const message = typeof payload === "string"
      ? payload
      : payload.message || (payload.errors || []).map(error => error.msg).join(", ");
    throw new Error(message || `The school server returned HTTP ${response.status}.`);
  }
  return payload;
}

async function backendLogin(email, password) {
  const response = await backendRequest("/auth/login", {
    method: "POST",
    body: { email, password },
  });
  if (!response?.token || !response.user?.role) {
    throw new Error("The server returned an incomplete login response.");
  }
  localStorage.setItem(BACKEND_TOKEN_KEY, response.token);
  localStorage.setItem(BACKEND_USER_KEY, JSON.stringify(response.user));
  return response.user;
}
