/**
 * Checks if code is running in a browser environment.
 * @returns {boolean} - True if running in a browser, false otherwise.
 */
export function isBrowser(): boolean {
    return typeof window !== "undefined" && typeof document !== "undefined";
}

/**
 * Checks if code is running in a Node.js environment.
 * @returns {boolean} - True if running in Node.js, false otherwise.
 */
export function isNode(): boolean {
    return typeof process !== "undefined" && !!(process.versions?.node);
}

/**
 * Checks if the browser is on a mobile device.
 * @returns {boolean} - True if mobile browser, false otherwise.
 */
export function isMobile(): boolean {
    if (!isBrowser()) return false;
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

/**
 * Check if the current device is Tablet.
 * Uses user-agent string.
 * @returns {boolean} - True if device is a tablet, otherwise false.
 */
export function isTablet(): boolean {
    if (!isBrowser()) return false;
    return /Tablet|iPad|PlayBook|Silk/i.test(navigator.userAgent);
}

/**
 * Check if the current device is Desktop.
 * Falls back when not detected as Mobile or Tablet.
 * @returns {boolean} - True if device is desktop, otherwise false.
 */
export function isDesktop(): boolean {
    return isBrowser() && !isMobile() && !isTablet();
}

/**
 * Checks if the environment is a serverless runtime (Vercel, AWS Lambda, etc.).
 * @returns {boolean} - True if serverless, false otherwise.
 */
export function isServerless(): boolean {
    if (!isNode()) return false;
    return !!(
        process.env.AWS_LAMBDA_FUNCTION_NAME ||
        process.env.VERCEL ||
        process.env.NETLIFY
    );
}

/**
 * Checks if code is running inside a Web Worker.
 * @returns {boolean} - True if in Web Worker, false otherwise.
 */
export function isWebWorker(): boolean {
    return typeof self === "object" &&
        self.constructor &&
        self.constructor.name === "DedicatedWorkerGlobalScope";
}

/**
 * Checks if the environment is Electron (desktop apps).
 * @returns {boolean} - True if Electron, false otherwise.
 */
export function isElectron(): boolean {
    if (!isNode()) return false;
    return !!(process.versions?.electron);
}

/**
 * Detects the runtime environment name.
 * @returns {"browser" | "node" | "deno" | "bun" | "electron" | "webworker" | "unknown"}
 */
export function getRuntimeEnv():
    "browser" | "node" | "deno" | "bun" | "electron" | "webworker" | "unknown" {
    if (isBrowser()) return "browser";
    if (isNode() && isElectron()) return "electron";
    if (isNode()) return "node";
    if (isWebWorker()) return "webworker";
    return "unknown";
}

/**
 * Get the operating system name from the user agent.
 * @returns {string} OS name (e.g., "Windows", "macOS", "Linux", "Android", "iOS", "Unknown")
 */
export function getOS(): string {
    if (!isBrowser()) return "Node.js";

    const userAgent = navigator.userAgent;

    if (/Windows NT/i.test(userAgent)) return "Windows";
    if (/Macintosh|Mac OS X/i.test(userAgent)) return "macOS";
    if (/Linux/i.test(userAgent)) return "Linux";
    if (/Android/i.test(userAgent)) return "Android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";

    return "Unknown";
}

/**
 * Get the browser name from the user agent.
 * @returns {string} Browser name (e.g., "Chrome", "Safari", "Firefox", "Edge", "Opera", "Unknown")
 */
export function getBrowserName(): string {
    if (!isBrowser()) return "Node.js";

    const userAgent = navigator.userAgent;

    if (/Edg/i.test(userAgent)) return "Edge";
    if (/OPR|Opera/i.test(userAgent)) return "Opera";
    if (/Chrome/i.test(userAgent)) return "Chrome";
    if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) return "Safari";
    if (/Firefox/i.test(userAgent)) return "Firefox";
    if (/MSIE|Trident/i.test(userAgent)) return "Internet Explorer";

    return "Unknown";
}

/**
 * getDeviceType
 * ---------------------------------
 * Detects the device type based on User-Agent.
 * Returns one of: "mobile" | "tablet" | "desktop".
 *
 * @returns {"mobile" | "tablet" | "desktop"} The detected device type.
 *
 * @example
 * ```ts
 * const type = getDeviceType();
 * console.log(type); // "mobile"
 * ```
 */
export function getDeviceType(): "mobile" | "tablet" | "desktop" {
    if (typeof navigator === "undefined" || typeof navigator.userAgent !== "string") {
        return "desktop"; // Default fallback for server-side/Node.js
    }

    const ua = navigator.userAgent;

    if (/Mobi|Android/i.test(ua)) {
        return "mobile";
    }

    if (/Tablet|iPad/i.test(ua)) {
        return "tablet";
    }

    return "desktop";
}
