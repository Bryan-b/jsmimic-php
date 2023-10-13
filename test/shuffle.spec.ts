import { shuffle } from "../src";

describe('shuffle', () => {
    it('should shuffle an array in a random order', () => {
        // Create an ordered array
        const orderedArray = [1, 2, 3, 4, 5];
        // Clone the array to compare it after shuffling
        const clonedArray = [...orderedArray];

        shuffle(orderedArray);

        // Expect the shuffled array to have the same elements but in a different order
        expect(orderedArray).not.toEqual(clonedArray);
        expect(orderedArray.sort()).toEqual(clonedArray.sort());
    });

    it('should shuffle an empty array', () => {
        const emptyArray = [] as number[];
        shuffle(emptyArray);

        // Expect the shuffled empty array to remain empty
        expect(emptyArray).toEqual([]);
    });

    it('should shuffle an array with a single element', () => {
        const singleElementArray = [42];
        const clonedArray = [...singleElementArray];

        shuffle(singleElementArray);

        // Expect the shuffled array to remain the same (only one element)
        expect(singleElementArray).toEqual(clonedArray);
    });

    it('should shuffle a large array', () => {
        // Create a large array of unique values
        const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
        const clonedArray = [...largeArray];

        shuffle(largeArray);

        // Expect the shuffled large array to have the same elements but in a different order
        expect(largeArray).not.toEqual(clonedArray);
        expect(largeArray.sort()).toEqual(clonedArray.sort());
    });
});