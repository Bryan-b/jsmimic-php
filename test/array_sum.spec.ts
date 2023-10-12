import { array_sum } from "../src";

describe("array_sum", () => {
    it('should return 0 when array is empty', () => {
        const arr = [] as number[];
        const result = array_sum(arr);
        expect(result).toBe(0);
    });

    it('should return the sum of all positive values in the array', () => {
        const arr = [1, 2, 3];
        const result = array_sum(arr);
        expect(result).toBe(6);
    });

    it('should return the sum of all negative values in the array', () => {
        const arr = [-1, -2, -3];
        const result = array_sum(arr);
        expect(result).toBe(-6);
    });

    it('should return 0 when array contains only zeros', () => {
        const arr = [0, 0, 0];
        const result = array_sum(arr);
        expect(result).toBe(0);
    });

    it('should return the value when array contains only one value', () => {
        const arr = [5];
        const result = array_sum(arr);
        expect(result).toBe(5);
    });

    it('should return the sum of two values when array contains two values', () => {
        const arr = [2, 3];
        const result = array_sum(arr);
        expect(result).toBe(5);
    });
});