import { array_key_exists } from "../src";

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