import { usort } from "../src";

describe('usort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const arr = [3, 1, 2, 5, 4];
        usort(arr, (a, b) => a - b);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should sort an array of strings in alphabetical order', () => {
        const arr = ['banana', 'apple', 'cherry', 'date'];
        usort(arr, (a, b) => a.localeCompare(b));
        expect(arr).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('should sort an array of objects based on a property', () => {
        const arr = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
            { name: 'Charlie', age: 20 },
        ];
        usort(arr, (a, b) => a.age - b.age);
        expect(arr).toEqual([
            { name: 'Charlie', age: 20 },
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
        ]);
    });

    it('should handle an empty array', () => {
        const arr: number[] = [];
        usort(arr, (a, b) => a - b);
        expect(arr).toEqual([]);
    });

    it('should handle an array with a single element', () => {
        const arr = [42];
        usort(arr, (a, b) => a - b);
        expect(arr).toEqual([42]);
    });

    it('should handle an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5];
        usort(arr, (a, b) => a - b);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle a reverse-sorted array', () => {
        const arr = [5, 4, 3, 2, 1];
        usort(arr, (a, b) => a - b);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
});