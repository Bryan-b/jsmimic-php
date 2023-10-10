import { array_key_first } from "../src";

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