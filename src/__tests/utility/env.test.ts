import {

    isBrowser,
    isNode,
    isMobile,
    isTablet,
    isDesktop,
    isServerless,
    isWebWorker,
    isElectron,
    getRuntimeEnv,
    getOS,
    getBrowserName,
    getDeviceType,
} from "../../utility/env";

describe("Environment Utilities", () => {
    describe("isBrowser", () => {
        it("should return true when window and document are defined", () => {
            (global as any).window = {};
            (global as any).document = {};
            expect(isBrowser()).toBe(true);
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return false when window or document are undefined", () => {
            expect(isBrowser()).toBe(false);
        });
    });

    describe("isNode", () => {
        it("should return true when process.versions.node is defined", () => {
            (global as any).process = { versions: { node: "18.0.0" } };
            expect(isNode()).toBe(true);
            delete (global as any).process;
        });

        it("should return false when process is undefined", () => {
            expect(isNode()).toBe(false);
        });

        it("should return false when process.versions?.node is undefined", () => {
            (global as any).process = { versions: {} };
            expect(isNode()).toBe(false);
            delete (global as any).process;
        });
    });

    describe("isMobile", () => {
        it("should return true for mobile user agents", () => {
            (global as any).window = {};
            (global as any).document = {};
            (global as any).navigator = { userAgent: "iPhone" };
            expect(isMobile()).toBe(true);
            delete (global as any).navigator;
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return false for desktop user agents", () => {
            (global as any).window = {};
            (global as any).document = {};
            (global as any).navigator = { userAgent: "Windows NT" };
            expect(isMobile()).toBe(false);
            delete (global as any).navigator;
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return false if not in browser", () => {
            expect(isMobile()).toBe(false);
        });
    });

    describe("isTablet", () => {
        it("should return true for tablet user agents", () => {
            (global as any).window = {};
            (global as any).document = {};
            (global as any).navigator = { userAgent: "iPad" };
            expect(isTablet()).toBe(true);
            delete (global as any).navigator;
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return false for non-tablet user agents", () => {
            (global as any).window = {};
            (global as any).document = {};
            (global as any).navigator = { userAgent: "Windows NT" };
            expect(isTablet()).toBe(false);
            delete (global as any).navigator;
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return false if not in browser", () => {
            expect(isTablet()).toBe(false);
        });
    });

    describe("isDesktop", () => {
        it("should return true for desktop user agents", () => {
            (global as any).window = {};
            (global as any).document = {};
            (global as any).navigator = { userAgent: "Windows NT" };
            expect(isDesktop()).toBe(true);
            delete (global as any).navigator;
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return false for mobile user agents", () => {
            (global as any).window = {};
            (global as any).document = {};
            (global as any).navigator = { userAgent: "Android" };
            expect(isDesktop()).toBe(false);
            delete (global as any).navigator;
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return false for tablet user agents", () => {
            (global as any).window = {};
            (global as any).document = {};
            (global as any).navigator = { userAgent: "iPad" };
            expect(isDesktop()).toBe(false);
            delete (global as any).navigator;
            delete (global as any).window;
            delete (global as any).document;
        });
    });

    describe("isServerless", () => {
        it("should return true if AWS_LAMBDA_FUNCTION_NAME is set", () => {
            (global as any).process = {
                versions: { node: "18.0.0" },
                env: { AWS_LAMBDA_FUNCTION_NAME: "lambda" }
            };
            expect(isServerless()).toBe(true);
            delete (global as any).process;
        });

        it("should return true if VERCEL is set", () => {
            (global as any).process = {
                versions: { node: "18.0.0" },
                env: { VERCEL: "1" }
            };
            expect(isServerless()).toBe(true);
            delete (global as any).process;
        });

        it("should return false if not serverless", () => {
            (global as any).process = {
                versions: { node: "18.0.0" },
                env: {}
            };
            expect(isServerless()).toBe(false);
            delete (global as any).process;
        });

        it("should return false if not node", () => {
            expect(isServerless()).toBe(false);
        });
    });

    describe("isWebWorker", () => {
        it("should return true if self.constructor.name is DedicatedWorkerGlobalScope", () => {
            (global as any).self = { constructor: { name: "DedicatedWorkerGlobalScope" } };
            expect(isWebWorker()).toBe(true);
            delete (global as any).self;
        });

        it("should return false otherwise", () => {
            expect(isWebWorker()).toBe(false);
        });
    });

    describe("isElectron", () => {
        it("should return true if process.versions.electron is defined", () => {
            (global as any).process = { versions: { node: "18.0.0", electron: "25.0.0" } };
            expect(isElectron()).toBe(true);
            delete (global as any).process;
        });

        it("should return false if not electron", () => {
            (global as any).process = { versions: { node: "18.0.0" } };
            expect(isElectron()).toBe(false);
            delete (global as any).process;
        });

        it("should return false if not node", () => {
            expect(isElectron()).toBe(false);
        });

        it("should return false if process.versions.electron is undefined", () => {
            (global as any).process = { versions: { node: "18.0.0", electron: undefined } };
            expect(isElectron()).toBe(false);
            delete (global as any).process;
        });
    });

    describe("getRuntimeEnv", () => {
        it("should return 'browser' if isBrowser is true", () => {
            (global as any).window = {};
            (global as any).document = {};
            expect(getRuntimeEnv()).toBe("browser");
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return 'electron' if isNode and isElectron are true", () => {
            (global as any).process = { versions: { node: "18.0.0", electron: "25.0.0" } };
            expect(getRuntimeEnv()).toBe("electron");
            delete (global as any).process;
        });

        it("should return 'node' if isNode is true", () => {
            (global as any).process = { versions: { node: "18.0.0" } };
            expect(getRuntimeEnv()).toBe("node");
            delete (global as any).process;
        });

        it("should return 'webworker' if isWebWorker is true", () => {
            (global as any).self = { constructor: { name: "DedicatedWorkerGlobalScope" } };
            expect(getRuntimeEnv()).toBe("webworker");
            delete (global as any).self;
        });

        it("should return 'unknown' otherwise", () => {
            expect(getRuntimeEnv()).toBe("unknown");
        });
    });

    describe("getOS", () => {
        it("should return correct OS for various user agents", () => {
            (global as any).window = {};
            (global as any).document = {};
            (global as any).navigator = { userAgent: "Windows NT" };
            expect(getOS()).toBe("Windows");
            (global as any).navigator = { userAgent: "Macintosh" };
            expect(getOS()).toBe("macOS");
            (global as any).navigator = { userAgent: "Linux" };
            expect(getOS()).toBe("Linux");
            (global as any).navigator = { userAgent: "Android" };
            expect(getOS()).toBe("Android");
            (global as any).navigator = { userAgent: "iPhone" };
            expect(getOS()).toBe("iOS");
            (global as any).navigator = { userAgent: "UnknownAgent" };
            expect(getOS()).toBe("Unknown");
            delete (global as any).navigator;
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return 'Node.js' if not in browser", () => {
            expect(getOS()).toBe("Node.js");
        });
    });

    describe("getBrowserName", () => {
        it("should return correct browser name for various user agents", () => {
            (global as any).window = {};
            (global as any).document = {};
            (global as any).navigator = { userAgent: "Edg" };
            expect(getBrowserName()).toBe("Edge");
            (global as any).navigator = { userAgent: "OPR" };
            expect(getBrowserName()).toBe("Opera");
            (global as any).navigator = { userAgent: "Chrome" };
            expect(getBrowserName()).toBe("Chrome");
            (global as any).navigator = { userAgent: "Safari" };
            expect(getBrowserName()).toBe("Safari");
            (global as any).navigator = { userAgent: "Firefox" };
            expect(getBrowserName()).toBe("Firefox");
            (global as any).navigator = { userAgent: "MSIE" };
            expect(getBrowserName()).toBe("Internet Explorer");
            (global as any).navigator = { userAgent: "UnknownAgent" };
            expect(getBrowserName()).toBe("Unknown");
            delete (global as any).navigator;
            delete (global as any).window;
            delete (global as any).document;
        });

        it("should return 'Node.js' if not in browser", () => {
            expect(getBrowserName()).toBe("Node.js");
        });
    });

    describe("getDeviceType", () => {
        it("should return 'mobile' for mobile user agents", () => {
            (global as any).navigator = { userAgent: "Android" };
            expect(getDeviceType()).toBe("mobile");
            delete (global as any).navigator;
        });

        it("should return 'tablet' for tablet user agents", () => {
            (global as any).navigator = { userAgent: "iPad" };
            expect(getDeviceType()).toBe("tablet");
            delete (global as any).navigator;
        });

        it("should return 'desktop' for desktop user agents", () => {
            (global as any).navigator = { userAgent: "Windows NT" };
            expect(getDeviceType()).toBe("desktop");
            delete (global as any).navigator;
        });

        it("should return 'desktop' if navigator is undefined", () => {
            expect(getDeviceType()).toBe("desktop");
        });
    });
});