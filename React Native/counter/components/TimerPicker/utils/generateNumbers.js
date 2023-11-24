import { padWithZero } from "./padWithZero";

export const generateNumbers = (
    numberOfItems,
    options
) => {
    if (numberOfItems <= 0) {
        return [];
    }

    let numbers = [];
    if (options.padWithZero) {
        for (let i = 0; i <= numberOfItems; i++) {
            numbers.push(padWithZero(i));
        }
    } else {
        for (let i = 0; i <= numberOfItems; i++) {
            numbers.push(String(i));
        }
    }
    if ((options.repeatNTimes ?? 1) > 1) {
        numbers = Array(options.repeatNTimes).fill(numbers).flat();
    }
    if (options.disableInfiniteScroll) {
        numbers.push(...Array(options.padWithNItems).fill(""));
        numbers.unshift(...Array(options.padWithNItems).fill(""));
    }
    return numbers;
};
