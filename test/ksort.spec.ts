import { ksort } from "../src";

describe('ksort function', () => {
    it('should sort an empty object and return an empty object', () => {
        const input = {};
        ksort(input);
        expect(input).toEqual({});
    });

    it('should sort an object with string keys', () => {
        const input = { c: 'apple', a: 'banana', b: 'cherry' };
        ksort(input);
        expect(input).toEqual({ a: 'banana', b: 'cherry', c: 'apple' });
    });

    it('should sort an object with numeric keys', () => {
        const input = { 3: 'apple', 1: 'banana', 2: 'cherry' };
        ksort(input);
        expect(input).toEqual({ '1': 'banana', '2': 'cherry', '3': 'apple' });
    });

    it('should sort an object with mixed numeric and string keys', () => {
        const input = { 3: 'apple', '1': 'banana', 2: 'cherry' };
        ksort(input);
        expect(input).toEqual({ '1': 'banana', 2: 'cherry', 3: 'apple' });
    });

    it('should not modify an already sorted object', () => {
        const input = { a: 'apple', b: 'banana', c: 'cherry' };
        ksort(input);
        expect(input).toEqual({ a: 'apple', b: 'banana', c: 'cherry' });
    });

    it('should sort an object with special characters in keys', () => {
        const input = { 'c@': 'apple', 'a!': 'banana', 'b#': 'cherry' };
        ksort(input);
        expect(input).toEqual({ 'a!': 'banana', 'b#': 'cherry', 'c@': 'apple' });
    });
});