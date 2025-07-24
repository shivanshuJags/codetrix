import { percentage } from "../../number";

describe('percentage', () => {
    it('should return correct percentage', () => {
        expect(percentage(50, 200)).toBe(25);
        expect(percentage(1, 4)).toBe(25);
    });

    it('should return 0 if total is 0', () => {
        expect(percentage(5, 0)).toBe(0);
    });
});
