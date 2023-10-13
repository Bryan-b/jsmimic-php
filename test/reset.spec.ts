import { reset } from "../src";

describe('reset', () => {
    it('should return the first element of an array with elements', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(reset(arr)).toBe(1);
    });

    it('should return false for an empty array', () => {
        const arr = [] as number[];
        expect(reset(arr)).toBe(false);
    });

    it('should return the first element of an array with one element', () => {
        const arr = [42];
        expect(reset(arr)).toBe(42);
    });

    it('should return the first element of an array with mixed types', () => {
        const arr = [null, 'apple', 3, false, { key: 'value' }];
        expect(reset(arr)).toBeNull();
    });

    it('should return the first element of an array with undefined values', () => {
        const arr = [undefined, undefined, 'value', 1, 2];
        expect(reset(arr)).toBeUndefined();
    });

    it('should handle arrays with NaN as the first element', () => {
        const arr = [NaN, 1, 2, 3];
        expect(Number.isNaN(reset(arr))).toBe(true);
    });
});