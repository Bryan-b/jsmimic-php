import { array_key_last } from "../src";

describe('array_key_last', () => {
    it('should return the only key when the array has length 1', () => {
        const arr = { key1: 'value1' };
        expect(array_key_last(arr)).toBe('key1');
    });

    it('should return the last key when the array has length 2', () => {
        const arr = { key1: 'value1', key2: 'value2' };
        expect(array_key_last(arr)).toBe('key2');
    });

    it('should return the last key when the array has length 10', () => {
        const arr = { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4', key5: 'value5', key6: 'value6', key7: 'value7', key8: 'value8', key9: 'value9', key10: 'value10' };
        expect(array_key_last(arr)).toBe('key10');
    });

    it('should return undefined when the array is empty', () => {
        const arr = {};
        expect(array_key_last(arr)).toBeUndefined();
    });

    it('should return the last key when the array contains only undefined values', () => {
        const arr = { key1: undefined, key2: undefined, key3: undefined };
        expect(array_key_last(arr)).toBe('key3');
    });

    it('should return the last key when the array contains only null values', () => {
        const arr = { key1: null, key2: null, key3: null };
        expect(array_key_last(arr)).toBe('key3');
    });
});