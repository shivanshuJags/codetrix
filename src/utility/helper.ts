/**
 * Converts an object into a query string.
 * 
 * @param {Record<string, any>} obj - The object to convert.
 * @returns {string} Query string (e.g., a=1&b=2).
 * 
 * @example
 * toQueryString({ a: 1, b: 2 }); // "a=1&b=2"
 */
export function toQueryString(obj: Record<string, any>): string {
    return Object.entries(obj)
        .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
        .join("&");
}

/**
 * Parses a query string into an object.
 * 
 * @param {string} str - The query string (e.g., "a=1&b=2").
 * @returns {Record<string, string>} Parsed object.
 * 
 * @example
 * parseQueryString("a=1&b=2"); // { a: "1", b: "2" }
 */
export function parseQueryString(str: string): Record<string, string> {
    return str
        .replace(/^\?/, "")
        .split("&")
        .filter(Boolean)
        .reduce((acc: Record<string, string>, pair) => {
            const [key, val] = pair.split("=");
            acc[decodeURIComponent(key)] = decodeURIComponent(val || "");
            return acc;
        }, {});
}

/**
 * Converts CSV string to JSON array.
 * 
 * @param {string} csv - The CSV data (first row is header).
 * @param {string} [delimiter=','] - Delimiter used in CSV.
 * @returns {Record<string, string>[]} JSON array.
 * 
 * @example
 * csvToJson("name,age\nAlice,25\nBob,30");
 * // [{ name: "Alice", age: "25" }, { name: "Bob", age: "30" }]
 */
export function csvToJson(csv: string, delimiter: string = ","): Record<string, string>[] {
    const [headerLine, ...lines] = csv.trim().split("\n");
    const headers = headerLine.split(delimiter).map(h => h.trim());

    return lines.map(line => {
        const values = line.split(delimiter).map(v => v.trim());
        return headers.reduce((obj, key, i) => {
            obj[key] = values[i] || "";
            return obj;
        }, {} as Record<string, string>);
    });
}

/**
 * Converts JSON array into CSV string.
 * 
 * @param {Record<string, any>[]} json - Array of objects.
 * @param {string} [delimiter=','] - Delimiter used in CSV.
 * @returns {string} CSV string.
 * 
 * @example
 * jsonToCsv([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]);
 * // "name,age\nAlice,25\nBob,30"
 */
export function jsonToCsv(json: Record<string, any>[], delimiter: string = ","): string {
    if (!json.length) return "";

    const headers = Object.keys(json[0]);
    const rows = json.map(obj => headers.map(h => obj[h] ?? "").join(delimiter));

    return [headers.join(delimiter), ...rows].join("\n");
}

/**
 * Copies a given string to the user's clipboard.
 *
 * @param {string} str - The string content to copy into the clipboard.
 * @returns {Promise<void>} - Resolves when the text has been successfully copied.
 *
 * @example
 * await copyToClipboard("Hello World");
 */
export async function copyToClipboard(str: string): Promise<void> {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(str);
    } else {
        // fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = str;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
}

/**
 * Triggers a download of a file in the browser.
 *
 * @param {Blob | string} data - The file data to download (Blob object or a string).
 * @param {string} filename - The name for the downloaded file (e.g., "file.txt").
 * @returns {void}
 *
 * @example
 * const blob = new Blob(["Hello World"], { type: "text/plain" });
 * downloadFile(blob, "hello.txt");
 */
export function downloadFile(data: Blob | string, filename: string): void {
    const url = typeof data === "string" ? data : URL.createObjectURL(data);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    if (data instanceof Blob) {
        URL.revokeObjectURL(url);
    }
}
