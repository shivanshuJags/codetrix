export function setYear(date: Date, year: number): Date {
    const newDate = new Date(date);
    newDate.setFullYear(year);
    return newDate;
}

export function setMonth(date: Date, month: number): Date {
    const newDate = new Date(date);
    newDate.setMonth(month - 1); // JS months are 0-based
    return newDate;
}

export function setDay(date: Date, day: number): Date {
    const newDate = new Date(date);
    newDate.setDate(day);
    return newDate;
}

export function setTime(
    date: Date,
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0,
    milliseconds: number = 0
): Date {
    const newDate = new Date(date);
    newDate.setHours(hours, minutes, seconds, milliseconds);
    return newDate;
}

export function setToStartOfDay(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}