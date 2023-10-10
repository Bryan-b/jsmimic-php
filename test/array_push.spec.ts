import { array_push } from "../src";

describe('array_push', () => {
    it('should add one element to an empty array', () => {
        const arr: number[] = [];
        const result = array_push(arr, 1);
        expect(result).toBe(1);
        expect(arr).toEqual([1]);
    });

    it('should add multiple elements to an empty array', () => {
        const arr: number[] = [];
        const result = array_push(arr, 1, 2, 3);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should add one element to a non-empty array', () => {
        const arr = [1, 2, 3];
        const result = array_push(arr, 4);
        expect(result).toBe(4);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should add no elements to an array', () => {
        const arr = [1, 2, 3];
        const result = array_push(arr);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should add undefined to an array', () => {
        const arr: (number | undefined)[] = [];
        const result = array_push(arr, undefined);
        expect(result).toBe(1);
        expect(arr).toEqual([undefined]);
    });

    it('should add null to an array', () => {
        const arr: (number | null)[] = [];
        const result = array_push(arr, null);
        expect(result).toBe(1);
        expect(arr).toEqual([null]);
    });

    it('should add multiple elements to a non-empty array', () => {
        const arr: number[] = [1, 2, 3];
        const result = array_push(arr, 4, 5, 6);
        expect(result).toBe(6);
        expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should add elements of different types to an array', () => {
        const arr: (number | string)[] = [1, 'two', 3];
        const result = array_push(arr, 'four', 5);
        expect(result).toBe(5);
        expect(arr).toEqual([1, 'two', 3, 'four', 5]);
    });
});