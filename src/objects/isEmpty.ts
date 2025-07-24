/**
 * Checks if a value is considered empty.
 * Supports strings, arrays, objects, maps, and sets.
 *
 * @param value - The value to check.
 * @returns `true` if the value is empty, `false` otherwise.
 *
 * @example
 * isEmpty(''); // true
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty([1]); // false
 */
export function isEmpty(value: any): boolean {
  if (value == null) return true;

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}