/**
 * Maps common built-in validation errors to readable messages.
 * Use this for client-side form validation feedback.
 *
 * @param errors - A dictionary of validation error keys and values.
 * @param label - The field label for dynamic messages.
 * @returns A human-readable error message or null.
 */
export function getBuiltInErrorMessage(
    errors: Record<string, any>,
    label: string = 'This field'
): string | null {
    if (!errors) return null;

    if (errors.required) return `${label} is required.`;
    if (errors.email) return `Invalid email format.`;
    if (errors.minlength) return `${label} must be at least ${errors.minlength.requiredLength} characters.`;
    if (errors.maxlength) return `${label} must be at most ${errors.maxlength.requiredLength} characters.`;
    if (errors.pattern) return `${label} has an invalid format.`;
    if (errors.min) return `${label} must be at least ${errors.min}.`;
    if (errors.max) return `${label} must be at most ${errors.max}.`;

    return null;
}

/**
 * Maps custom validation errors to human-readable messages.
 * Customize based on your business rules or regex checks.
 *
 * @param errors - A dictionary of validation error keys and values.
 * @param label - The field label for dynamic messages.
 * @returns A custom validation error message or null.
 */
export function getCustomErrorMessage(
    errors: Record<string, any>,
    label: string = 'This field'
): string | null {
    if (!errors) return null;

    if (errors.weakPassword)
        return `${label} must include uppercase, lowercase, numbers, and special characters.`;
    if (errors.fieldsMismatch) return `The fields do not match.`;
    if (errors.whitespace) return `${label} cannot start or end with spaces.`;
    if (errors.usernameTaken) return `This username is already taken.`;
    if (errors.emailTaken) return `This email is already registered.`;

    return null;
}

/**
 * Returns the first applicable error message from built-in or custom error maps.
 *
 * @param errors - Object containing validation errors.
 * @param label - Label to use in error messages.
 * @returns The first matched error message or null.
 */
export function getFirstErrorMessage(
    errors: Record<string, any>,
    label: string = 'This field'
): string | null {
    return getBuiltInErrorMessage(errors, label) || getCustomErrorMessage(errors, label);
}

/**
 * Extracts all human-readable messages from the errors object.
 *
 * @param errors - The validation errors object.
 * @param label - Optional field label.
 * @returns An array of error messages.
 */
export function getAllErrorMessages(
    errors: Record<string, any>,
    label: string = 'This field'
): string[] {
    const messages: string[] = [];

    for (const key in errors) {
        const singleError = { [key]: errors[key] };
        const msg = getFirstErrorMessage(singleError, label);
        if (msg) messages.push(msg);
    }

    return messages;
}
