import { array_keys } from "../src";

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