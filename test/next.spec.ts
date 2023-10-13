import { next } from "../src";

describe('next', () => {
    it('should return the next element in the array', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const result = next(inputArray);
        expect(result).toBe(2);
    });

    it('should return false for an empty array', () => {
        const inputArray: number[] = [];
        const result = next(inputArray);
        expect(result).toBe(false);
    });

    it('should return false for an array with a single element', () => {
        const inputArray = [42];
        const result = next(inputArray);
        expect(result).toBe(false);
    });

    it('should handle arrays with various data types', () => {
        const inputArray = [true, 'Hello', 42, { name: 'John' }];
        const result1 = next(inputArray);
        expect(result1).toBe('Hello');

        // Advance the pointer to the next element
        const result2 = next(inputArray);
        expect(result2).toBe(42);

        // Continue advancing
        const result3 = next(inputArray);
        expect(result3).toEqual({ name: 'John' });

        // There's no more "next" element
        const result4 = next(inputArray);
        expect(result4).toBe(false);
    });
});