import { array_intersect } from "../src";

describe('array_intersect', () => {
    it('should return an empty array when both input arrays are empty', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return an empty array when there are no common elements between the input arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return an array with common elements when there are common elements between the input arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 3, 4];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([2, 3]);
    });

    it('should handle arrays with large number of elements', () => {
        const arr1 = Array.from({ length: 10000 }, (_, i) => i);
        const arr2 = Array.from({ length: 10000 }, (_, i) => i + 5000);
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual(Array.from({ length: 5000 }, (_, i) => i + 5000));
    });

    it('should handle arrays with complex objects as elements', () => {
        const arr1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }];
        const arr2 = [{ id: 2, name: 'Jane' }, { id: 4, name: 'Alice' }];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([{ id: 2, name: 'Jane' }]);
    });

    it('should return an array with common elements when there are duplicate common elements between the input arrays', () => {
        const arr1 = [1, 2, 2, 3];
        const arr2 = [2, 2, 3, 4];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([2, 2, 3]);
    });
});