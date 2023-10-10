import { array_combine } from "../src";

describe('array_combine', () => {

    it('should return an empty object when both keys and values arrays are empty', () => {
        const keys: string[] = [];
        const values: number[] = [];

        const result = array_combine(keys, values);

        expect(result).toEqual({});
    });

    it('should return an associative array with keys and values when both arrays are of equal length', () => {
        const keys = ['a', 'b', 'c'];
        const values = [1, 2, 3];

        const result = array_combine(keys, values);

        expect(result).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
    });

    it('should return an associative array with keys and undefined values when the values array is empty', () => {
        const keys = ['a', 'b', 'c'];
        const values: number[] = [];

        const result = array_combine(keys, values);

        expect(result).toEqual({ 'a': undefined, 'b': undefined, 'c': undefined });
    });

    it('should return an associative array with keys and undefined values when the keys array is empty', () => {
        const keys: string[] = [];
        const values = [1, 2, 3];

        const result = array_combine(keys, values);

        expect(result).toEqual({});
    });

    it('should throw an error when the keys array contains duplicate values', () => {
        const keys = ['a', 'b', 'a'];
        const values = [1, 2, 3];

        expect(() => {
            array_combine(keys, values);
        }).toThrowError('Duplicate keys are not allowed.');
    });

    it('should return an associative array with keys and undefined values when the values array is shorter than the keys array', () => {
        const keys = ['a', 'b', 'c'];
        const values = [1, 2];

        const result = array_combine(keys, values);

        expect(result).toEqual({ 'a': 1, 'b': 2, 'c': undefined });
    });
});