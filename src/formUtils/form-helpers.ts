/**
 * Checks if any field in the form has been modified (dirty).
 *
 * @param form - The form object with fields containing `dirty` property.
 * @returns `true` if at least one field is dirty; otherwise, `false`.
 */
export function isFormDirty(form: { [key: string]: any }): boolean {
    return Object.values(form).some(field => field.dirty);
}

/**
 * Checks if all fields in the form are valid.
 *
 * @param form - The form object with fields containing `valid` property.
 * @returns `true` if all fields are valid; otherwise, `false`.
 */
export function isFormValid(form: { [key: string]: any }): boolean {
    return Object.values(form).every(field => field.valid);
}

/**
 * Resets all fields in the form by clearing the value
 * and marking them as untouched and not dirty.
 *
 * @param form - The form object where each field has `value`, `touched`, and `dirty` properties.
 */
export function resetFormFields(form: { [key: string]: any }): void {
    Object.keys(form).forEach((key) => {
        form[key].value = '';
        form[key].touched = false;
        form[key].dirty = false;
    });
}

/**
 * Marks all fields in the form as touched (used for triggering validation).
 *
 * @param form - The form object where each field has a `touched` property.
 */
export function touchAllFields(form: { [key: string]: any }): void {
    Object.keys(form).forEach((key) => {
        form[key].touched = true;
    });
}

/**
 * Marks all fields in the form as untouched (used to reset validation state).
 *
 * @param form - The form object where each field has a `touched` property.
 */
export function untouchAllFields(form: { [key: string]: any }): void {
    Object.keys(form).forEach((key) => {
        form[key].touched = false;
    });
}
