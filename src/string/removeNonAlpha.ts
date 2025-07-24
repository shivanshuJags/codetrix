export function removeNonAlpha(str: string): string {
    return str.replace(/[^a-zA-Z]/g, '');
}
