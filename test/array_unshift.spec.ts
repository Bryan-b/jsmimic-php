import { array_unshift } from '../src';

describe('array_unshift', () => {
    it('should add one element to an empty array', () => {
        const arr: number[] = [];
        const result = array_unshift(arr, 1);
        expect(result).toBe(1);
        expect(arr).toEqual([1]);
    });

    it('should add multiple elements to an empty array', () => {
        const arr: number[] = [];
        const result = array_unshift(arr, 1, 2, 3);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should add one element to a non-empty array', () => {
        const arr = [1, 2, 3];
        const result = array_unshift(arr, 4);
        expect(result).toBe(4);
        expect(arr).toEqual([4, 1, 2, 3]);
    });

    it('should add elements of different types to an array', () => {
        const arr: (number | string)[] = [];
        const result = array_unshift(arr, 1, 'two', 3);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 'two', 3]);
    });

    it('should add multiple elements to a non-empty array', () => {
        const arr: number[] = [1, 2, 3];
        const result = array_unshift(arr, 4, 5);
        expect(result).toBe(5);
        expect(arr).toEqual([4, 5, 1, 2, 3]);
    });

    it('should add elements to an array with undefined values', () => {
        const arr: (number | undefined)[] = [undefined, undefined];
        const result = array_unshift(arr, 1, 2);
        expect(result).toBe(4);
        expect(arr).toEqual([1, 2, undefined, undefined]);
    });

    it('should return the new length of the array after adding elements', () => {
        const arr: number[] = [1, 2, 3];
        const result = array_unshift(arr, 4, 5);
        expect(result).toBe(5);
    });
});