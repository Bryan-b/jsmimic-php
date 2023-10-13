import { each } from "../src";


describe('each function', () => {
    it('should return the key and value pair from a non-empty object', () => {
        const input = { key1: 'value1', key2: 'value2' };
        const result = each(input);
        expect(result).toEqual(['key1', 'value1']);
        expect(input).toEqual({ key2: 'value2' });
    });
    
    it('should advance the cursor in the object', () => {
        const input = { key1: 'value1', key2: 'value2' };
        each(input);
        expect(input).toEqual({ key2: 'value2' });
    });
    
    it('should return null for an empty object', () => {
        const input = {};
        const result = each(input);
        expect(result).toBeNull();
        expect(input).toEqual({});
    });
    
    it('should work with different types of values', () => {
        const input = { key1: 42, key2: [1, 2, 3], key3: { name: 'John' } };
        const result = each(input);
        expect(result).toEqual(['key1', 42]);
        expect(input).toEqual({ key2: [1, 2, 3], key3: { name: 'John' } });
    });
    
    it('should return the only key and value pair from a single-entry object', () => {
        const input = { onlyKey: 'onlyValue' };
        const result = each(input);
        expect(result).toEqual(['onlyKey', 'onlyValue']);
        expect(input).toEqual({});
    });
    
    it('should return null for an object with no keys', () => {
        const input = Object.create(null);
        const result = each(input);
        expect(result).toBeNull();
        expect(input).toEqual(Object.create(null));
    });
});