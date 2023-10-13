import { rsort } from "../src";

describe('rsort', () => {
    it('should sort a numeric array in reverse order', () => {
        const arr = [5, 2, 8, 1, 3];
        rsort(arr);
        expect(arr).toEqual([8, 5, 3, 2, 1]);
    });

    it('should not modify an empty array', () => {
        const arr: number[] = [];
        rsort(arr);
        expect(arr).toEqual([]);
    });

    it('should not modify an array with a single element', () => {
        const arr = [42];
        rsort(arr);
        expect(arr).toEqual([42]);
    });

    it('should sort an array with duplicate elements', () => {
        const arr = [5, 3, 2, 5, 1, 3];
        rsort(arr);
        expect(arr).toEqual([5, 5, 3, 3, 2, 1]);
    });

    it('should handle an array with NaN and null values', () => {
        const arr = [5, NaN, null, 3, 2, NaN, 1];
        rsort(arr);
        expect(arr).toEqual([5, 3, 2, 1, NaN, NaN, null]);
    });
});