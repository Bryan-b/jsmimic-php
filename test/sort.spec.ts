import { sort } from "../src";

describe('sort function', () => {
    it('should sort an array of numbers in ascending order', () => {
        const arr = [3, 1, 2, 4];
        sort(arr);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should sort an array of numbers in descending order with a custom comparison function', () => {
        const arr = [3, 1, 2, 4];
        sort(arr, (a, b) => b - a);
        expect(arr).toEqual([4, 3, 2, 1]);
    });

    it('should sort an array of strings in ascending order', () => {
        const arr = ['apple', 'banana', 'cherry', 'date'];
        sort(arr);
        expect(arr).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('should sort an array of strings in descending order with a custom comparison function', () => {
        const arr = ['apple', 'banana', 'cherry', 'date'];
        sort(arr, (a, b) => b.localeCompare(a));
        expect(arr).toEqual(['date', 'cherry', 'banana', 'apple']);
    });

    it('should not modify an already sorted array when no comparison function is provided', () => {
        const arr = [1, 2, 3, 4];
        sort(arr);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should sort an empty array without errors', () => {
        const arr: number[] = [];
        sort(arr);
        expect(arr).toEqual([]);
    });

    it('should sort an array with a single element without errors', () => {
        const arr = [42];
        sort(arr);
        expect(arr).toEqual([42]);
    });
});