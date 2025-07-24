/**
 * Returns a new array containing only the elements common to all input arrays.
 *
 * @template T The type of array elements.
 * @param arrays Two or more arrays to intersect.
 * @returns An array of elements found in all input arrays.
 *
 * @example
 * intersect([1, 2, 3], [2, 3, 4]); // [2, 3]
 */

export function intersect<T>(...arrays: T[][]): T[] {
    if (arrays.length === 0) return [];
    return arrays.reduce((acc, curr) => acc.filter(value => curr.includes(value)));
}