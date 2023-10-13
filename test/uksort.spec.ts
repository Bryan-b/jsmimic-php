import { uksort } from "../src";

describe('uksort', () => {
    it('should sort an empty object', () => {
        const input = {};
        const compareFunc = (a: string, b: string) => a.localeCompare(b);
        uksort(input, compareFunc);
        expect(input).toEqual({});
    });

    it('should sort an object with string keys in ascending order', () => {
        const input = { 'c': 3, 'a': 1, 'b': 2 };
        const compareFunc = (a: string, b: string) => a.localeCompare(b);
        uksort(input, compareFunc);
        expect(input).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
    });

    it('should sort an object with string keys in descending order', () => {
        const input = { 'c': 3, 'a': 1, 'b': 2 };
        const compareFunc = (a: string, b: string) => b.localeCompare(a);
        uksort(input, compareFunc);
        expect(input).toEqual({ 'c': 3, 'b': 2, 'a': 1 });
    });

    it('should sort an object with mixed string and numeric keys', () => {
        const input = { 'c': 3, '1': 11, 'a': 1, 'b': 2, '2': 22 };
        const compareFunc = (a: string, b: string) => a.localeCompare(b);
        uksort(input, compareFunc);
        expect(input).toEqual({ '1': 11, '2': 22, 'a': 1, 'b': 2, 'c': 3 });
    });

    it('should sort an object with custom comparison function', () => {
        const input = { 'c': 'apple', 'a': 'banana', 'b': 'cherry' };
        const compareFunc = (a: string, b: string) => a.localeCompare(b);
        uksort(input, compareFunc);
        expect(input).toEqual({ 'a': 'banana', 'b': 'cherry', 'c': 'apple' });
    });
});