import { getFieldValue, setFieldTouched, setFieldValue } from "../../formUtils";

describe('Form Helper Functions', () => {
    let form: any;

    beforeEach(() => {
        form = {
            username: { value: '', dirty: false, touched: false },
            email: { value: 'test@example.com', dirty: false, touched: false }
        };
    });

    describe('setFieldValue', () => {
        it('should update the field value and mark it as dirty', () => {
            setFieldValue(form, 'username', 'shivanshu');
            expect(form.username.value).toBe('shivanshu');
            expect(form.username.dirty).toBe(true);
        });

        it('should do nothing if the field does not exist', () => {
            setFieldValue(form, 'nonExistent', 'value');
            expect(form.nonExistent).toBeUndefined();
        });
    });

    describe('getFieldValue', () => {
        it('should return the value of the field', () => {
            expect(getFieldValue(form, 'email')).toBe('test@example.com');
        });

        it('should return null for non-existent field', () => {
            expect(getFieldValue(form, 'nonExistent')).toBeNull();
        });
    });

    describe('setFieldTouched', () => {
        it('should set touched status to true', () => {
            setFieldTouched(form, 'username', true);
            expect(form.username.touched).toBe(true);
        });

        it('should do nothing if the field does not exist', () => {
            setFieldTouched(form, 'nonExistent', true);
            expect(form.nonExistent).toBeUndefined();
        });
    });
});
