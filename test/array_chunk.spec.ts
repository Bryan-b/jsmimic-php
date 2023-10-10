import { array_chunk } from '../src';

describe('array_chunk', () => {
    it('should split an empty array', () => {
        const arr: number[] = [];
        const size = 2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([]);
    });

    it('should split an array into chunks of equal size', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const size = 2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    it('should split an array into chunks of unequal size', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const size = 3;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    });

    it('should split an array into chunks of size equal to array length', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const size = arr.length;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, 2, 3, 4, 5, 6]]);
    });

    it('should not split an array with negative size', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const size = -2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([]);
    });

    it('should split an array with non-numeric keys', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const size = 2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
    });

    it('should split an array with undefined values into chunks of equal size', () => {
        const arr = [1, undefined, 3, undefined, 5, undefined];
        const size = 2;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, undefined], [3, undefined], [5, undefined]]);
    });

    it('should split an array into chunks of equal size when the size is equal to the length of the array', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const size = 6;
        const result = array_chunk(arr, size);
        expect(result).toEqual([[1, 2, 3, 4, 5, 6]]);
    });

});