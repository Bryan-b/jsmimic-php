import { krsort } from "../src";

describe('krsort function', () => {
    it('should sort the keys of an object in reverse order', () => {
        const input = { b: 2, a: 1, c: 3 };
        krsort(input);
        expect(Object.keys(input)).toEqual(['c', 'b', 'a']);
    });

    it('should handle an empty object', () => {
        const input = {};
        krsort(input);
        expect(Object.keys(input)).toEqual([]);
    });

    it('should handle an object with a single key', () => {
        const input = { a: 1 };
        krsort(input);
        expect(Object.keys(input)).toEqual(['a']);
    });
    it('should not modify the values of the object', () => {
        const input = { b: 2, a: 1, c: 3 };
        krsort(input);
        expect(input).toEqual({ c: 3, b: 2, a: 1 });
    });

    it('should sort keys in a case-insensitive manner', () => {
        const input = { B: 2, a: 1, C: 3 };
        krsort(input);
        expect(Object.keys(input)).toEqual(['a', 'C', 'B']);
    });
});