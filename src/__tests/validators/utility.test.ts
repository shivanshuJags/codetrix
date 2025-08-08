import { isCreditCard, isEmail, isPhoneNumber, isPostalCode, isStrongPassword, isURL, isUsername } from "../../validators";

describe('isEmail', () => {
    it('should return true for valid emails', () => {
        expect(isEmail('test@example.com')).toBe(true);
        expect(isEmail('user.name+alias@domain.co')).toBe(true);
    });

    it('should return false for invalid emails', () => {
        expect(isEmail('plainaddress')).toBe(false);
        expect(isEmail('user@.com')).toBe(false);
    });
});


describe('isStrongPassword', () => {
    it('should return true for strong passwords', () => {
        expect(isStrongPassword('Aa1@abcd')).toBe(true);
    });

    it('should return false for weak passwords', () => {
        expect(isStrongPassword('12345678')).toBe(false);
        expect(isStrongPassword('password')).toBe(false);
        expect(isStrongPassword('ABC123!!')).toBe(false);
    });
});

describe('isPhoneNumber', () => {
    it('should return true for valid international numbers', () => {
        expect(isPhoneNumber('+919999999999')).toBe(true);
    });

    it('should return false for invalid numbers', () => {
        expect(isPhoneNumber('123')).toBe(false);
        expect(isPhoneNumber('abcdefgh')).toBe(false);
    });
});

describe('isUsername', () => {
    it('should return true for valid usernames', () => {
        expect(isUsername('user_01')).toBe(true);
        expect(isUsername('abc123')).toBe(true);
    });

    it('should return false for invalid usernames', () => {
        expect(isUsername('ab')).toBe(false); // too short
        expect(isUsername('user@name')).toBe(false); // invalid char
    });
});

describe('isPostalCode', () => {
    // US postal codes
    it('should return true for valid US postal code', () => {
        expect(isPostalCode('12345', 'US')).toBe(true);
        expect(isPostalCode('12345-6789', 'US')).toBe(true);
    });

    it('should return false for invalid US postal code', () => {
        expect(isPostalCode('1234', 'US')).toBe(false);
        expect(isPostalCode('123456', 'US')).toBe(false);
        expect(isPostalCode('ABCDE', 'US')).toBe(false);
    });

    // IN postal codes
    it('should return true for valid Indian postal code', () => {
        expect(isPostalCode('560001', 'IN')).toBe(true);
    });

    it('should return false for invalid Indian postal code', () => {
        expect(isPostalCode('56001', 'IN')).toBe(false);
        expect(isPostalCode('5600011', 'IN')).toBe(false);
        expect(isPostalCode('ABCDEF', 'IN')).toBe(false);
    });

    // Fallback case: unsupported country
    it('should return false for unsupported country code', () => {
        expect(isPostalCode('12345', 'FR')).toBe(false);
        expect(isPostalCode('560001', 'XYZ')).toBe(false);
    });

    // Default country (IN)
    it('should default to IN if no country is provided', () => {
        expect(isPostalCode('560001')).toBe(true);
        expect(isPostalCode('12345')).toBe(false);
    });
});

describe('isCreditCard', () => {
    it('should return false for non-numeric input or invalid length', () => {
        expect(isCreditCard('abcd efgh ijkl mnop')).toBe(false); // non-numeric
        expect(isCreditCard('1234')).toBe(false); // too short
        expect(isCreditCard('1234-5678')).toBe(false); // too short + hyphen
    });

    it('should return false for completely invalid card number (fails Luhn)', () => {
        expect(isCreditCard('0000 0000 0000 0000')).toBe(false);
    });

    it('should return true for a valid Visa card number', () => {
        expect(isCreditCard('4111 1111 1111 1111')).toBe(true); // passes Luhn
    });

    it('should return true for valid MasterCard number with >9 digit doubling', () => {
        expect(isCreditCard('5500 0000 0000 0004')).toBe(true); // doubles to >9
    });

    it('should handle sanitization correctly (hyphens, spaces)', () => {
        expect(isCreditCard('4111-1111-1111-1111')).toBe(true);
        expect(isCreditCard('4111111111111111')).toBe(true);
    });

    it('should return false if checksum fails due to Luhn mismatch', () => {
        expect(isCreditCard('4111 1111 1111 1112')).toBe(false); // off by 1 digit
    });
});

describe('isURL', () => {
    it('should return true for valid URLs', () => {
        expect(isURL('http://example.com')).toBe(true);
        expect(isURL('https://sub.example.co/path')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
        expect(isURL('example')).toBe(false);
        expect(isURL('http:/example.com')).toBe(false);
    });
});
