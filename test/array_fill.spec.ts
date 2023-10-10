import { array_fill } from "../src";

describe('array_fill', () => {
    it('should return an array filled with the specified value when given valid start index, number of elements and value', () => {
        const result = array_fill(0, 3, 'test');
        expect(result).toEqual(['test', 'test', 'test']);
    });

    it('should return an empty array when given num as 0', () => {
        const result = array_fill(0, 0, 'test');
        expect(result).toEqual([]);
    });

    it('should return an array with a single element when given num as 1', () => {
        const result = array_fill(0, 1, 'test');
        expect(result).toEqual(['test']);
    });
});