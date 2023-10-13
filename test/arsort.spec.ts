import { arsort } from '../src';

describe('arsort', () => {
    it('should sort a numeric array in reverse order', () => {
        const arr = { a: 3, b: 1, c: 2 };
        arsort(arr);
        expect(arr).toEqual({ a: 3, c: 2, b: 1 });
    });

    it('should sort a string array in reverse order', () => {
        const arr = { a: 'apple', b: 'banana', c: 'cherry' };
        arsort(arr);
        expect(arr).toEqual({ c: 'cherry', b: 'banana', a: 'apple' });
    });

    it('should handle arrays with duplicate values', () => {
        const arr = { a: 3, b: 1, c: 3, d: 2 };
        arsort(arr);
        expect(arr).toEqual({ a: 3, c: 3, d: 2, b: 1 });
    });

    it('should sort an empty array', () => {
        const arr: Record<string, number> = {};
        arsort(arr);
        expect(arr).toEqual({});
    });

    it('should sort an array with one element', () => {
        const arr = { a: 42 };
        arsort(arr);
        expect(arr).toEqual({ a: 42 });
    });

    it('should sort an array with negative numbers', () => {
        const arr = { a: -3, b: -1, c: -2 };
        arsort(arr);
        expect(arr).toEqual({ a: -3, c: -2, b: -1 });
    });

    it('should handle an array with mixed data types', () => {
        const arr: Record<string, any> = { a: 'apple', b: 2, c: true };
        arsort(arr);
        expect(arr).toEqual({ b: 2, a: 'apple', c: true });
    });
});