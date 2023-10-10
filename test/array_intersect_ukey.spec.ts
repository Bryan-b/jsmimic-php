import { array_intersect_ukey } from "../src";

describe('array_intersect_ukey', () => {
    it('should return an empty object when both arrays are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const keyCompareFunc = (a: string, b: string) => a.localeCompare(b);

        const result = array_intersect_ukey(arr1, arr2, keyCompareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when the first array has no keys in common with the second array', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = { key3: 'value3', key4: 'value4' };
        const keyCompareFunc = (a: string, b: string) => a.localeCompare(b);

        const result = array_intersect_ukey(arr1, arr2, keyCompareFunc);

        expect(result).toEqual({});
    });

    it('should return an object with values from the first array that have keys in common with the second array', () => {
        const arr1 = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const arr2 = { key2: 'value4', key3: 'value5' };
        const keyCompareFunc = (a: string, b: string) => a.localeCompare(b);

        const result = array_intersect_ukey(arr1, arr2, keyCompareFunc);

        expect(result).toEqual({ key2: 'value2', key3: 'value3' });
    });

    it('should return an empty object when the second array is empty', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = {};
        const keyCompareFunc = (a: string, b: string) => a.localeCompare(b);

        const result = array_intersect_ukey(arr1, arr2, keyCompareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when the first array is empty', () => {
        const arr1 = {};
        const arr2 = { key1: 'value1', key2: 'value2' };
        const keyCompareFunc = (a: string, b: string) => a.localeCompare(b);

        const result = array_intersect_ukey(arr1, arr2, keyCompareFunc);

        expect(result).toEqual({});
    });

    it('should not modify the second array', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = { key1: 'value3', key2: 'value4' };
        const keyCompareFunc = (a: string, b: string) => a.localeCompare(b);

        array_intersect_ukey(arr1, arr2, keyCompareFunc);

        expect(arr2).toEqual({ key1: 'value3', key2: 'value4' });
    });
});