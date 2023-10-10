import { array_pad } from "../src";

describe('array_pad', () => {
    it('should return the original array when size is less than or equal to the length of the array', () => {
        const inputArray = [1, 2, 3];
        const size = 3;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual(inputArray);
    });

    it('should return a new array padded with the value when size is greater than the length of the array', () => {
        const inputArray = [1, 2, 3];
        const size = 5;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual([1, 2, 3, 0, 0]);
    });

    it('should return an empty array when input array is empty and size is 0', () => {
        const inputArray: number[] = [];
        const size = 0;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual([]);
    });

    it('should return a new array padded with the value when input array is empty and size is greater than 0', () => {
        const inputArray: number[] = [];
        const size = 3;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual([0, 0, 0]);
    });

    it('should return a new array with the value when input array is null and size is greater than 0', () => {
        const inputArray: number[] | null = null;
        const size = 3;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual([0, 0, 0]);
    });

    it('should throw an error when size is negative', () => {
        const inputArray = [1, 2, 3];
        const size = -1;
        const value = 0;

        expect(() => array_pad(inputArray, size, value)).toThrowError('Size cannot be negative');
    });
});