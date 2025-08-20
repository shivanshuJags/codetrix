import {

    toQueryString,
    parseQueryString,
    csvToJson,
    jsonToCsv,
    copyToClipboard,
    downloadFile,
} from "../../utility/helper";

// toQueryString
describe("toQueryString", () => {
    it("should convert object to query string", () => {
        expect(toQueryString({ a: 1, b: 2 })).toBe("a=1&b=2");
    });

    it("should encode special characters", () => {
        expect(toQueryString({ "a b": "c&d" })).toBe("a%20b=c%26d");
    });

    it("should handle empty object", () => {
        expect(toQueryString({})).toBe("");
    });
});

// parseQueryString
describe("parseQueryString", () => {
    it("should parse query string to object", () => {
        expect(parseQueryString("a=1&b=2")).toEqual({ a: "1", b: "2" });
    });

    it("should decode encoded characters", () => {
        expect(parseQueryString("a%20b=c%26d")).toEqual({ "a b": "c&d" });
    });

    it("should handle empty string", () => {
        expect(parseQueryString("")).toEqual({});
    });

    it("should ignore leading ?", () => {
        expect(parseQueryString("?a=1&b=2")).toEqual({ a: "1", b: "2" });
    });

    it("should handle missing value", () => {
        expect(parseQueryString("a=")).toEqual({ a: "" });
    });
});

// csvToJson
describe("csvToJson", () => {
    it("should convert CSV to JSON array", () => {
        const csv = "name,age\nAlice,25\nBob,30";
        expect(csvToJson(csv)).toEqual([
            { name: "Alice", age: "25" },
            { name: "Bob", age: "30" },
        ]);
    });

    it("should handle custom delimiter", () => {
        const csv = "name|age\nAlice|25";
        expect(csvToJson(csv, "|")).toEqual([{ name: "Alice", age: "25" }]);
    });

    it("should trim spaces", () => {
        const csv = "name , age\n Alice , 25 ";
        expect(csvToJson(csv)).toEqual([{ name: "Alice", age: "25" }]);
    });

    it("should handle missing values", () => {
        const csv = "name,age\nAlice";
        expect(csvToJson(csv)).toEqual([{ name: "Alice", age: "" }]);
    });
});

// jsonToCsv
describe("jsonToCsv", () => {
    it("should convert JSON array to CSV", () => {
        const json = [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
        ];
        expect(jsonToCsv(json)).toBe("name,age\nAlice,25\nBob,30");
    });

    it("should handle custom delimiter", () => {
        const json = [{ name: "Alice", age: 25 }];
        expect(jsonToCsv(json, "|")).toBe("name|age\nAlice|25");
    });

    it("should handle empty array", () => {
        expect(jsonToCsv([])).toBe("");
    });

    it("should handle missing values", () => {
        const json = [{ name: "Alice" }];
        expect(jsonToCsv(json)).toBe("name\nAlice");
    });

    it("should use empty string for missing values", () => {
        const json = [{ name: "Alice" }, { age: 30 }];
        expect(jsonToCsv(json)).toBe("name\nAlice\n");
    });
});

// copyToClipboard (mocking browser APIs)
describe("copyToClipboard", () => {
    beforeEach(() => {
        // @ts-ignore
        global.navigator = {};
        // @ts-ignore
        global.window = {};
        // @ts-ignore
        global.document = {
            createElement: jest.fn(() => ({
                style: {},
                focus: jest.fn(),
                select: jest.fn(),
            }) as unknown as HTMLElement),
            body: {
                appendChild: jest.fn(),
                removeChild: jest.fn(),
            } as any,
            execCommand: jest.fn(),
        };
    });

    it("should use clipboard API if available", async () => {
        // @ts-ignore
        global.navigator.clipboard = { writeText: jest.fn().mockResolvedValue(undefined) };
        // @ts-ignore
        global.window.isSecureContext = true;
        await copyToClipboard("test");
        expect(global.navigator.clipboard.writeText).toHaveBeenCalledWith("test");
    });

    it("should fallback if clipboard API not available", async () => {
        // @ts-ignore
        global.navigator.clipboard = undefined;
        // @ts-ignore
        global.window.isSecureContext = false;
        await copyToClipboard("test");
        expect(global.document.createElement).toHaveBeenCalledWith("textarea");
        expect(global.document.execCommand).toHaveBeenCalledWith("copy");
    });
});

// downloadFile (mocking browser APIs)
describe("downloadFile", () => {
    beforeEach(() => {
        // @ts-ignore
        global.document = {
            createElement: jest.fn(() => ({
                set href(val) { },
                set download(val) { },
                click: jest.fn(),
            }) as unknown as HTMLElement),
            body: {
                appendChild: jest.fn(),
                removeChild: jest.fn(),
            } as any,
        };
        // @ts-ignore
        global.URL = {
            createObjectURL: jest.fn(() => "blob:url"),
            revokeObjectURL: jest.fn(),
        };
    });

    it("should trigger download for string data", () => {
        downloadFile("data:text/plain,Hello", "file.txt");
        expect(global.document.createElement).toHaveBeenCalledWith("a");
        expect(global.document.body.appendChild).toHaveBeenCalled();
        expect(global.document.body.removeChild).toHaveBeenCalled();
    });

    it("should trigger download for Blob data and revoke URL", () => {
        const blob = new Blob(["Hello"], { type: "text/plain" });
        downloadFile(blob, "file.txt");
        expect(global.URL.createObjectURL).toHaveBeenCalledWith(blob);
        expect(global.URL.revokeObjectURL).toHaveBeenCalledWith("blob:url");
    });
});