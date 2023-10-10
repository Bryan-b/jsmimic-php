import { array_intersect_key } from "../src";

describe('array_intersect_key', () => {
    it('should return an empty object when both input objects are empty', () => {
        const arr1 = {};
        const arr2 = {};
        expect(array_intersect_key(arr1, arr2)).toEqual({});
    });

    it('should return an empty object when the second input object is empty', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = {};
        expect(array_intersect_key(arr1, arr2)).toEqual({});
    });

    it('should return an object with values from the first input object that have keys present in the second input object', () => {
        const arr1 = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const arr2 = { key1: 'value1', key3: 'value3' };
        expect(array_intersect_key(arr1, arr2)).toEqual({ key1: 'value1', key3: 'value3' });
    });

    it('should return an empty object when the first input object is empty', () => {
        const arr1 = {};
        const arr2 = { key1: 'value1', key2: 'value2' };
        expect(array_intersect_key(arr1, arr2)).toEqual({});
    });

    it('should return an empty object when there are no matching keys between the two input objects', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = { key3: 'value3', key4: 'value4' };
        expect(array_intersect_key(arr1, arr2)).toEqual({});
    });
});