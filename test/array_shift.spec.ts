import { array_shift } from "../src";

describe('array_shift', () => {
    it('should return the first element when the array has one element', () => {
        const arr = [1];
        const result = array_shift(arr);
        expect(result).toBe(1);
        expect(arr.length).toBe(0);
    });

    it('should return the first element when the array has multiple elements', () => {
        const arr = [1, 2, 3];
        const result = array_shift(arr);
        expect(result).toBe(1);
        expect(arr.length).toBe(2);
    });

    it('should return undefined when the array is empty', () => {
        const arr: number[] = [];
        const result = array_shift(arr);
        expect(result).toBeUndefined();
        expect(arr.length).toBe(0);
    });

    it('should return undefined when the array has only one element and it is removed', () => {
        const arr = [1];
        const result = array_shift(arr);
        expect(result).toBe(1);
        expect(arr.length).toBe(0);
        const secondResult = array_shift(arr);
        expect(secondResult).toBeUndefined();
        expect(arr.length).toBe(0);
    });

    it('should return the first element when the last element is removed from an array with multiple elements', () => {
        const arr = [1, 2, 3];
        const result = array_shift(arr);
        expect(result).toBe(1);
        expect(arr.length).toBe(2);
        const secondResult = array_shift(arr);
        expect(secondResult).toBe(2);
        expect(arr.length).toBe(1);
    });
});