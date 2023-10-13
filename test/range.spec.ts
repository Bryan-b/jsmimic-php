import { range } from "../src";

describe('range', () => {
    it('should generate a range from 1 to 5 (default step)', () => {
        const result = Array.from(range(1, 5));
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should generate a range from 1 to 10 with a step of 2', () => {
        const result = Array.from(range(1, 10, 2));
        expect(result).toEqual([1, 3, 5, 7, 9]);
    });

    it('should generate a range from 10 to 1 with a step of -2', () => {
        const result = Array.from(range(10, 1, -2));
        expect(result).toEqual([10, 8, 6, 4, 2]);
    });

    it('should generate an empty range when start and end are the same', () => {
        const result = Array.from(range(1, 1));
        expect(result).toEqual([]);
    });

    it('should generate an empty range when start and end are the same with a non-zero step', () => {
        const result = Array.from(range(1, 1, 2));
        expect(result).toEqual([]);
    });

    it('should generate an empty range when start is greater than end with a positive step', () => {
        const result = Array.from(range(5, 1, 2));
        expect(result).toEqual([]);
    });

    it('should generate an empty range when start is less than end with a negative step', () => {
        const result = Array.from(range(1, 5, -2));
        expect(result).toEqual([]);
    });
});