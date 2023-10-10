import { array_intersect_uassoc } from "../src";

describe('array_intersect_uassoc', () => {
    it('should return an empty object when both arrays are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when one of the arrays is empty', () => {
        const arr1 = { key1: 1, key2: 2 };
        const arr2 = {};
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an object with common elements when both arrays have common elements', () => {
        const arr1 = { key1: 1, key2: 2, key3: 3 };
        const arr2 = { key2: 2, key3: 4, key4: 5 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ key2: 2 });
    });

    it('should return an empty object when both arrays have no common elements', () => {
        const arr1 = { key1: 1, key2: 2 };
        const arr2 = { key3: 3, key4: 4 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when both arrays have common elements but compareFunc returns non-zero for all common elements', () => {
        const arr1 = { key1: 1, key2: 2 };
        const arr2 = { key1: 3, key2: 4 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an object with common elements when both arrays have common elements and compareFunc returns non-zero for some common elements', () => {
        const arr1 = { key1: 1, key2: 2 };
        const arr2 = { key1: 3, key2: 2 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ key2: 2 });
    });

    it('should return an object with common elements when both arrays have common elements and some keys are missing in one of the arrays', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 1, b: 2 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ a: 1, b: 2 });
    });
});