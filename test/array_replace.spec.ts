import { array_replace } from "../src";

describe('array_replace', () => {
    it('should replace values in an array with values from another array', () => {
        const inputArray = { a: 1, b: 2, c: 3 };
        const replacementArray = { b: 4, c: 5, d: 6 };
        const expectedArray = { a: 1, b: 4, c: 5, d: 6 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).toEqual(expectedArray);
    });

    it('should return a new array with replaced values', () => {
        const inputArray = { a: 1, b: 2, c: 3 };
        const replacementArray = { b: 4, c: 5, d: 6 };
        const expectedArray = { a: 1, b: 4, c: 5, d: 6 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).not.toBe(inputArray);
        expect(result).toEqual(expectedArray);
    });

    it('should work with arrays of any length', () => {
        const inputArray = { a: 1, b: 2, c: 3 };
        const replacementArray = { b: 4, c: 5, d: 6, e: 7, f: 8 };
        const expectedArray = { a: 1, b: 4, c: 5, d: 6, e: 7, f: 8 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).toEqual(expectedArray);
    });

    it('should return a new array with only replacement values if input array is empty', () => {
        const inputArray = {};
        const replacementArray = { b: 4, c: 5, d: 6 };
        const expectedArray = { b: 4, c: 5, d: 6 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).toEqual(expectedArray);
    });

    it('should return a new array with only input values if replacement array is empty', () => {
        const inputArray = { a: 1, b: 2, c: 3 };
        const replacementArray = {};
        const expectedArray = { a: 1, b: 2, c: 3 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).toEqual(expectedArray);
    });
});