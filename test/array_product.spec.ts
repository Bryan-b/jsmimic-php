import { array_product } from "../src";

describe('array_product', () => {
    it('should return the product of an array of positive integers', () => {
        const arr = [2, 3, 4];
        const result = array_product(arr);
        expect(result).toBe(24);
    });

    it('should return 1 when given an empty array', () => {
        const arr: number[] = [];
        const result = array_product(arr);
        expect(result).toBe(1);
    });

    it('should return the value of the single element in an array of length 1', () => {
        const arr = [5];
        const result = array_product(arr);
        expect(result).toBe(5);
    });

    it('should return 0 when given an array containing 0', () => {
        const arr = [2, 0, 4];
        const result = array_product(arr);
        expect(result).toBe(0);
    });

    it('should return NaN when given an array containing NaN', () => {
        const arr = [2, NaN, 4];
        const result = array_product(arr);
        expect(result).toBe(NaN);
    });

    it('should return Infinity when given an array containing Infinity', () => {
        const arr = [2, Infinity, 4];
        const result = array_product(arr);
        expect(result).toBe(Infinity);
    });

    it('should return the correct product when given an array of negative integers', () => {
        const arr = [-2, -3, -4];
        const result = array_product(arr);
        expect(result).toBe(-24);
    });

    it('should return the correct product when given an array of mixed positive and negative integers', () => {
        const arr = [-2, 3, -4];
        const result = array_product(arr);
        expect(result).toBe(24);
    });

    it('should return the correct product when given an array of floating point numbers', () => {
        const arr = [2.5, 3.5, 4.5];
        const result = array_product(arr);
        expect(result).toBeCloseTo(39.375);
    });
});