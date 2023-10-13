import { key } from "../src";

describe('key', () => {
    it('should return the first key when the array is not empty', () => {
        const inputArray = { a: 1, b: 2, c: 3 };
        const result = key(inputArray);
        expect(result).toBe('a');
    });

    it('should return the first key when the array is non-empty objects', () => {
        const inputArray = { 0: { id: 'a' }, 1: { id: 'b' }, 2: { id: 'c' } };
        const result = key(inputArray);
        expect(result).toBe('0');
    });

    it('should return null when the array is empty', () => {
        const inputArray = {};
        const result = key(inputArray);
        expect(result).toBe(null);
    });

    it('should return the first key for mixed key types', () => {
        const inputArray = { 0: 'zero', a: 'alpha', b: 'beta' };
        const result = key(inputArray);
        expect(result).toBe('0');
    });

    it('should return the first key when the array is an array-like object', () => {
        const inputArray = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
        const result = key(inputArray);
        expect(result).toBe('0');
    });
});