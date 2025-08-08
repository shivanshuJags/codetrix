import { getAllErrorMessages, getBuiltInErrorMessage, getCustomErrorMessage, getFirstErrorMessage } from "../../formUtils";

describe('Error Message Utilities', () => {
    describe('getBuiltInErrorMessage', () => {
        it('should return null if no errors are provided', () => {
            expect(getBuiltInErrorMessage(null as any)).toBeNull();
        });

        it('should return required message', () => {
            expect(getBuiltInErrorMessage({ required: true }, 'Email')).toBe('Email is required.');
        });

        it('should return email format message', () => {
            expect(getBuiltInErrorMessage({ email: true }, 'Email')).toBe('Invalid email format.');
        });

        it('should return minlength message', () => {
            expect(getBuiltInErrorMessage({ minlength: { requiredLength: 5 } }, 'Password')).toBe('Password must be at least 5 characters.');
        });

        it('should return maxlength message', () => {
            expect(getBuiltInErrorMessage({ maxlength: { requiredLength: 20 } }, 'Username')).toBe('Username must be at most 20 characters.');
        });

        it('should return pattern message', () => {
            expect(getBuiltInErrorMessage({ pattern: true }, 'Username')).toBe('Username has an invalid format.');
        });

        it('should return min value message', () => {
            expect(getBuiltInErrorMessage({ min: 18 }, 'Age')).toBe('Age must be at least 18.');
        });

        it('should return max value message', () => {
            expect(getBuiltInErrorMessage({ max: 60 }, 'Age')).toBe('Age must be at most 60.');
        });
    });

    describe('getCustomErrorMessage', () => {
        it('should return null if no errors are provided', () => {
            expect(getCustomErrorMessage(null as any)).toBeNull();
        });

        it('should return weakPassword message', () => {
            expect(getCustomErrorMessage({ weakPassword: true }, 'Password')).toBe(
                'Password must include uppercase, lowercase, numbers, and special characters.'
            );
        });

        it('should return fieldsMismatch message', () => {
            expect(getCustomErrorMessage({ fieldsMismatch: true }, 'Passwords')).toBe('The fields do not match.');
        });

        it('should return whitespace message', () => {
            expect(getCustomErrorMessage({ whitespace: true }, 'Username')).toBe('Username cannot start or end with spaces.');
        });

        it('should return usernameTaken message', () => {
            expect(getCustomErrorMessage({ usernameTaken: true }, 'Username')).toBe('This username is already taken.');
        });

        it('should return emailTaken message', () => {
            expect(getCustomErrorMessage({ emailTaken: true }, 'Email')).toBe('This email is already registered.');
        });

        it('should return null if errors is undefined or null', () => {
            expect(getCustomErrorMessage(undefined)).toBeNull();
            expect(getCustomErrorMessage(null as any)).toBeNull();
        });

        it('should return null if errors object has unknown keys', () => {
            const unknownErrors = { randomKey: true, anotherOne: false };
            expect(getCustomErrorMessage(unknownErrors, 'CustomField')).toBeNull();
        });
    });

    describe('getFirstErrorMessage', () => {
        it('should return the first built-in error if exists', () => {
            const errors = { required: true, weakPassword: true };
            expect(getFirstErrorMessage(errors, 'Email')).toBe('Email is required.');
        });

        it('should return the first custom error if no built-in exists', () => {
            const errors = { usernameTaken: true };
            expect(getFirstErrorMessage(errors, 'Username')).toBe('This username is already taken.');
        });

        it('should return null if no errors', () => {
            expect(getFirstErrorMessage(null as any)).toBeNull();
        });
    });

    describe('getAllErrorMessages', () => {
        it('should return all applicable messages for mixed errors', () => {
            const errors = {
                required: true,
                minlength: { requiredLength: 6 },
                weakPassword: true,
                usernameTaken: true,
            };
            const messages = getAllErrorMessages(errors, 'Password');
            expect(messages).toEqual([
                'Password is required.',
                'Password must be at least 6 characters.',
                'Password must include uppercase, lowercase, numbers, and special characters.',
                'This username is already taken.',
            ]);
        });

        it('should return an empty array if no errors', () => {
            expect(getAllErrorMessages(null as any)).toEqual([]);
        });
    });
});
