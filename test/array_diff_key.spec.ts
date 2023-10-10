import { array_diff_key } from "../src";

describe('array_diff_key', () => {
    it('should return an empty object when both arrays are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const result = array_diff_key(arr1, arr2);
        expect(result).toEqual({});
    });

    it('should return an empty object when arr1 has no keys that are not in arr2', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = { key1: 'value1', key2: 'value2' };
        const result = array_diff_key(arr1, arr2);
        expect(result).toEqual({});
    });

    it('should return an object with keys and values from arr1 that are not in arr2', () => {
        const arr1 = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const arr2 = { key1: 'value1', key2: 'value2' };
        const result = array_diff_key(arr1, arr2);
        expect(result).toEqual({ key3: 'value3' });
    });

    it('should return arr1 when all keys in arr1 are not present in arr2', () => {
        const arr1 = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const arr2 = { key4: 'value4', key5: 'value5' };
        const result = array_diff_key(arr1, arr2);
        expect(result).toEqual(arr1);
    });

    it('should return an object with keys from arr1 that are not present in arr2', () => {
        const arr1 = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const arr2 = { key2: 'value2', key4: 'value4' };
        const result = array_diff_key(arr1, arr2);
        expect(result).toEqual({ key1: 'value1', key3: 'value3' });
    });

    it('should return an object with keys from arr1 that are not present in arr2', () => {
        const arr1 = { 1: 'value1', 2: 'value2', 3: 'value3' };
        const arr2 = { key1: 'value1', key2: 'value2' };
        const result = array_diff_key(arr1, arr2);
        expect(result).toEqual({ 1: 'value1', 2: 'value2', 3: 'value3' });
    });
});