import { array_intersect_assoc } from "../src";

describe('array_intersect_assoc', () => {
    it('should return an empty object when both arrays are empty', () => {
        const arr1 = {};
        const arr2 = {};
        expect(array_intersect_assoc(arr1, arr2)).toEqual({});
    });

    it('should return an empty object when one of the arrays is empty', () => {
        const arr1 = { key1: 'value1' };
        const arr2 = {};
        expect(array_intersect_assoc(arr1, arr2)).toEqual({});
    });

    it('should return an object with common key-value pairs from both arrays', () => {
        const arr1 = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const arr2 = { key2: 'value2', key4: 'value4' };
        expect(array_intersect_assoc(arr1, arr2)).toEqual({ key2: 'value2' });
    });

    it('should return an empty object when there are no common key-value pairs', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = { key3: 'value3', key4: 'value4' };
        expect(array_intersect_assoc(arr1, arr2)).toEqual({});
    });

    it('should return an object with common key-value pairs from both arrays, even when the values are of different types', () => {
        const arr1 = { key1: 1, key2: 'value2' };
        const arr2 = { key1: '1', key2: 'value2' };
        expect(array_intersect_assoc(arr1, arr2)).toEqual({ key2: 'value2' });
    });
});