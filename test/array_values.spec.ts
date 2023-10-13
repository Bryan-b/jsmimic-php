import { array_values } from '../src';

describe('array_values', () => {
    it('should return an empty array when given an empty object', () => {
        const input = {};
        const result = array_values(input);
        expect(result).toEqual([]);
    });

    it('should return an array with all values when given an object with values of different types', () => {
        const input = { key1: 1, key2: 'two', key3: true };
        const result = array_values(input);
        expect(result).toEqual([1, 'two', true]);
    });

    it('should return an array with all values when given an object with values of the same type', () => {
        const input = { key1: 'one', key2: 'two', key3: 'three' };
        const result = array_values(input);
        expect(result).toEqual(['one', 'two', 'three']);
    });

    it('should return an array with all values when given an object with non-numeric keys', () => {
        const input = { key1: 'one', key2: 'two', key3: 'three' };
        const result = array_values(input);
        expect(result).toEqual(['one', 'two', 'three']);
    });

    it('should return an array with all values when given an object with numeric keys', () => {
        const input = { 1: 'one', 2: 'two', 3: 'three' };
        const result = array_values(input);
        expect(result).toEqual(['one', 'two', 'three']);
    });

    it('should return an array with all values when given an object with null values', () => {
        const input = { key1: null, key2: null, key3: null };
        const result = array_values(input);
        expect(result).toEqual([null, null, null]);
    });
});