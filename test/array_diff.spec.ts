import { array_diff } from "../src";

describe('array_diff', () => {
    it('should return an empty array when both input arrays are empty', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return arr1 when arr2 is empty', () => {
        const arr1 = [1, 2, 3];
        const arr2: number[] = [];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual(arr1);
    });

    it('should return an array containing all values from arr1 that are not present in arr2', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([1, 2]);
    });

    it('should return an empty array when arr1 is empty', () => {
        const arr1: number[] = [];
        const arr2 = [1, 2, 3];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return an array containing all values from arr1 when arr2 contains no common values', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([1, 2, 3]);
    });

    it('should return an empty array when arr1 and arr2 have the same values', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return an array with unique values from arr1 when arr2 contains duplicates', () => {
        const arr1: number[] = [1, 2, 3, 4, 5];
        const arr2: number[] = [3, 4, 5, 6, 7];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([1, 2]);
    });

    it('should return an array with unique values from arr1 when arr1 and arr2 both contain duplicates', () => {
        const arr1: number[] = [1, 2, 2, 3, 3, 4, 5];
        const arr2: number[] = [2, 3, 4, 6, 7];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([1, 5]);
    });
});