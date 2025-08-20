/**
 * Deeply merges two or more objects into a single object.
 *
 * @param objects - The objects to merge.
 * @returns A new object with merged properties.
 *
 * @example
 * mergeObjects({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
 */
export function mergeObjects<T extends object>(...objects: T[]): T {
    return objects.reduce((acc, obj) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (
                    typeof acc[key] === 'object' &&
                    typeof obj[key] === 'object' &&
                    !Array.isArray(acc[key]) &&
                    !Array.isArray(obj[key])
                ) {
                    acc[key] = mergeObjects(acc[key], obj[key]);
                } else {
                    acc[key] = obj[key];
                }
            }
        }
        return acc;
    }, {} as T);
}
