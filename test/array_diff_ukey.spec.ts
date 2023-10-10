import { array_diff_ukey } from "../src";

describe('array_diff_ukey', () => {
    it('should return an empty object when arr1 is empty', () => {
        const arr1 = {};
        const arr2 = { key1: 'value1', key2: 'value2' };
        const keyCompareFunc = (a: string, b: string) => a.localeCompare(b);

        const result = array_diff_ukey(arr1, arr2, keyCompareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when arr2 is empty', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = {};
        const keyCompareFunc = (a: string, b: string) => a.localeCompare(b);

        const result = array_diff_ukey(arr1, arr2, keyCompareFunc);

        expect(result).toEqual({});
    });

    it('should return an object with values from arr1 that have different keys in arr2, even when arr2 has extra keys', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = { key3: 'value1', key4: 'value2' };
        const keyCompareFunc = (a: string, b: string) => a.localeCompare(b);

        const result = array_diff_ukey(arr1, arr2, keyCompareFunc);

        expect(result).toEqual({ key1: 'value1', key2: 'value2' });
    });

    it('should return an object with keys from arr1 not present in arr2, even when arr2 has values set to false', () => {
        const arr1 = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const arr2 = { key1: false, key4: 'value4' };
        const keyCompareFunc = (a: string, b: string) => 0;

        const result = array_diff_ukey(arr1, arr2, keyCompareFunc);

        expect(result).toEqual({ key2: 'value2', key3: 'value3' });
    });
});