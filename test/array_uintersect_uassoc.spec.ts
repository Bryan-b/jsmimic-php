import { array_uintersect_uassoc } from "../src";

describe('array_uintersect_uassoc', () => {
    it('should return an empty object when both input arrays are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const result = array_uintersect_uassoc(arr1, arr2, () => 0, () => 0);
        expect(result).toEqual({});
    });

    it('should return an empty object when one of the input arrays is empty', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = {};
        const result = array_uintersect_uassoc(arr1, arr2, () => 0, () => 0);
        expect(result).toEqual({});
    });

    it('should return an empty object when there are no matching elements', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = { key3: 'value3', key4: 'value4' };
        const result = array_uintersect_uassoc(arr1, arr2, () => 0, () => 0);
        expect(result).toEqual({});
    });

    it('should return an object with elements that have matching data and index', () => {
        const arr1 = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const arr2 = { key1: 'value1', key4: 'value4', key3: 'value3' };
        const result = array_uintersect_uassoc(arr1, arr2, (a, b) => a.localeCompare(b), (a, b) => a.localeCompare(b));
        expect(result).toEqual({ key1: 'value1', key3: 'value3' });
    });
});