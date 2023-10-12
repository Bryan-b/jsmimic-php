import { array_udiff_uassoc } from '../src';

describe('array_udiff_uassoc', () => {
    it('should return an empty object when two identical arrays are passed', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 1, b: 2, c: 3 };
        const result = array_udiff_uassoc(arr1, arr2, (a, b) => a - b, (a, b) => a.localeCompare(b));
        expect(result).toEqual({});
    });

    it('should return an object with the different values from arr1 when two arrays with different values are passed', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 1, b: 4, c: 5 };
        const result = array_udiff_uassoc(arr1, arr2, (a, b) => a - b, (a, b) => a.localeCompare(b));
        expect(result).toEqual({ b: 2, c: 3 });
    });

    it('should return an object with all values from arr1 when two arrays with different keys are passed', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { d: 4, e: 5, f: 6 };
        const result = array_udiff_uassoc(arr1, arr2, (a, b) => a - b, (a, b) => a.localeCompare(b));
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should return an empty object when empty arrays are passed', () => {
        const arr1 = {};
        const arr2 = {};
        const result = array_udiff_uassoc(arr1, arr2, (a:number, b:number) => a - b, (a, b) => a.localeCompare(b));
        expect(result).toEqual({});
    });

    it('should return an object with all values from the non-empty array when one empty array and one non-empty array are passed', () => {
        const arr1 = { x: 0 };
        const arr2 = { a: 1, b: 2, c: 3 };
        const result = array_udiff_uassoc(arr2, arr1, (a, b) => a - b, (a, b) => a.localeCompare(b));
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should return an object with all values from arr1 when arrays with same keys but different values are passed', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 4, b: 5, c: 6 };
        const result = array_udiff_uassoc(arr1, arr2, (a, b) => a - b, (a, b) => a.localeCompare(b));
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
});