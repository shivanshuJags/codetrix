/**
 * Validates whether a given string is in valid email format.
 * @param value - The string to validate.
 * @returns `true` if the string is a valid email, `false` otherwise.
 */
export function isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Checks whether the password is strong.
 * A strong password must contain at least:
 * - 8 characters
 * - 1 uppercase letter
 * - 1 lowercase letter
 * - 1 number
 * - 1 special character
 *
 * @param password - The password string to validate.
 * @returns `true` if strong, `false` otherwise.
 */
export function isStrongPassword(password: string): boolean {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
}

/**
 * Validates if a string is a valid international phone number.
 * Uses stricter E.164-like format: starts with optional +, 10-15 digits.
 *
 * @param phone - Phone number string.
 * @returns `true` if valid, `false` otherwise.
 */
export function isPhoneNumber(phone: string): boolean {
    return /^\+?[1-9]\d{9,14}$/.test(phone);
}

/**
 * Validates a username.
 * Must be 3-16 characters long, alphanumeric and underscores only.
 *
 * @param username - The username string.
 * @returns `true` if valid, `false` otherwise.
 */
export function isUsername(username: string): boolean {
    return /^[a-zA-Z0-9_]{3,16}$/.test(username);
}

/**
 * Validates a postal code based on the given country format.
 *
 * @param postalCode - The postal code to validate.
 * @param country - The country code ('US', 'IN', etc.). Defaults to 'US'.
 * @returns True if the postal code is valid for the given country, false otherwise.
 *
 * @example
 * isPostalCode("12345", "US") // true
 * isPostalCode("560001", "IN") // true
 */
export function isPostalCode(
    postalCode: string,
    country: string = 'IN'
): boolean {
    const patterns: Record<string, RegExp> = {
        US: /^\d{5}(-\d{4})?$/,
        IN: /^\d{6}$/,
        // Add more countries here in the future
    };

    return patterns[country]?.test(postalCode) ?? false;
}

/**
 * Checks if the input is a valid credit card number using Luhn's algorithm
 * and real-world formatting rules.
 *
 * @param input - The credit card number string
 * @returns True if valid, else false
 */
export function isCreditCard(input: string): boolean {
    const sanitized = input.replace(/[\s-]/g, '');

    // Basic format: 13 to 19 digits
    if (!/^\d{13,19}$/.test(sanitized)) return false;

    // Reject numbers with all digits the same (e.g., 0000..., 1111...)
    if (/^(\d)\1{12,18}$/.test(sanitized)) return false;

    // Luhn Algorithm
    let sum = 0;
    let shouldDouble = false;

    for (let i = sanitized.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitized[i], 10);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

/**
 * Validates whether a given string is a valid URL.
 *
 * @param url - The URL string to validate.
 * @returns `true` if valid, `false` otherwise.
 */
export function isURL(url: string): boolean {
    const pattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}([\/\w .-]*)*\/?$/i;
    return pattern.test(url);
}
