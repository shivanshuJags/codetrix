export function flatten<T>(arr: any[]): T[] {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}
