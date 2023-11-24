export const padWithZero = (value) => {
    if (value < 10) {
        return "0" + value;
    } else {
        return String(value);
    }
};
