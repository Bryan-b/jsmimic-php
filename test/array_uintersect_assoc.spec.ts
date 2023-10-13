import { array_uintersect_assoc } from "../src";

describe('array_uintersect_assoc', () => {
    it('should return an empty object when both input objects are empty', () => {
        const arr1: Record<string, number> = {};
        const arr2: Record<string, number> = {};
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when the first input object is empty', () => {
        const arr1: Record<string, number> = {};
        const arr2: Record<string, number> = { a: 1, b: 2, c: 3 };
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when the second input object is empty', () => {
        const arr1: Record<string, number> = { a: 1, b: 2, c: 3 };
        const arr2: Record<string, number> = {};
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when there are no matching elements', () => {
        const arr1: Record<string, number> = { a: 1, b: 2, c: 3 };
        const arr2: Record<string, number> = { x: 4, y: 5, z: 6 };
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an object with the common elements', () => {
        const arr1: Record<string, number> = { a: 1, b: 2, c: 3 };
        const arr2: Record<string, number> = { b: 2, c: 3, d: 4 };
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ b: 2, c: 3 });
    });

    it('should use the custom comparison function to determine common elements', () => {
        const arr1: Record<string, number> = { a: 1, b: 2, c: 3 };
        const arr2: Record<string, number> = { b: 4, c: 3, d: 2 };
        const compareFunc = (a: number, b: number) => a - b;

        const result = array_uintersect_assoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ c: 3 });
    });
});