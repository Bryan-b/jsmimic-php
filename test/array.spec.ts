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
// describe('array_fill_keys', () => {});
// describe('array_filter', () => {});
// describe('array_flip', () => {});
// describe('array_intersect', () => {});
// describe('array_intersect_assoc', () => {});
// describe('array_intersect_key', () => {});
// describe('array_intersect_uassoc', () => {});
// describe('array_intersect_ukey', () => {});