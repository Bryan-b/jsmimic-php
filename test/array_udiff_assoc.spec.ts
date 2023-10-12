import { array_udiff_assoc } from '../src';

describe('array_udiff_assoc', () => {
    it('returns an empty object when both arrays are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const compareFunc = (a: number, b: number): number => 0;

        const result = array_udiff_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('returns an empty object when arr1 has no common keys with arr2', () => {
        const arr1 = { a: 1, b: 2 };
        const arr2 = { c: 3, d: 4 };
        const compareFunc = (a: number, b: number): number => 0;

        const result = array_udiff_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('returns an object with keys that differ between arr1 and arr2', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { b: 2, c: 4, d: 5 };
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_udiff_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ a: 1, c: 3 });
    });

    it('handles common keys with the same values', () => {
        const arr1 = { a: 1, b: 2 };
        const arr2 = { a: 1, b: 2 };
        const compareFunc = (a: number, b: number) => 0;

        const result = array_udiff_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('handles a custom comparison function', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 2, b: 1, c: 3 };
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_udiff_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ a: 1, b: 2 });
    });

});