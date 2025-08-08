/**
 * Extracts the current values from a form object where each field is expected
 * to be an object containing a `value` property.
 *
 * @param form - An object representing the form where each key maps to an object containing a `value` field.
 * @returns A new object with the same keys, each mapped to their corresponding value.
 *
 * @example
 * const form = {
 *   username: { value: 'john' },
 *   age: { value: 25 }
 * };
 * const values = extractFormValues(form); // { username: 'john', age: 25 }
 */
export function extractFormValues(form: { [key: string]: any }): Record<string, any> {
    const values: Record<string, any> = {};
    Object.keys(form).forEach((key) => {
        values[key] = form[key].value;
    });
    return values;
}

/**
 * Trims all string values in an object. Non-string values are returned as-is.
 *
 * @param formValues - An object of key-value pairs where values can be of any type.
 * @returns A new object with all string values trimmed (whitespace removed from start and end).
 *
 * @example
 * const rawValues = {
 *   username: '  john  ',
 *   age: 25
 * };
 * const trimmed = trimFormValues(rawValues); // { username: 'john', age: 25 }
 */
export function trimFormValues(formValues: Record<string, any>): Record<string, any> {
    const trimmed: Record<string, any> = {};
    Object.entries(formValues).forEach(([key, value]) => {
        trimmed[key] = typeof value === 'string' ? value.trim() : value;
    });
    return trimmed;
}
