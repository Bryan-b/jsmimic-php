import { array_uintersect } from "../src";

describe("array_uintersect", () => {
    it('should return an empty array when both input arrays are empty', () => {
        const arr1: any[] = [];
        const arr2: any[] = [];
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_uintersect(arr1, arr2, compareFunc);

        expect(result).toEqual([]);
    });

    it('should return an empty array when there are no common elements between the two arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect(arr1, arr2, compareFunc);

        expect(result).toEqual([]);
    });

    it('should return an array with common elements between the two arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 3, 4];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect(arr1, arr2, compareFunc);

        expect(result).toEqual([2, 3]);
    });

    it('should return an empty array when the first input array is empty', () => {
        const arr1: any[] = [];
        const arr2 = [1, 2, 3];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect(arr1, arr2, compareFunc);

        expect(result).toEqual([]);
    });

    it('should return an empty array when the second input array is empty', () => {
        const arr1 = [1, 2, 3];
        const arr2: any[] = [];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect(arr1, arr2, compareFunc);

        expect(result).toEqual([]);
    });

    it('should return an empty array when the input arrays have no common elements', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect(arr1, arr2, compareFunc);

        expect(result).toEqual([]);
    });
});