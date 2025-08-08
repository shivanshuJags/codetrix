/**
 * Checks if a value is not null, undefined, or an empty string.
 * Commonly used to validate required form fields.
 *
 * @param value - The input value to validate.
 * @returns True if value is not empty, otherwise false.
 */
export function isRequired(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
}

/**
 * Checks if a string meets the specified minimum length.
 *
 * @param value - The input string.
 * @param length - Minimum required length.
 * @returns True if string length >= length, otherwise false.
 */
export function minLength(value: string, length: number): boolean {
    return value?.length >= length;
}

/**
 * Checks if a string does not exceed the specified maximum length.
 *
 * @param value - The input string.
 * @param length - Maximum allowed length.
 * @returns True if string length <= length, otherwise false.
 */
export function maxLength(value: string, length: number): boolean {
    return value?.length <= length;
}

/**
 * Checks if a string matches a given regular expression pattern.
 *
 * @param value - The input string.
 * @param pattern - Regular expression to match against.
 * @returns True if the string matches the pattern, otherwise false.
 */
export function matchesPattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
}

/**
 * Checks if the given string contains only numeric characters.
 *
 * @param value - The input string.
 * @returns True if the string is numeric, otherwise false.
 */
export function isNumeric(value: string): boolean {
    return /^[0-9]+$/.test(value);
}

/**
 * Checks if two values are strictly equal.
 * Useful for confirming values like password and confirm password.
 *
 * @param value1 - First value.
 * @param value2 - Second value.
 * @returns True if values are equal, otherwise false.
 */
export function isEqual(value1: any, value2: any): boolean {
    return value1 === value2;
}
