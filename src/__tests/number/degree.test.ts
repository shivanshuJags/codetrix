import { angleDifference, degreesToRadians, degToRad, isAngleBetween, normalizeDegrees, radiansToDegrees, radToDeg } from "../../number";

describe('Degree Functions', () => {
    describe('radiansToDegrees', () => {
        it('should convert radians to degrees correctly', () => {
            expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
            expect(radiansToDegrees(Math.PI / 2)).toBeCloseTo(90);
            expect(radiansToDegrees(0)).toBeCloseTo(0);
        });
    });

    describe('degreesToRadians', () => {
        it('should convert degrees to radians correctly', () => {
            expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
            expect(degreesToRadians(90)).toBeCloseTo(Math.PI / 2);
            expect(degreesToRadians(0)).toBeCloseTo(0);
        });
    });

    describe('degToRad', () => {
        it('should convert degrees to radians correctly (alias)', () => {
            expect(degToRad(180)).toBeCloseTo(Math.PI);
            expect(degToRad(0)).toBeCloseTo(0);
        });
    });

    describe('radToDeg', () => {
        it('should convert radians to degrees correctly (alias)', () => {
            expect(radToDeg(Math.PI)).toBeCloseTo(180);
            expect(radToDeg(0)).toBeCloseTo(0);
        });
    });

    describe('normalizeDegrees', () => {
        it('should return the same angle if within 0-360', () => {
            expect(normalizeDegrees(45)).toBe(45);
            expect(normalizeDegrees(359)).toBe(359);
        });

        it('should normalize angles greater than 360', () => {
            expect(normalizeDegrees(370)).toBe(10);
            expect(normalizeDegrees(720)).toBe(0);
        });

        it('should normalize negative angles', () => {
            expect(normalizeDegrees(-10)).toBe(350);
            expect(normalizeDegrees(-370)).toBe(350);
        });

        it('should normalize 0 and 360 to 0', () => {
            expect(normalizeDegrees(0)).toBe(0);
            expect(normalizeDegrees(360)).toBe(0);
        });
    });

    describe('angleDifference', () => {
        it('should return the minimal angle difference between two values', () => {
            expect(angleDifference(10, 30)).toBe(20);
            expect(angleDifference(350, 10)).toBe(20);
            expect(angleDifference(90, 270)).toBe(180);
            expect(angleDifference(0, 360)).toBe(0);
            expect(angleDifference(45, 405)).toBe(0);
        });
    });

    describe('isAngleBetween', () => {
        it('should return true for angles within a non-wrapping range', () => {
            expect(isAngleBetween(30, 10, 50)).toBe(true);
            expect(isAngleBetween(10, 10, 50)).toBe(true);
            expect(isAngleBetween(50, 10, 50)).toBe(true);
        });

        it('should return false for angles outside a non-wrapping range', () => {
            expect(isAngleBetween(5, 10, 50)).toBe(false);
            expect(isAngleBetween(60, 10, 50)).toBe(false);
        });

        it('should return true for angles within a wrapping range', () => {
            expect(isAngleBetween(350, 300, 30)).toBe(true);
            expect(isAngleBetween(10, 300, 30)).toBe(true);
            expect(isAngleBetween(300, 300, 30)).toBe(true);
            expect(isAngleBetween(30, 300, 30)).toBe(true);
        });

        it('should return false for angles outside a wrapping range', () => {
            expect(isAngleBetween(100, 300, 30)).toBe(false);
            expect(isAngleBetween(250, 300, 30)).toBe(false);
        });

        it('should normalize input angles before checking', () => {
            expect(isAngleBetween(-10, 350, 30)).toBe(true); // -10 -> 350
        });
    });
});