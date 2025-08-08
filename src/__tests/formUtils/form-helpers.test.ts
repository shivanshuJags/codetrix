import { isFormDirty, isFormValid, resetFormFields, touchAllFields, untouchAllFields } from "../../formUtils";


describe('Form Utility Functions', () => {
    let form: { [key: string]: any };

    beforeEach(() => {
        form = {
            name: { value: 'John', dirty: false, valid: true, touched: false },
            email: { value: 'john@example.com', dirty: false, valid: true, touched: false },
        };
    });

    describe('isFormDirty', () => {
        it('should return false when all fields are not dirty', () => {
            expect(isFormDirty(form)).toBe(false);
        });

        it('should return true when any field is dirty', () => {
            form.name.dirty = true;
            expect(isFormDirty(form)).toBe(true);
        });
    });

    describe('isFormValid', () => {
        it('should return true when all fields are valid', () => {
            expect(isFormValid(form)).toBe(true);
        });

        it('should return false when any field is invalid', () => {
            form.email.valid = false;
            expect(isFormValid(form)).toBe(false);
        });
    });

    describe('resetFormFields', () => {
        it('should reset all form fields to default values', () => {
            form.name.dirty = true;
            form.name.touched = true;
            resetFormFields(form);
            expect(form.name.value).toBe('');
            expect(form.name.dirty).toBe(false);
            expect(form.name.touched).toBe(false);
        });
    });

    describe('touchAllFields', () => {
        it('should mark all fields as touched', () => {
            touchAllFields(form);
            expect(form.name.touched).toBe(true);
            expect(form.email.touched).toBe(true);
        });
    });

    describe('untouchAllFields', () => {
        it('should mark all fields as untouched', () => {
            form.name.touched = true;
            form.email.touched = true;
            untouchAllFields(form);
            expect(form.name.touched).toBe(false);
            expect(form.email.touched).toBe(false);
        });
    });
});
