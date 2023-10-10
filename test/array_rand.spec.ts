import { array_rand } from "../src";

describe('array_rand', () => {
    it('should return an empty array when the input array is empty', () => {
        const arr: number[] = [];
        const result = array_rand(arr);
        expect(result.length).toBe(0);
    });

    it('should return an empty array when num is zero', () => {
        const arr = [1, 2, 3, 4, 5];
        const num = 0;
        const result = array_rand(arr, num);
        expect(result.length).toBe(0);
    });

    it('should return an array with keys in ascending order', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = array_rand(arr);
        const sortedResult = result.sort((a, b) => a - b);
        expect(result).toEqual(sortedResult);
    });

    it('should return an array with keys in shuffled order', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = array_rand(arr);
        const shuffledResult = result.slice().sort(() => Math.random() - 0.5);
        expect(result).toEqual(shuffledResult);
    });

    it('should return an array with all indices when num is equal to the length of the input array', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = array_rand(arr, arr.length);
        expect(result.length).toBe(arr.length);
        expect(result.sort()).toEqual(Array.from({ length: arr.length }, (_, index) => index).sort());
    });
});