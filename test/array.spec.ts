import {
    array_change_key_case,
    array_chunk,
    array_column,
    array_combine,
    array_count_values,
    array_diff,
    array_diff_assoc,
    array_diff_key,
    array_diff_uassoc,
    array_diff_ukey,
    array_fill,
    array_fill_keys,
    array_filter,
    array_flip,
    array_intersect,
    array_intersect_assoc,
    array_intersect_key,
    array_intersect_uassoc,
    array_intersect_ukey
} from '../src/array';

describe('array_change_key_case', () => {
    it('should return an empty object when input array is empty', () => {
        const inputArray = {};
        const result = array_change_key_case(inputArray);
        expect(result).toEqual({});
    });

    it('should return a new object with all keys in lower case when caseType is not provided', () => {
        const inputArray = {
            Key1: 'Value1',
            Key2: 'Value2',
            Key3: 'Value3'
        };
        const result = array_change_key_case(inputArray);
        expect(result).toEqual({
            key1: 'Value1',
            key2: 'Value2',
            key3: 'Value3'
        });
    });

    it('should return a new object with all keys in lower case when caseType is \'CASE_LOWER\'', () => {
        const inputArray = {
            Key1: 'Value1',
            Key2: 'Value2',
            Key3: 'Value3'
        };
        const result = array_change_key_case(inputArray, 'CASE_LOWER');
        expect(result).toEqual({
            key1: 'Value1',
            key2: 'Value2',
            key3: 'Value3'
        });
    });

    it('should return a new object with all keys in upper case when caseType is "CASE_UPPER"', () => {
        const inputArray = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };
        const result = array_change_key_case(inputArray, 'CASE_UPPER');
        expect(result).toEqual({
            KEY1: 'value1',
            KEY2: 'value2',
            KEY3: 'value3'
        });
    });

    it('should return a new object with all keys in lower case when inputArray has multiple keys with mixed cases', () => {
        const inputArray = { 'Key1': 'Value1', 'KEY2': 'Value2', 'kEy3': 'Value3' };
        const result = array_change_key_case(inputArray);
        expect(result).toEqual({ 'key1': 'Value1', 'key2': 'Value2', 'key3': 'Value3' });
    });
    
});

describe('array_chunk', () => {
    it('should split an empty array', () => {
        const arr: number[] = [];
        const size = 2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([]);
    });

    it('should split an array into chunks of equal size', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const size = 2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    it('should split an array into chunks of unequal size', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const size = 3;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    });

    it('should split an array into chunks of size equal to array length', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const size = arr.length;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, 2, 3, 4, 5, 6]]);
    });

    it('should not split an array with negative size', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const size = -2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([]);
    });

    // it('should preserve keys when the preserveKeys parameter is true', () => {
    //     const arr = [1, 2, 3, 4, 5];
    //     const size = 2;
    //     const preserveKeys = true;
    //     const result = array_chunk(arr, size, preserveKeys);
    //     expect(result).toEqual([{ '0': 1, '1': 2 }, { '2': 3, '3': 4 }, { '4': 5 }]);
    // });

    it('should split an array with non-numeric keys', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const size = 2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
    });

    it('should split an array with undefined values into chunks of equal size', () => {
        const arr = [1, undefined, 3, undefined, 5, undefined];
        const size = 2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, undefined], [3, undefined], [5, undefined]]);
    });

    it('should split an array into chunks of equal size when the size is equal to the length of the array', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const size = 6;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, 2, 3, 4, 5, 6]]);
    });

});
// describe('array_column', () => {});
// describe('array_combine', () => {});
// describe('array_count_values', () => {});
// describe('array_diff', () => {});
// describe('array_diff_assoc', () => {});
// describe('array_diff_key', () => {});
// describe('array_diff_uassoc', () => {});
// describe('array_diff_ukey', () => {});
// describe('array_fill', () => {});
// describe('array_fill_keys', () => {});
// describe('array_filter', () => {});
// describe('array_flip', () => {});
// describe('array_intersect', () => {});
// describe('array_intersect_assoc', () => {});
// describe('array_intersect_key', () => {});
// describe('array_intersect_uassoc', () => {});
// describe('array_intersect_ukey', () => {});