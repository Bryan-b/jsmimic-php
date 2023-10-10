import { array_fill_keys } from "../src";

describe('array_fill_keys', () => {
    it('should return an empty object when given an empty array of keys and any value', () => {
        const keys: string[] = [];
        const value = 'test';

        const result = array_fill_keys(keys, value);

        expect(result).toEqual({});
    });

    it('should return an empty object when given an empty array of keys and no value', () => {
        const keys: string[] = [];

        const result = array_fill_keys(keys);

        expect(result).toEqual({});
    });

    it('should return an object with keys and values when given an array of keys and a value', () => {
        const keys = ['key1', 'key2', 'key3'];
        const value = 'test';

        const result = array_fill_keys(keys, value);

        expect(result).toEqual({ key1: 'test', key2: 'test', key3: 'test' });
    });

    it('should return an object with keys and default value when given an array of keys and no value', () => {
        const keys = ['key1', 'key2', 'key3'];

        const result = array_fill_keys(keys);

        expect(result).toEqual({ key1: undefined, key2: undefined, key3: undefined });
    });

    it('should return an object with empty string keys and value when given an array with one empty string key and a value', () => {
        const keys = [''];

        const result = array_fill_keys(keys, 'test');

        expect(result).toEqual({ '': 'test' });
    });

    it('should return an object with keys and null value when given an array of keys and a null value', () => {
        const keys = ['key1', 'key2', 'key3'];
        const value = null;

        const result = array_fill_keys(keys, value);

        expect(result).toEqual({ key1: null, key2: null, key3: null });
    });

    it('should return an object with keys and NaN value when given an array of keys and a NaN value', () => {
        const keys: string[] = ['key1', 'key2', 'key3'];
        const value = NaN;

        const result = array_fill_keys(keys, value);

        expect(result).toEqual({ 'key1': NaN, 'key2': NaN, 'key3': NaN });
    });

    it('should return an object with keys and boolean value when given an array of keys and a boolean value', () => {
        const keys: string[] = ['key1', 'key2', 'key3'];
        const value = true;

        const result = array_fill_keys(keys, value);

        expect(result).toEqual({ 'key1': true, 'key2': true, 'key3': true });
    });
});