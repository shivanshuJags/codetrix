import { roundTo } from "../../number";

describe('roundTo', () => {
    it('should round to the nearest decimal place', () => {
        expect(roundTo(3.14159, 2)).toBe(3.14);
        expect(roundTo(3.1459, 3)).toBe(3.146);
        expect(roundTo(3.9, 0)).toBe(4);
    });
});
