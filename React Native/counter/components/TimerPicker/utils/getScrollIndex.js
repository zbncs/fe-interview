export const getScrollIndex = (variables) => {
    const { value, numberOfItems, padWithNItems, disableInfiniteScroll } =
        variables;

    return (
        ((value + numberOfItems) % (numberOfItems * 3)) +
        (disableInfiniteScroll ? padWithNItems : 0) -
        (padWithNItems - 1)
    );
};
