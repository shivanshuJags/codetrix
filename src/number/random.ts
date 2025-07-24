export function random(min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min;
}

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomByDigits(digits: number): number {
    if (digits <= 0) {
        throw new Error('Number of digits must be greater than 0');
    }

    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}