import { compact } from '../src';

describe('compact', () => {
    it('should remove null, undefined, and false values from the array', () => {
        const inputArray = [1, null, 'foo', false, 0, undefined, 42];
        const result = compact(inputArray);
        expect(result).toEqual([1, 'foo', 0, 42]);
    });

    it('should not modify the original array', () => {
        const inputArray = [1, null, 'foo', false, 0, undefined, 42];
        const result = compact(inputArray);
        // Ensure the original array is unchanged
        expect(inputArray).toEqual([1, null, 'foo', false, 0, undefined, 42]);
    });

    it('should handle an empty input array', () => {
        const inputArray: any[] = [];
        const result = compact(inputArray);
        expect(result).toEqual([]);
    });

    it('should handle an array with no null, undefined, or false values', () => {
        const inputArray = [1, 'foo', 0, 42];
        const result = compact(inputArray);
        expect(result).toEqual([1, 'foo', 0, 42]);
    });

    it('should handle an array with only null, undefined, or false values', () => {
        const inputArray = [null, undefined, false];
        const result = compact(inputArray);
        expect(result).toEqual([]);
    });

    it('should handle an array of mixed types', () => {
        const inputArray = [null, 'foo', undefined, 42, false, 0];
        const result = compact(inputArray);
        expect(result).toEqual(['foo', 42, 0]);
    });

    it('should work with an array of objects', () => {
        const obj1 = { name: 'John' };
        const obj2 = { name: 'Doe' };
        const inputArray = [null, obj1, false, obj2, undefined];
        const result = compact(inputArray);
        expect(result).toEqual([obj1, obj2]);
    });
});