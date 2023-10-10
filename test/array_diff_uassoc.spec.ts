import { array_diff_uassoc } from "../src";

describe('array_diff_uassoc', () => {
    it('should return an empty object when both arrays are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an object with elements from arr1 that are not present in arr2', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { d: 4, e: 5, f: 6 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should return an object with elements from arr1 that are not present in arr2', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { b: 2, d: 4, e: 5 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ a: 1, c: 3 });
    });

    it('should return an empty object when arr1 is empty', () => {
        const arr1 = {};
        const arr2 = { a: 1, b: 2, c: 3 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when arr2 is empty', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = {};
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when all elements in arr1 are also present in arr2', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 1, b: 2, c: 3 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });
});