import { array_merge_recursive } from "../src";

describe('array_merge_recursive', () => {
    it('should merge two arrays with different keys', () => {
        const arr1 = { key1: 'value1' };
        const arr2 = { key2: 'value2' };

        const result = array_merge_recursive<Record<string, any>>(arr1, arr2);

        expect(result).toEqual({ key1: 'value1', key2: 'value2' });
    });

    it('should merge two arrays with overlapping keys', () => {
        const arr1 = { key1: 'value1', key2: 'value2' };
        const arr2 = { key2: 'new value', key3: 'value3' };

        const result = array_merge_recursive<Record<string, any>>(arr1, arr2);

        expect(result).toEqual({ key1: 'value1', key2: 'new value', key3: 'value3' });
    });

    it('should merge three or more arrays with different keys', () => {
        const arr1 = { key1: 'value1' };
        const arr2 = { key2: 'value2' };
        const arr3 = { key3: 'value3' };

        const result = array_merge_recursive<Record<string, any>>(arr1, arr2, arr3);

        expect(result).toEqual({ key1: 'value1', key2: 'value2', key3: 'value3' });
    });

    it('should merge empty arrays', () => {
        const arr1 = {};
        const arr2 = {};

        const result = array_merge_recursive(arr1, arr2);

        expect(result).toEqual({});
    });

    it('should merge arrays with null values', () => {
        const arr1 = { key1: null };
        const arr2 = { key2: null };

        const result = array_merge_recursive<Record<string, any>>(arr1, arr2);

        expect(result).toEqual({ key1: null, key2: null });
    });
});