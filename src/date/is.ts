export function isAfter(date1: Date, date2: Date): boolean {
    return date1.getTime() > date2.getTime();
}

export function isBefore(date1: Date, date2: Date): boolean {
    return date1.getTime() < date2.getTime();
}

export function isSameDay(date1: Date, date2: Date): boolean {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

export function isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
}

export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
