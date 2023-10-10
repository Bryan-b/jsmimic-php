import { array_merge } from "../src";

describe('array_merge', () => {
    it('should merge two arrays with different types of elements', () => {
        const arr1 = [1, 2, 3];
        const arr2 = ['a', 'b', 'c'];
        const result = array_merge(arr1, arr2);
        expect(result).toEqual([1, 2, 3, 'a', 'b', 'c']);
    });

    it('should merge multiple arrays with the same type of elements', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const arr3 = [7, 8, 9];
        const result = array_merge(arr1, arr2, arr3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should merge empty arrays', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const result = array_merge(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should merge empty arrays', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const result = array_merge(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should merge arrays with null or undefined values', () => {
        const arr1 = [1, null, 3];
        const arr2 = [undefined, 5, 6];
        const result = array_merge(arr1, arr2);
        expect(result).toEqual([1, null, 3, undefined, 5, 6]);
    });
});