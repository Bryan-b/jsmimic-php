import { asort } from '../src';

describe('asort', () => {
    it('should sort a numeric array in ascending order', () => {
        const input = { b: 3, c: 1, a: 2 };
        const expected = { c: 1, a: 2, b: 3 };
        asort(input);
        expect(input).toEqual(expected);
    });

    it('should sort an empty array', () => {
        const input: Record<string, any> = {};
        const expected: Record<string, any> = {};
        asort(input);
        expect(input).toEqual(expected);
    });

    it('should sort an array with one element', () => {
        const input = { a: 42 };
        const expected = { a: 42 };
        asort(input);
        expect(input).toEqual(expected);
    });

    it('should sort a string-based array in ascending order', () => {
        const input = { dog: 'woof', cat: 'meow', bird: 'tweet' };
        const expected = { cat: 'meow', bird: 'tweet', dog: 'woof' };
        asort(input);
        expect(input).toEqual(expected);
    });

    it('should sort a string-based array in descending order', () => {
        const input = { dog: 'woof', cat: 'meow', bird: 'tweet' };
        const expected = { dog: 'woof', bird: 'tweet', cat: 'meow' };
        asort(input);
        expect(input).toEqual(expected);
    });

    it('should sort an array with mixed data types', () => {
        const input = { b: 3, c: 'apple', a: 2, d: 'banana' };
        const expected = { a: 2, b: 3, c: 'apple', d: 'banana' };
        asort(input);
        expect(input).toEqual(expected);
    });

    it('should not modify the original array', () => {
        const input = { b: 3, c: 1, a: 2 };
        const originalInput = { b: 3, c: 1, a: 2 };
        asort(input);
        expect(input).toEqual(originalInput);
    });
});