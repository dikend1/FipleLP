// Fiple is a single universal app — one App Store product page serves Mac & iPhone.
export const APP_STORE_URL = "https://apps.apple.com/us/app/fiple/id6785251758";

// The /download page: explains the install and auto-starts the .zip download.
export const MAC_DOWNLOAD_URL = "/download";

// The actual file. Bump ?v= to the new build's hash when replacing the zip,
// or Cloudflare keeps serving the cached old build for hours.
export const MAC_DOWNLOAD_FILE_URL = "/downloads/Fiple-1.1.0-mac.zip?v=acb59b5e";
