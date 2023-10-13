import { list } from "../src";

describe('list function', () => {
    it('should return an empty object when no arguments are provided', () => {
        const result = list();
        expect(result).toEqual({});
    });

    it('should create an associative array from provided variables', () => {
        const result = list('name', 'John', 'age', 30, 'city', 'New York');
        expect(result).toEqual({ '0': 'name', '1': 'John', '2': 'age', '3': 30, '4': 'city', '5': 'New York' });
    });

    it('should handle duplicate keys by overwriting previous values', () => {
        const result = list('name', 'John', 'name', 'Doe');
        expect(result).toEqual({ '0': 'name', '1': 'John', '2': 'name', '3': 'Doe' });
    });

    it('should handle special characters in keys', () => {
        const result = list('$var', 42, '@email', 'test@example.com');
        expect(result).toEqual({ '0': '$var', '1': 42, '2': '@email', '3': 'test@example.com' });
    });

    it('should handle different data types as values', () => {
        const result = list('string', 'Hello', 'number', 123, 'boolean', true);
        expect(result).toEqual({ '0': 'string', '1': 'Hello', '2': 'number', '3': 123, '4': 'boolean', '5': true });
    });
});