import { formatDate, formatRelative } from "../../date";

describe("formatDate", () => {

    it("formats date with default separator", () => {
        expect(formatDate(new Date("2025-07-23"))).toBe("2025-07-23");
    });

    it("formats date with custom separator", () => {
        expect(formatDate(new Date("2025-07-23"), "/")).toBe("2025/07/23");
    });
});

describe("formatRelative", () => {
    const today = new Date();

    const addDays = (date: Date, days: number): Date => {
        const d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    };

    it('returns "today" for current date', () => {
        expect(formatRelative(today)).toBe("today");
    });

    it('returns "tomorrow" for tomorrow', () => {
        expect(formatRelative(addDays(today, 1))).toBe("tomorrow");
    });

    it('returns "yesterday" for yesterday', () => {
        expect(formatRelative(addDays(today, -1))).toBe("yesterday");
    });

    it('returns "in X days" for future dates', () => {
        expect(formatRelative(addDays(today, 5))).toBe("in 5 days");
    });

    it('returns "X days ago" for past dates', () => {
        expect(formatRelative(addDays(today, -3))).toBe("3 days ago");
    });
});
