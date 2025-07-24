import { TimeParts } from "../type/date.type";

export function getDay(date: Date): number {
    return date.getDate();
}

export function getMonth(date: Date): number {
    return date.getMonth() + 1; // Month is 0-based in JSs
}

export function getYear(date: Date): number {
    return date.getFullYear();
}

export function getWeekNumber(date: Date): number {
    const tempDate = new Date(date.getTime());
    tempDate.setHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));
    const week1 = new Date(tempDate.getFullYear(), 0, 4);
    return 1 + Math.round(((tempDate.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
}

export function getDaysInMonth(date: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
}


export function getTimeParts(date: Date): TimeParts {
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        milliseconds: date.getMilliseconds(),
    };
}
