/**
 * Calculates the percentage of a value relative to a total.
 *
 * @param value The part value.
 * @param total The total or whole value.
 * @returns The percentage (0–100) or 0 if total is 0.
 *
 * @example
 * percentage(20, 100); // 20
 * percentage(30, 60);  // 50
 */
export function percentage(value: number, total: number): number {
    if (total === 0) return 0;
    return (value / total) * 100;
}