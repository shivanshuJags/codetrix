/**
 * Get query parameter value from a URL.
 * @param url - The full URL string.
 * @param key - The query parameter key.
 * @returns The value of the query parameter or null if not found.
 */
export function getQueryParam(url: string, key: string): string | null {
    const urlObj = new URL(url);
    return urlObj.searchParams.get(key);
}

/**
 * Add or update a query parameter in a URL.
 * @param url - The original URL.
 * @param key - Query parameter key.
 * @param value - Query parameter value.
 * @returns The updated URL string.
 */
export function setQueryParam(url: string, key: string, value: string): string {
    const urlObj = new URL(url);
    urlObj.searchParams.set(key, value);
    return urlObj.toString();
}

/**
 * Remove a query parameter from a URL.
 * @param url - The original URL.
 * @param key - The query parameter to remove.
 * @returns The updated URL without the query parameter.
 */
export function removeQueryParam(url: string, key: string): string {
    const urlObj = new URL(url);
    urlObj.searchParams.delete(key);
    return urlObj.toString();
}

/**
 * Check if a URL is valid.
 * @param url - The URL string to validate.
 * @returns True if the URL is valid, otherwise false.
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}
