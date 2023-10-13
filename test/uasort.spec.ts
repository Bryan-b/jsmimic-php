import { uasort } from "../src";

describe('uasort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const arr = { '3': 30, '1': 10, '2': 20 };
        uasort(arr, (a, b) => a - b);
        expect(arr).toEqual({ '1': 10, '2': 20, '3': 30 });
    });

    it('should sort an array of strings in alphabetical order', () => {
        const arr = { 'banana': 'B', 'apple': 'A', 'cherry': 'C' };
        uasort(arr, (a, b) => a.localeCompare(b));
        expect(arr).toEqual({ 'apple': 'A', 'banana': 'B', 'cherry': 'C' });
    });

    it('should sort an empty array', () => {
        const arr = {};
        uasort(arr, (a: any, b: any) => a - b);
        expect(arr).toEqual({});
    });

    it('should handle arrays with only one element', () => {
        const arr = { '1': 10 };
        uasort(arr, (a, b) => a - b);
        expect(arr).toEqual({ '1': 10 });
    });

    it('should handle arrays with negative numbers', () => {
        const arr = { '3': -30, '1': -10, '2': -20 };
        uasort(arr, (a, b) => a - b);
        expect(arr).toEqual({ '3': -30, '2': -20, '1': -10 });
    });

    it('should handle arrays with duplicate values', () => {
        const arr = { '1': 10, '2': 20, '3': 10 };
        uasort(arr, (a, b) => a - b);
        expect(arr).toEqual({ '1': 10, '3': 10, '2': 20 });
    });

    it('should handle arrays with a custom comparison function', () => {
        const arr = { 'apple': 'A', 'banana': 'B', 'cherry': 'C' };
        uasort(arr, (a, b) => b.localeCompare(a));
        expect(arr).toEqual({ 'cherry': 'C', 'banana': 'B', 'apple': 'A' });
    });
});