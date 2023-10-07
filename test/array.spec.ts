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
    array_multisort,
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
describe('array_map', () => {});
describe('array_merge', () => {});
describe('array_merge_recursive', () => {});
describe('array_multisort', () => {});
describe('array_pad', () => {});
describe('array_product', () => {});
describe('array_push', () => {});
describe('array_rand', () => {});
describe('array_reduce', () => {});
describe('array_replace', () => {});
describe('array_reverse', () => {});
describe('array_search', () => {});
describe('array_shift', () => {});
describe('array_slice', () => {});