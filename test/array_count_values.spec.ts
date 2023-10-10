import { array_count_values } from "../src";

describe('array_count_values', () => {
    it('should return an empty object when an empty array is passed as input', () => {
        const input: any[] = [];
        const expectedOutput = {};
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly count the values of an array of strings', () => {
        const input = ['apple', 'banana', 'apple', 'orange', 'banana'];
        const expectedOutput = {
            apple: 2,
            banana: 2,
            orange: 1,
        };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly count the values of an array with both strings and numbers', () => {
        const input = ['apple', 1, 'banana', 2, 'apple', 1];
        const expectedOutput = {
            apple: 2,
            banana: 1,
            '1': 2,
            '2': 1,
        };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly handle an array with all identical elements', () => {
        const input = [1, 1, 1, 1, 1];
        const expectedOutput = {
            '1': 5,
        };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly handle an array with undefined values', () => {
        const input = [undefined, undefined, undefined];
        const expectedOutput = {
            'undefined': 3,
        };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly handle an array with objects as values', () => {
        const input: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'John' }, { name: 'Jane' }, { name: 'John' }];
        const expectedOutput = { '[object Object]': 5 };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });
});