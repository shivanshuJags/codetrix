export function camelCase(str: string): string {
    return str
        .replace(/[-_ ]+(.)/g, (_, group1) => group1.toUpperCase())
        .replace(/^[A-Z]/, m => m.toLowerCase());
}
