import { array_udiff } from "../src";

describe('array_udiff', () => {
    it('should return an empty array when both input arrays are empty', () => {
        const arr1 = [] as number[];
        const arr2 = [] as number[];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_udiff(arr1, arr2, compareFunc);

        expect(result).toEqual([]);
    });

    it('should return the first array when the second array is empty', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [] as number[];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_udiff(arr1, arr2, compareFunc);

        expect(result).toEqual(arr1);
    });

    it('should return an empty array when the first array is empty', () => {
        const arr1 = [] as number[];
        const arr2 = [4, 5, 6];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_udiff(arr1, arr2, compareFunc);

        expect(result).toEqual([]);
    });

    it('should return values from the first array that are not in the second array based on the comparison function', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_udiff(arr1, arr2, compareFunc);

        expect(result).toEqual([1, 2]);
    });

    it('should return an empty array when all values from the first array are present in the second array', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [3, 2, 1];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_udiff(arr1, arr2, compareFunc);

        expect(result).toEqual([]);
    });

    it('should handle complex comparison functions', () => {
        const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
        const arr2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
        const compareFunc = (a: any, b: any) => a.id - b.id;

        const result = array_udiff(arr1, arr2, compareFunc);

        expect(result).toEqual([{ id: 1, name: 'Alice' }]);
    });
});