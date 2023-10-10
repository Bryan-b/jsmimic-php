import { array_reverse } from "../src";

describe('array_reverse', () => {
    it('should reverse an array of numbers', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [5, 4, 3, 2, 1];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an array of strings', () => {
        const input = ['apple', 'banana', 'cherry'];
        const expected = ['cherry', 'banana', 'apple'];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an array of objects', () => {
        const input = [{ name: 'John' }, { name: 'Jane' }, { name: 'Joe' }];
        const expected = [{ name: 'Joe' }, { name: 'Jane' }, { name: 'John' }];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an empty array', () => {
        const input: any[] = [];
        const expected: any[] = [];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an array with one element', () => {
        const input = [1];
        const expected = [1];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an array with duplicate elements', () => {
        const input = [1, 2, 2, 3, 4, 4, 5];
        const expected = [5, 4, 4, 3, 2, 2, 1];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });
});