export function countOccurrences(str: string, char: string): number {
    return [...str].filter(c => c === char).length;
}
