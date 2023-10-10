import { array_filter } from "../src";

describe('array_filter', () => {
    it('should return an empty array when input array is empty', () => {
        const arr = [] as any[];
        const callback = (value: any) => true;
        const result = array_filter(arr, callback);
        expect(result).toEqual([]);
    });

    it('should return an empty array when callback returns false for all elements', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => false;
        const result = array_filter(arr, callback);
        expect(result).toEqual([]);
    });

    it('should return an array with all elements when callback returns true for all elements', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => true;
        const result = array_filter(arr, callback);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value % 2 === 0;
        const result = array_filter(arr, callback);
        expect(result).toEqual([2, 4]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value % 2 === 1;
        const result = array_filter(arr, callback);
        expect(result).toEqual([1, 3, 5]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value > 3;
        const result = array_filter(arr, callback);
        expect(result).toEqual([4, 5]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value < 3;
        const result = array_filter(arr, callback);
        expect(result).toEqual([1, 2]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value === 3;
        const result = array_filter(arr, callback);
        expect(result).toEqual([3]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value !== 3;
        const result = array_filter(arr, callback);
        expect(result).toEqual([1, 2, 4, 5]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const callback = (value: any) => value === 'c';
        const result = array_filter(arr, callback);
        expect(result).toEqual(['c']);
    });

    it('should return a new array instance', () => {
        const arr = [1, 2, 3];
        const callback = (value: number) => true;
        const result = array_filter(arr, callback);
        expect(result).not.toBe(arr);
    });
});