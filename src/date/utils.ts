export function cloneDate(date: Date): Date {
    return new Date(date.getTime());
}

export function daysBetween(start: Date, end: Date): number {
    const msPerDay = 24 * 60 * 60 * 1000;
    const diffTime = end.getTime() - start.getTime();
    return Math.floor(diffTime / msPerDay);
}

export function toISODate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function subDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}