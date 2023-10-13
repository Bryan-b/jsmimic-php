import { key_exists } from "../src";

describe('key_exists', () => {
    it('should return true for an existing key in the array', () => {
        const array = { foo: 42, bar: 'hello', baz: true };
        const key = 'bar';
        expect(key_exists(key, array)).toBe(true);
    });

    it('should return false for a non-existing key in the array', () => {
        const array = { foo: 42, bar: 'hello', baz: true };
        const key = 'qux';
        expect(key_exists(key, array)).toBe(false);
    });

    it('should return true for a numeric key in the array', () => {
        const array = { 42: 'answer', '7': 'seven' };
        const key = 7;
        expect(key_exists(key, array)).toBe(true);
    });

    it('should return true for an undefined key in the array', () => {
        const array = { foo: 42, bar: 'hello', baz: true, undefined: 'value' };
        const key = 'undefined';
        expect(key_exists(key, array)).toBe(true);
    });

    it('should return true for a null key in the array', () => {
        const array = { foo: 42, bar: 'hello', baz: true, null: 'value' };
        const key = 'null';
        expect(key_exists(key, array)).toBe(true);
    });

    it('should return false for a key in an empty array', () => {
        const array = {};
        const key = 'test';
        expect(key_exists(key, array)).toBe(false);
    });
});