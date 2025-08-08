/**
 * Sets a value to the given field in a form and marks it as dirty.
 * 
 * @param form - The form object containing fields.
 * @param key - The key of the field to update.
 * @param value - The value to assign to the field.
 */
export function setFieldValue(form: { [key: string]: any }, key: string, value: any): void {
    if (form[key]) {
        form[key].value = value;
        form[key].dirty = true;
    }
}

/**
 * Retrieves the value from the specified field in the form.
 *
 * @param form - The form object containing fields.
 * @param key - The key of the field to retrieve the value from.
 * @returns The value of the field, or null if not found.
 */
export function getFieldValue(form: { [key: string]: any }, key: string): any {
    return form[key]?.value ?? null;
}

/**
 * Sets the touched status of a form field.
 * 
 * @param form - The form object containing fields.
 * @param key - The key of the field to mark as touched.
 * @param touched - Boolean indicating if the field has been touched.
 */
export function setFieldTouched(form: { [key: string]: any }, key: string, touched: boolean): void {
    if (form[key]) {
        form[key].touched = touched;
    }
}
