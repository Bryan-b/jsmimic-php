import { array_unique } from '../src';

describe('array_unique', () => {
    it('should return an empty array when given an empty array', () => {
        const input = [] as number[];
        const result = array_unique(input);
        expect(result).toEqual([]);
    });

    it('should return the same array when given an array with unique values', () => {
        const input = [1, 2, 3];
        const result = array_unique(input);
        expect(result).toEqual([1, 2, 3]);
    });

    it('should return an array with unique values when given an array with duplicate values', () => {
        const input = [1, 2, 2, 3, 3, 3];
        const result = array_unique(input);
        expect(result).toEqual([1, 2, 3]);
    });

    it('should return an array with one element when given an array with one element', () => {
        const input = [1];
        const result = array_unique(input);
        expect(result).toEqual([1]);
    });

    it('should return an array with two elements when given an array with two duplicate elements', () => {
        const input = [1, 1];
        const result = array_unique(input);
        expect(result).toEqual([1]);
    }); 
    
    it('should return an array with two elements when given an array with two duplicate elements', () => {
        const input = [1, 1];
        const result = array_unique(input);
        expect(result).toEqual([1]);
    });

    it('should return an array with elements of different types when given an array with duplicate values of different types', () => {
        const input = [1, '1', true, 'true'];
        const result = array_unique(input);
        expect(result).toEqual([1, '1', true, 'true']);
    });

    it('should return an array with elements that are not references to the input array', () => {
        const input = [1, 2, 3];
        const result = array_unique(input);
        expect(result).not.toBe(input);
    });
});