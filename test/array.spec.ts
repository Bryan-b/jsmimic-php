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
    array_intersect_ukey,
    array_is_list,
    array_key_exists,
    array_key_first,
    array_key_last,
    array_keys,
    array_map,
    array_merge,
    array_merge_recursive,
    array_pad,
    array_product,
    array_push,
    array_rand,
    array_reduce,
    array_replace,
    array_reverse,
    array_search,
    array_shift,
    array_slice
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

describe('array_column', () => {

    it('should return an empty array when given an empty input array', () => {
        const inputArray: Record<string, any>[] = [];
        const columnKey = 'name';
        const expectedOutput: any[] = [];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with values from a specified column when given a valid input array and column key', () => {
        const inputArray = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
            { id: 3, name: 'Bob' }
        ];
        const columnKey = 'name';
        const expectedOutput = ['John', 'Jane', 'Bob'];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an empty array when given a column key that does not exist in the input array', () => {
        const inputArray = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
            { id: 3, name: 'Bob' }
        ];
        const columnKey = 'age';
        const expectedOutput = [] as any[];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    // Returns an array with values from a specified column when given an input array with only one item.
    it('should return an array with values from a specified column when given an input array with only one item', () => {
        const inputArray = [{ id: 1, name: 'John' }];
        const columnKey = 'name';
        const expectedOutput = ['John'];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with values from a specified column when given an input array with nested objects', () => {
        const inputArray = [
            { id: 1, name: 'John', address: { city: 'New York' } },
            { id: 2, name: 'Jane', address: { city: 'Los Angeles' } },
            { id: 3, name: 'Bob', address: { city: 'Chicago' } }
        ];
        const columnKey = 'address.city';
        const expectedOutput = ['New York', 'Los Angeles', 'Chicago'];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    // Returns an array with values from a specified column when given an input array with null or undefined values.
    it('should return an array with values from a specified column when given an input array with null or undefined values', () => {
        const inputArray = [
            { id: 1, name: 'John' },
            { id: 2, name: null },
            { id: 3, name: undefined }
        ];
        const columnKey = 'name';
        const expectedOutput = ['John', null, undefined];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });


});

describe('array_combine', () => {

    it('should return an empty object when both keys and values arrays are empty', () => {
        const keys: string[] = [];
        const values: number[] = [];

        const result = array_combine(keys, values);

        expect(result).toEqual({});
    });

    it('should return an associative array with keys and values when both arrays are of equal length', () => {
        const keys = ['a', 'b', 'c'];
        const values = [1, 2, 3];

        const result = array_combine(keys, values);

        expect(result).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
    });

    it('should return an associative array with keys and undefined values when the values array is empty', () => {
        const keys = ['a', 'b', 'c'];
        const values: number[] = [];

        const result = array_combine(keys, values);

        expect(result).toEqual({ 'a': undefined, 'b': undefined, 'c': undefined });
    });

    it('should return an associative array with keys and undefined values when the keys array is empty', () => {
        const keys: string[] = [];
        const values = [1, 2, 3];

        const result = array_combine(keys, values);

        expect(result).toEqual({});
    });

    it('should throw an error when the keys array contains duplicate values', () => {
        const keys = ['a', 'b', 'a'];
        const values = [1, 2, 3];

        expect(() => {
            array_combine(keys, values);
        }).toThrowError('Duplicate keys are not allowed.');
    });

    it('should return an associative array with keys and undefined values when the values array is shorter than the keys array', () => {
        const keys = ['a', 'b', 'c'];
        const values = [1, 2];

        const result = array_combine(keys, values);

        expect(result).toEqual({ 'a': 1, 'b': 2, 'c': undefined });
    });
});

describe('array_count_values', () => {
    it('should return an empty object when an empty array is passed as input', () => {
        const input: any[] = [];
        const expectedOutput = {};
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly count the values of an array of strings', () => {
        const input = ['apple', 'banana', 'apple', 'orange', 'banana'];
        const expectedOutput = {
            apple: 2,
            banana: 2,
            orange: 1,
        };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly count the values of an array with both strings and numbers', () => {
        const input = ['apple', 1, 'banana', 2, 'apple', 1];
        const expectedOutput = {
            apple: 2,
            banana: 1,
            '1': 2,
            '2': 1,
        };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly handle an array with all identical elements', () => {
        const input = [1, 1, 1, 1, 1];
        const expectedOutput = {
            '1': 5,
        };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly handle an array with undefined values', () => {
        const input = [undefined, undefined, undefined];
        const expectedOutput = {
            'undefined': 3,
        };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly handle an array with objects as values', () => {
        const input: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'John' }, { name: 'Jane' }, { name: 'John' }];
        const expectedOutput = { '[object Object]': 5 };
        const result = array_count_values(input);
        expect(result).toEqual(expectedOutput);
    });
});

describe('array_diff_assoc', () => {
    it('should return an empty object when both objects are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual({});
    });

    it('should return an empty object when both objects are identical', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 1, b: 2, c: 3 };
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual({});
    });

    it('should return the first object when objects have different keys', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { d: 4, e: 5, f: 6 };
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual(arr1);
    });

    it('should return the values of the first object that are not present in the second object', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { b: 2, c: 4, d: 5 };
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual({ a: 1, c: 3 });
    });

    it('should return an empty object when the first argument is an empty object', () => {
        const arr1 = {};
        const arr2 = { a: 1, b: 2, c: 3 };
        const result = array_diff_assoc(arr1, arr2);
        expect(result).toEqual({});
    });
});

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

describe('array_diff_uassoc', () => {
    it('should return an empty object when both arrays are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an object with elements from arr1 that are not present in arr2', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { d: 4, e: 5, f: 6 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should return an object with elements from arr1 that are not present in arr2', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { b: 2, d: 4, e: 5 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ a: 1, c: 3 });
    });

    it('should return an empty object when arr1 is empty', () => {
        const arr1 = {};
        const arr2 = { a: 1, b: 2, c: 3 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when arr2 is empty', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = {};
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when all elements in arr1 are also present in arr2', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 1, b: 2, c: 3 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_diff_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });
});

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

describe('array_diff', () => {
    it('should return an empty array when both input arrays are empty', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return arr1 when arr2 is empty', () => {
      const arr1 = [1, 2, 3];
      const arr2: number[] = [];
      const result = array_diff(arr1, arr2);
      expect(result).toEqual(arr1);
    });

    it('should return an array containing all values from arr1 that are not present in arr2', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([1, 2]);
    });

    it('should return an empty array when arr1 is empty', () => {
        const arr1: number[] = [];
        const arr2 = [1, 2, 3];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return an array containing all values from arr1 when arr2 contains no common values', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([1, 2, 3]);
    });

    it('should return an empty array when arr1 and arr2 have the same values', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return an array with unique values from arr1 when arr2 contains duplicates', () => {
        const arr1: number[] = [1, 2, 3, 4, 5];
        const arr2: number[] = [3, 4, 5, 6, 7];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([1, 2]);
    });

    it('should return an array with unique values from arr1 when arr1 and arr2 both contain duplicates', () => {
        const arr1: number[] = [1, 2, 2, 3, 3, 4, 5];
        const arr2: number[] = [2, 3, 4, 6, 7];
        const result = array_diff(arr1, arr2);
        expect(result).toEqual([1, 5]);
    });
});

describe('array_fill', () => {
    it('should return an array filled with the specified value when given valid start index, number of elements and value', () => {
        const result = array_fill(0, 3, 'test');
        expect(result).toEqual(['test', 'test', 'test']);
    });

    it('should return an empty array when given num as 0', () => {
        const result = array_fill(0, 0, 'test');
        expect(result).toEqual([]);
    });

    it('should return an array with a single element when given num as 1', () => {
        const result = array_fill(0, 1, 'test');
        expect(result).toEqual(['test']);
    });
});

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

describe('array_filter', () => {
    it('should return an empty array when input array is empty', () => {
        const arr = [] as any[];
        const callback = (value: any) => true;
        const result = array_filter(arr, callback);
        expect(result).toEqual([]);
    });

    it('should return an empty array when callback returns false for all elements', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => false;
        const result = array_filter(arr, callback);
        expect(result).toEqual([]);
    });

    it('should return an array with all elements when callback returns true for all elements', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => true;
        const result = array_filter(arr, callback);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value % 2 === 0;
        const result = array_filter(arr, callback);
        expect(result).toEqual([2, 4]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value % 2 === 1;
        const result = array_filter(arr, callback);
        expect(result).toEqual([1, 3, 5]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value > 3;
        const result = array_filter(arr, callback);
        expect(result).toEqual([4, 5]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value < 3;
        const result = array_filter(arr, callback);
        expect(result).toEqual([1, 2]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value === 3;
        const result = array_filter(arr, callback);
        expect(result).toEqual([3]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (value: any) => value !== 3;
        const result = array_filter(arr, callback);
        expect(result).toEqual([1, 2, 4, 5]);
    });

    it('should return an array with elements for which callback returns true', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const callback = (value: any) => value === 'c';
        const result = array_filter(arr, callback);
        expect(result).toEqual(['c']);
    });

    it('should return a new array instance', () => {
        const arr = [1, 2, 3];
        const callback = (value: number) => true;
        const result = array_filter(arr, callback);
        expect(result).not.toBe(arr);
    });
});

describe('array_flip', () => {
    it('should swap keys and values when input array has string keys and values', () => {
        const inputArray = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        const expectedOutput = {
            value1: 'key1',
            value2: 'key2',
            value3: 'key3'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should swap keys and values when input array has number keys and values', () => {
        const inputArray = {
            1: 10,
            2: 20,
            3: 30
        };

        const expectedOutput = {
            '10': '1',
            '20': '2',
            '30': '3'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should swap keys and values when input array has null value', () => {
        const inputArray = {
            key1: null,
            key2: null,
            key3: null
        } as any;

        const expectedOutput = {
            'null': 'key3'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should swap keys and values when input array has undefined value', () => {
        const inputArray = {
            key1: undefined,
            key2: undefined,
            key3: undefined
        } as any;

        const expectedOutput = {
            'undefined': 'key3'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should swap keys and values when input array has boolean value', () => {
        const inputArray = {
            key1: true,
            key2: false
        } as any;

        const expectedOutput = {
            'true': 'key1',
            'false': 'key2'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });
});

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

describe('array_intersect_uassoc', () => {
    it('should return an empty object when both arrays are empty', () => {
        const arr1 = {};
        const arr2 = {};
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when one of the arrays is empty', () => {
        const arr1 = { key1: 1, key2: 2 };
        const arr2 = {};
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an object with common elements when both arrays have common elements', () => {
        const arr1 = { key1: 1, key2: 2, key3: 3 };
        const arr2 = { key2: 2, key3: 4, key4: 5 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ key2: 2 });
    });

    it('should return an empty object when both arrays have no common elements', () => {
        const arr1 = { key1: 1, key2: 2 };
        const arr2 = { key3: 3, key4: 4 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an empty object when both arrays have common elements but compareFunc returns non-zero for all common elements', () => {
        const arr1 = { key1: 1, key2: 2 };
        const arr2 = { key1: 3, key2: 4 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({});
    });

    it('should return an object with common elements when both arrays have common elements and compareFunc returns non-zero for some common elements', () => {
        const arr1 = { key1: 1, key2: 2 };
        const arr2 = { key1: 3, key2: 2 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ key2: 2 });
    });

    it('should return an object with common elements when both arrays have common elements and some keys are missing in one of the arrays', () => {
        const arr1 = { a: 1, b: 2, c: 3 };
        const arr2 = { a: 1, b: 2 };
        const compareFunc = (a: any, b: any) => a - b;

        const result = array_intersect_uassoc(arr1, arr2, compareFunc);

        expect(result).toEqual({ a: 1, b: 2 });
    });
});

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

describe('array_intersect', () => {
    it('should return an empty array when both input arrays are empty', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return an empty array when there are no common elements between the input arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should return an array with common elements when there are common elements between the input arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 3, 4];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([2, 3]);
    });

    it('should handle arrays with large number of elements', () => {
        const arr1 = Array.from({ length: 10000 }, (_, i) => i);
        const arr2 = Array.from({ length: 10000 }, (_, i) => i + 5000);
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual(Array.from({ length: 5000 }, (_, i) => i + 5000));
    });

    it('should handle arrays with complex objects as elements', () => {
        const arr1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }];
        const arr2 = [{ id: 2, name: 'Jane' }, { id: 4, name: 'Alice' }];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([{ id: 2, name: 'Jane' }]);
    });

    it('should return an array with common elements when there are duplicate common elements between the input arrays', () => {
        const arr1 = [1, 2, 2, 3];
        const arr2 = [2, 2, 3, 4];
        const result = array_intersect(arr1, arr2);
        expect(result).toEqual([2, 2, 3]);
    });
});

describe('array_is_list', () => {
    it('should return true when input array has numerical keys starting from 0', () => {
      const arr = {0: 'a', 1: 'b', 2: 'c'};
      expect(array_is_list(arr)).toBe(true);
    });

    it('should return true when input array is empty', () => {
        const arr = {};
        expect(array_is_list(arr)).toBe(true);
    });

    it('should return true when input array has a single element with key 0', () => {
        const arr = { 0: 'a' };
        expect(array_is_list(arr)).toBe(true);
    });

    it('should return false when input array has numerical keys not starting from 0', () => {
        const arr = { 1: 'a', 2: 'b', 3: 'c' };
        expect(array_is_list(arr)).toBe(false);
    });

    it('should return false when input array has missing keys', () => {
        const arr = { 0: 'a', 2: 'b', 3: 'c' };
        expect(array_is_list(arr)).toBe(false);
    });
})

describe('array_key_exists', () => {
    it('should return true when key exists in array', () => {
        const arr = { name: 'John', age: 25 };
        expect(array_key_exists('name', arr)).toBe(true);
    });

    it('should return false when key does not exist in array', () => {
        const arr = { name: 'John', age: 25 };
        expect(array_key_exists('address', arr)).toBe(false);
    });

    it('should return false when key does not exist in empty array', () => {
        const arr = {};
        expect(array_key_exists('name', arr)).toBe(false);
    });

    it('should return true when key exists in array with null values', () => {
        const arr = { name: null, age: null };
        expect(array_key_exists('name', arr)).toBe(true);
    });

    it('should return true when numeric key exists in array', () => {
        const arr = { 0: 'apple', 1: 'banana', 2: 'orange' };
        expect(array_key_exists(1, arr)).toBe(true);
    });

    it('should return true when key exists in array with undefined values', () => {
        const arr = { name: undefined, age: undefined };
        expect(array_key_exists('name', arr)).toBe(true);
    });
});

describe('array_key_first', () => {
    it('should return the first key of a non-empty object', () => {
        const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
        expect(array_key_first(obj)).toBe('key1');
    });

    it('should return undefined for an empty object', () => {
        const obj = {};
        expect(array_key_first(obj)).toBeUndefined();
    });

    it('should work for an object with only one key', () => {
        const obj = { key1: 'value1' };
        expect(array_key_first(obj)).toBe('key1');
    });

    it('should return the first key of an object with numeric keys', () => {
        const obj = { 1: 'value1', 2: 'value2', 3: 'value3' };
        expect(array_key_first(obj)).toBe('1');
    });

    it('should return the first key of an object with non-numeric keys', () => {
        const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
        expect(array_key_first(obj)).toBe('key1');
    });

    it('should return undefined for an object with no keys', () => {
        const obj = Object.create(null);
        expect(array_key_first(obj)).toBeUndefined();
    });
});

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

describe('array_keys', () => {
    it('should return an empty array when input array is empty', () => {
        const input = {};
        const result = array_keys(input);
        expect(result).toEqual([]);
    });

    it('should return an array of keys when input array is not empty', () => {
        const input = { a: 1, b: 2, c: 3 };
        const result = array_keys(input);
        expect(result).toEqual(['a', 'b', 'c']);
    });

    it('should return an array of string keys when input array has only string keys', () => {
        const input = { 'a': 1, 'b': 2, 'c': 3 };
        const result = array_keys(input);
        expect(result).toEqual(['a', 'b', 'c']);
    });
});

describe('array_map', () => {
    it('should return an array of the same length as the input array when given a valid array and callback function', () => {
        const inputArray = [1, 2, 3];
        const callback = (value: number) => value * 2;
        const expectedOutput = [2, 4, 6];

        const result = array_map(inputArray, callback);

        expect(result).toHaveLength(inputArray.length);
        expect(result).toEqual(expectedOutput);
    });

    it('should return an empty array when given an empty array', () => {
        const inputArray: number[] = [];
        const callback = (value: number) => value * 2;
        const expectedOutput: number[] = [];

        const result = array_map(inputArray, callback);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with NaN values when given an array with undefined values', () => {
        const inputArray = [1, undefined, 3] as any[];
        const callback = (value: number) => value * 2;
        const expectedOutput = [2, NaN, 6];

        const result = array_map(inputArray, callback);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with the same values as the input array when given a callback function that returns the same value for all elements', () => {
        const inputArray = [1, 2, 3];
        const callback = () => 10;
        const expectedOutput = [10, 10, 10];

        const result = array_map(inputArray, callback);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with the same values as the input array when given a callback function that returns undefined for all elements', () => {
        const inputArray = [1, 2, 3];
        const callback = () => undefined;
        const expectedOutput = [undefined, undefined, undefined];

        const result = array_map(inputArray, callback);

        expect(result).toEqual(expectedOutput);
    });
});

describe('array_merge', () => {
    it('should merge two arrays with different types of elements', () => {
        const arr1 = [1, 2, 3];
        const arr2 = ['a', 'b', 'c'];
        const result = array_merge(arr1, arr2);
        expect(result).toEqual([1, 2, 3, 'a', 'b', 'c']);
    });

    it('should merge multiple arrays with the same type of elements', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const arr3 = [7, 8, 9];
        const result = array_merge(arr1, arr2, arr3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should merge empty arrays', () => {
      const arr1: number[] = [];
      const arr2: number[] = [];
      const result = array_merge(arr1, arr2);
      expect(result).toEqual([]);
    });

    it('should merge empty arrays', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const result = array_merge(arr1, arr2);
        expect(result).toEqual([]);
    });

    it('should merge arrays with null or undefined values', () => {
        const arr1 = [1, null, 3];
        const arr2 = [undefined, 5, 6];
        const result = array_merge(arr1, arr2);
        expect(result).toEqual([1, null, 3, undefined, 5, 6]);
    });
});

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

describe('array_pad', () => {
    it('should return the original array when size is less than or equal to the length of the array', () => {
        const inputArray = [1, 2, 3];
        const size = 3;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual(inputArray);
    });

    it('should return a new array padded with the value when size is greater than the length of the array', () => {
        const inputArray = [1, 2, 3];
        const size = 5;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual([1, 2, 3, 0, 0]);
    });

    it('should return an empty array when input array is empty and size is 0', () => {
        const inputArray: number[] = [];
        const size = 0;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual([]);
    });

    it('should return a new array padded with the value when input array is empty and size is greater than 0', () => {
        const inputArray: number[] = [];
        const size = 3;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual([0, 0, 0]);
    });

    it('should return a new array with the value when input array is null and size is greater than 0', () => {
        const inputArray: number[] | null = null;
        const size = 3;
        const value = 0;

        const result = array_pad(inputArray, size, value);

        expect(result).toEqual([0, 0, 0]);
    });

    it('should throw an error when size is negative', () => {
        const inputArray = [1, 2, 3];
        const size = -1;
        const value = 0;

        expect(() => array_pad(inputArray, size, value)).toThrowError('Size cannot be negative');
    });
});

describe('array_product', () => {
    it('should return the product of an array of positive integers', () => {
        const arr = [2, 3, 4];
        const result = array_product(arr);
        expect(result).toBe(24);
    });

    it('should return 1 when given an empty array', () => {
        const arr: number[] = [];
        const result = array_product(arr);
        expect(result).toBe(1);
    });

    it('should return the value of the single element in an array of length 1', () => {
        const arr = [5];
        const result = array_product(arr);
        expect(result).toBe(5);
    });

    it('should return 0 when given an array containing 0', () => {
        const arr = [2, 0, 4];
        const result = array_product(arr);
        expect(result).toBe(0);
    });

    it('should return NaN when given an array containing NaN', () => {
        const arr = [2, NaN, 4];
        const result = array_product(arr);
        expect(result).toBe(NaN);
    });

    it('should return Infinity when given an array containing Infinity', () => {
        const arr = [2, Infinity, 4];
        const result = array_product(arr);
        expect(result).toBe(Infinity);
    });

    it('should return the correct product when given an array of negative integers', () => {
        const arr = [-2, -3, -4];
        const result = array_product(arr);
        expect(result).toBe(-24);
    });

    it('should return the correct product when given an array of mixed positive and negative integers', () => {
        const arr = [-2, 3, -4];
        const result = array_product(arr);
        expect(result).toBe(24);
    });

    it('should return the correct product when given an array of floating point numbers', () => {
        const arr = [2.5, 3.5, 4.5];
        const result = array_product(arr);
        expect(result).toBeCloseTo(39.375);
    });
});

describe('array_push', () => {
    it('should add one element to an empty array', () => {
        const arr: number[] = [];
        const result = array_push(arr, 1);
        expect(result).toBe(1);
        expect(arr).toEqual([1]);
    });

    it('should add multiple elements to an empty array', () => {
        const arr: number[] = [];
        const result = array_push(arr, 1, 2, 3);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should add one element to a non-empty array', () => {
        const arr = [1, 2, 3];
        const result = array_push(arr, 4);
        expect(result).toBe(4);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should add no elements to an array', () => {
        const arr = [1, 2, 3];
        const result = array_push(arr);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should add undefined to an array', () => {
        const arr: (number | undefined)[] = [];
        const result = array_push(arr, undefined);
        expect(result).toBe(1);
        expect(arr).toEqual([undefined]);
    });

    it('should add null to an array', () => {
        const arr: (number | null)[] = [];
        const result = array_push(arr, null);
        expect(result).toBe(1);
        expect(arr).toEqual([null]);
    });

    it('should add multiple elements to a non-empty array', () => {
        const arr: number[] = [1, 2, 3];
        const result = array_push(arr, 4, 5, 6);
        expect(result).toBe(6);
        expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should add elements of different types to an array', () => {
        const arr: (number | string)[] = [1, 'two', 3];
        const result = array_push(arr, 'four', 5);
        expect(result).toBe(5);
        expect(arr).toEqual([1, 'two', 3, 'four', 5]);
    });
});

describe('array_rand', () => {
    it('should return an empty array when the input array is empty', () => {
        const arr: number[] = [];
        const result = array_rand(arr);
        expect(result.length).toBe(0);
    });

    it('should return an empty array when num is zero', () => {
        const arr = [1, 2, 3, 4, 5];
        const num = 0;
        const result = array_rand(arr, num);
        expect(result.length).toBe(0);
    });

    it('should return an array with keys in ascending order', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = array_rand(arr);
        const sortedResult = result.sort((a, b) => a - b);
        expect(result).toEqual(sortedResult);
    });

    it('should return an array with keys in shuffled order', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = array_rand(arr);
        const shuffledResult = result.slice().sort(() => Math.random() - 0.5);
        expect(result).toEqual(shuffledResult);
    });

    it('should return an array with all indices when num is equal to the length of the input array', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = array_rand(arr, arr.length);
        expect(result.length).toBe(arr.length);
        expect(result.sort()).toEqual(Array.from({ length: arr.length }, (_, index) => index).sort());
    });
});

describe('array_reduce', () => {
    it('should sum up the numbers in the array when using a callback function', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (accumulator: number, currentValue: number) => accumulator + currentValue;
        const result = array_reduce(arr, callback);
        expect(result).toBe(15);
    });

    it('should concatenate the strings in the array when using a callback function', () => {
        const arr = ['Hello', ' ', 'World', '!'];
        const callback = (accumulator: string, currentValue: string) => accumulator + currentValue;
        const result = array_reduce(arr, callback);
        expect(result).toBe('Hello World!');
    });

    it('should return the initial value when reducing an empty array with an initial value', () => {
        const arr: number[] = [];
        const callback = (accumulator: number, currentValue: number) => accumulator + currentValue;
        const initial = 10;
        const result = array_reduce(arr, callback, initial);
        expect(result).toBe(10);
    });

    it('should return the single element when reducing an array of one element without an initial value', () => {
        const arr = [5];
        const callback = (accumulator: number, currentValue: number) => accumulator + currentValue;
        const result = array_reduce(arr, callback);
        expect(result).toBe(5);
    });

    it('should return the sum of the element and the initial value when reducing an array of one element with an initial value', () => {
        const arr = [5];
        const callback = (accumulator: number, currentValue: number) => accumulator + currentValue;
        const initial = 10;
        const result = array_reduce(arr, callback, initial);
        expect(result).toBe(15);
    });
});

describe('array_replace', () => {
    it('should replace values in an array with values from another array', () => {
        const inputArray = { a: 1, b: 2, c: 3 };
        const replacementArray = { b: 4, c: 5, d: 6 };
        const expectedArray = { a: 1, b: 4, c: 5, d: 6 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).toEqual(expectedArray);
    });

    it('should return a new array with replaced values', () => {
        const inputArray = { a: 1, b: 2, c: 3 };
        const replacementArray = { b: 4, c: 5, d: 6 };
        const expectedArray = { a: 1, b: 4, c: 5, d: 6 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).not.toBe(inputArray);
        expect(result).toEqual(expectedArray);
    });

    it('should work with arrays of any length', () => {
        const inputArray = { a: 1, b: 2, c: 3 };
        const replacementArray = { b: 4, c: 5, d: 6, e: 7, f: 8 };
        const expectedArray = { a: 1, b: 4, c: 5, d: 6, e: 7, f: 8 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).toEqual(expectedArray);
    });

    it('should return a new array with only replacement values if input array is empty', () => {
        const inputArray = {};
        const replacementArray = { b: 4, c: 5, d: 6 };
        const expectedArray = { b: 4, c: 5, d: 6 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).toEqual(expectedArray);
    });

    it('should return a new array with only input values if replacement array is empty', () => {
        const inputArray = { a: 1, b: 2, c: 3 };
        const replacementArray = {};
        const expectedArray = { a: 1, b: 2, c: 3 };

        const result = array_replace(inputArray, replacementArray);

        expect(result).toEqual(expectedArray);
    });
});

describe('array_reverse', () => {
    it('should reverse an array of numbers', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [5, 4, 3, 2, 1];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an array of strings', () => {
        const input = ['apple', 'banana', 'cherry'];
        const expected = ['cherry', 'banana', 'apple'];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an array of objects', () => {
        const input = [{ name: 'John' }, { name: 'Jane' }, { name: 'Joe' }];
        const expected = [{ name: 'Joe' }, { name: 'Jane' }, { name: 'John' }];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an empty array', () => {
        const input: any[] = [];
        const expected: any[] = [];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an array with one element', () => {
        const input = [1];
        const expected = [1];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });

    it('should reverse an array with duplicate elements', () => {
        const input = [1, 2, 2, 3, 4, 4, 5];
        const expected = [5, 4, 4, 3, 2, 2, 1];
        const result = array_reverse(input);
        expect(result).toEqual(expected);
    });
});

describe('array_search', () => {
    it('should return the corresponding key when searching for an existing value in the array', () => {
        const haystack = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const needle = 'value2';
        const result = array_search(needle, haystack);
        expect(result).toBe('key2');
    });

    it('should return the corresponding key when searching for the first value in the array', () => {
        const haystack = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const needle = 'value1';
        const result = array_search(needle, haystack);
        expect(result).toBe('key1');
    });

    it('should return the corresponding key when searching for the last value in the array', () => {
        const haystack = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const needle = 'value3';
        const result = array_search(needle, haystack);
        expect(result).toBe('key3');
    });

    it('should return null when searching for a non-existing value in the array', () => {
        const haystack = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const needle = 'value4';
        const result = array_search(needle, haystack);
        expect(result).toBeNull();
    });

    it('should return null when searching for a value in an empty array', () => {
        const haystack = {};
        const needle = 'value1';
        const result = array_search(needle, haystack);
        expect(result).toBeNull();
    });

    it('should return the corresponding key when searching for a value in an array with null values', () => {
        const haystack = { key1: null, key2: 'value2', key3: null };
        const needle = null;
        const result = array_search(needle, haystack);
        expect(result).toBe('key1');
    });
});

describe('array_shift', () => {
    it('should return the first element when the array has one element', () => {
        const arr = [1];
        const result = array_shift(arr);
        expect(result).toBe(1);
        expect(arr.length).toBe(0);
    });

    it('should return the first element when the array has multiple elements', () => {
        const arr = [1, 2, 3];
        const result = array_shift(arr);
        expect(result).toBe(1);
        expect(arr.length).toBe(2);
    });

    it('should return undefined when the array is empty', () => {
        const arr: number[] = [];
        const result = array_shift(arr);
        expect(result).toBeUndefined();
        expect(arr.length).toBe(0);
    });

    it('should return undefined when the array has only one element and it is removed', () => {
        const arr = [1];
        const result = array_shift(arr);
        expect(result).toBe(1);
        expect(arr.length).toBe(0);
        const secondResult = array_shift(arr);
        expect(secondResult).toBeUndefined();
        expect(arr.length).toBe(0);
    });

    it('should return the first element when the last element is removed from an array with multiple elements', () => {
        const arr = [1, 2, 3];
        const result = array_shift(arr);
        expect(result).toBe(1);
        expect(arr.length).toBe(2);
        const secondResult = array_shift(arr);
        expect(secondResult).toBe(2);
        expect(arr.length).toBe(1);
    });
});
describe('array_slice', () => {});