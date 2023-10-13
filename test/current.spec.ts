import { current } from '../src';

describe('current function', () => {
    it('should return the first element of an array with one element', () => {
        const arr = [42];
        const result = current(arr);
        expect(result).toBe(42);
    });

    it('should return the first element of an array with multiple elements', () => {
        const arr = [10, 20, 30];
        const result = current(arr);
        expect(result).toBe(10);
    });

    it('should return false for an empty array', () => {
        const arr = [] as number[];
        const result = current(arr);
        expect(result).toBe(false);
    });

    it('should return false for an array with a single false element', () => {
        const arr = [false];
        expect(current(arr)).toBe(false);
    });

    it('should return the first element of an array with null values', () => {
        const arr = [null, 1, 2];
        expect(current(arr)).toBe(null);
    });
});