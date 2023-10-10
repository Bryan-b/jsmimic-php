import { array_diff_assoc } from "../src";

describe('array_diff_assoc', () => {
    it('should return an empty object when both objects are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual({});
    });

    it('should return an empty object when both objects are identical', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 1, b: 2, c: 3 };
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual({});
    });

    it('should return the first object when objects have different keys', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { d: 4, e: 5, f: 6 };
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual(arr1);
    });

    it('should return the values of the first object that are not present in the second object', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { b: 2, c: 4, d: 5 };
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual({ a: 1, c: 3 });
    });

    it('should return an empty object when the first argument is an empty object', () => {
        const arr1 = {};
        const arr2 = { a: 1, b: 2, c: 3 };
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual({});
    });
});