import { array_search } from "../src";

describe('array_search', () => {
    it('should return the corresponding key when searching for an existing value in the array', () => {
        const haystack = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const needle = 'value2';
        const result = array_search(needle, haystack);
        expect(result).toBe('key2');
    });

    it('should return the corresponding key when searching for the first value in the array', () => {
        const haystack = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const needle = 'value1';
        const result = array_search(needle, haystack);
        expect(result).toBe('key1');
    });

    it('should return the corresponding key when searching for the last value in the array', () => {
        const haystack = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const needle = 'value3';
        const result = array_search(needle, haystack);
        expect(result).toBe('key3');
    });

    it('should return null when searching for a non-existing value in the array', () => {
        const haystack = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const needle = 'value4';
        const result = array_search(needle, haystack);
        expect(result).toBeNull();
    });

    it('should return null when searching for a value in an empty array', () => {
        const haystack = {};
        const needle = 'value1';
        const result = array_search(needle, haystack);
        expect(result).toBeNull();
    });

    it('should return the corresponding key when searching for a value in an array with null values', () => {
        const haystack = { key1: null, key2: 'value2', key3: null };
        const needle = null;
        const result = array_search(needle, haystack);
        expect(result).toBe('key1');
    });
});