import { lowercaseToUpper } from "../constants/ascii";

export function capitalize(str: string): string {
    if (!str || str === '') return '';
    let result = '';
    const firstChar = str[0];
    const upperChar = lowercaseToUpper[firstChar] || firstChar;
    result += upperChar;
    let i = 1;
    while (str[i] !== undefined) {
        result += str[i];
        i++;
    }
    return result;

}