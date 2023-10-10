import { array_change_key_case } from '../src';

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