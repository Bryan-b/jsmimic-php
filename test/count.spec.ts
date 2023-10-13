import { count } from '../src';

describe('count function', () => {
    it('should return the length of an array', () => {
        const array = [1, 2, 3, 4, 5];
        expect(count(array)).toBe(5);
    });

    it('should return 0 for an empty array', () => {
        const emptyArray = [] as number[];
        expect(count(emptyArray)).toBe(0);
    });

    it('should return the number of properties in an object', () => {
        const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
        expect(count(obj)).toBe(3);
    });

    it('should return 0 for an empty object', () => {
        const emptyObj = {};
        expect(count(emptyObj)).toBe(0);
    });

    it('should return 0 for null input', () => {
        const nullValue = null;
        expect(count(nullValue)).toBe(0);
    });

    it('should return 0 for undefined input', () => {
        const undefinedValue = undefined;
        expect(count(undefinedValue)).toBe(0);
    });

    it('should return 0 for a string input', () => {
        const stringValue = 'Hello, World!';
        expect(count(stringValue)).toBe(0);
    });

    it('should return 0 for a number input', () => {
        const numberValue = 42;
        expect(count(numberValue)).toBe(0);
    });

    it('should return 0 for a boolean input', () => {
        const booleanValue = true;
        expect(count(booleanValue)).toBe(0);
    });

    it('should return 0 for a function input', () => {
        const functionValue = () => { };
        expect(count(functionValue)).toBe(0);
    });
});