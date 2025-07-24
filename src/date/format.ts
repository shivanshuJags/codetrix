/**
 * Formats a date as a string in `YYYY-MM-DD` format (or custom separator).
 *
 * @param date - The Date object to format.
 * @param separator - Optional separator to use between year, month, and day (default: `-`).
 * @returns A formatted date string.
 *
 * @example
 * formatDate(new Date(2025, 6, 23)); // '2025-07-23'
 * formatDate(new Date(2025, 6, 23), '/'); // '2025/07/23'
 */
export function formatDate(date: Date, separator: string = '-'): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}${separator}${mm}${separator}${dd}`;
}

/**
 * Returns a human-readable string describing how far a given date is from today.
 *
 * @param date - The Date object to compare with today.
 * @returns A relative time string like 'today', 'tomorrow', 'yesterday', or 'X days ago' / 'in X days'.
 *
 * @example
 * formatRelative(new Date()); // 'today'
 * formatRelative(new Date(Date.now() + 86400000)); // 'tomorrow'
 * formatRelative(new Date(Date.now() - 2 * 86400000)); // '2 days ago'
 */
export function formatRelative(date: Date): string {
    const today = new Date();
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const diffTime = dateOnly.getTime() - todayOnly.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'tomorrow';
    if (diffDays === -1) return 'yesterday';
    if (diffDays > 1) return `in ${diffDays} days`;
    return `${Math.abs(diffDays)} days ago`;
}