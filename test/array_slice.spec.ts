import { array_slice } from "../src";

describe('array_slice', () => {
    it('should return a new array with elements from the specified offset to the end of the input array when length is not provided', () => {
        const arr = [1, 2, 3, 4, 5];
        const offset = 2;
        const result = array_slice(arr, offset);
        expect(result).toEqual([3, 4, 5]);
    });

    it('should return a new array with elements from the specified offset to the specified length of the input array when length is provided', () => {
        const arr = [1, 2, 3, 4, 5];
        const offset = 1;
        const length = 3;
        const result = array_slice(arr, offset, length);
        expect(result).toEqual([2, 3, 4]);
    });

    it('should return an empty array when offset is greater than or equal to the length of the input array', () => {
        const arr = [1, 2, 3, 4, 5];
        const offset = 5;
        const result = array_slice(arr, offset);
        expect(result).toEqual([]);
    });

    it('should return an empty array when length is 0', () => {
        const arr = [1, 2, 3, 4, 5];
        const offset = 2;
        const length = 0;
        const result = array_slice(arr, offset, length);
        expect(result).toEqual([]);
    });

    it('should return a new array with elements from the specified offset to the end of the input array when length is negative', () => {
        const arr = [1, 2, 3, 4, 5];
        const offset = 2;
        const length = -2;
        const result = array_slice(arr, offset, length);
        expect(result).toEqual([3, 4, 5]);
    });

    it('should return a new array with elements from the specified offset to the end of the input array when length is greater than the length of the input array minus the offset', () => {
        const arr = [1, 2, 3, 4, 5];
        const offset = 2;
        const length = 10;
        const result = array_slice(arr, offset, length);
        expect(result).toEqual([3, 4, 5]);
    });
});