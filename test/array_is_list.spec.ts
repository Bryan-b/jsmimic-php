import { array_is_list } from "../src/array";

describe('array_is_list', () => {
    it('should return true when input array has numerical keys starting from 0', () => {
        const arr = { 0: 'a', 1: 'b', 2: 'c' };
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