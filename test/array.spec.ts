import { array } from '../src';

describe('array', () => {
    it('should return an empty array when no arguments are passed', () => {
        const result = array();
        expect(result).toEqual([]);
    });

    it('should return an array with a single argument', () => {
        const result = array(1);
        expect(result).toEqual([1]);
    });

    it('should return an array with multiple arguments', () => {
        const result = array(1, 'two', { three: 3 });
        expect(result).toEqual([1, 'two', { three: 3 }]);
    });

    it('should handle undefined arguments', () => {
        const result = array(1, undefined, 'three');
        expect(result).toEqual([1, undefined, 'three']);
    });

    it('should handle null arguments', () => {
        const result = array(null, 'two', null);
        expect(result).toEqual([null, 'two', null]);
    });

    it('should handle different data types', () => {
        const result = array(1, 'two', true, [4, 5], { six: 6 });
        expect(result).toEqual([1, 'two', true, [4, 5], { six: 6 }]);
    });
});