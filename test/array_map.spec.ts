import { array_map } from "../src";

describe('array_map', () => {
    it('should return an array of the same length as the input array when given a valid array and callback function', () => {
        const inputArray = [1, 2, 3];
        const callback = (value: number) => value * 2;
        const expectedOutput = [2, 4, 6];

        const result = array_map(inputArray, callback);

        expect(result).toHaveLength(inputArray.length);
        expect(result).toEqual(expectedOutput);
    });

    it('should return an empty array when given an empty array', () => {
        const inputArray: number[] = [];
        const callback = (value: number) => value * 2;
        const expectedOutput: number[] = [];

        const result = array_map(inputArray, callback);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with NaN values when given an array with undefined values', () => {
        const inputArray = [1, undefined, 3] as any[];
        const callback = (value: number) => value * 2;
        const expectedOutput = [2, NaN, 6];

        const result = array_map(inputArray, callback);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with the same values as the input array when given a callback function that returns the same value for all elements', () => {
        const inputArray = [1, 2, 3];
        const callback = () => 10;
        const expectedOutput = [10, 10, 10];

        const result = array_map(inputArray, callback);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with the same values as the input array when given a callback function that returns undefined for all elements', () => {
        const inputArray = [1, 2, 3];
        const callback = () => undefined;
        const expectedOutput = [undefined, undefined, undefined];

        const result = array_map(inputArray, callback);

        expect(result).toEqual(expectedOutput);
    });
});