import { array_walk } from '../src';

describe('array_walk', () => {
    it('should call the callback function for each element in the array', () => {
        const arr = [1, 2, 3];
        const callback = jest.fn();
        array_walk(arr, callback);
        expect(callback).toHaveBeenCalledTimes(3);
    });

    it('should pass the correct arguments to the callback function', () => {
        const arr = [1, 2, 3];
        const callback = jest.fn();
        array_walk(arr, callback);
        expect(callback).toHaveBeenCalledWith(1, 0, arr);
        expect(callback).toHaveBeenCalledWith(2, 1, arr);
        expect(callback).toHaveBeenCalledWith(3, 2, arr);
    });

    it('should return undefined', () => {
        const arr = [1, 2, 3];
        const callback = jest.fn();
        const result = array_walk(arr, callback);
        expect(result).toBeUndefined();
    });

    it('should not call the callback function for an empty array', () => {
        const arr: number[] = [];
        const callback = jest.fn();
        array_walk(arr, callback);
        expect(callback).not.toHaveBeenCalled();
    });

    it('should call the callback function for an array with a single element', () => {
        const arr = [1];
        const callback = jest.fn();
        array_walk(arr, callback);
        expect(callback).toHaveBeenCalledWith(1, 0, arr);
    });

    it('should call the callback function for an array with multiple elements of different types', () => {
        const arr = [1, 'two', true];
        const callback = jest.fn();
        array_walk(arr, callback);
        expect(callback).toHaveBeenCalledWith(1, 0, arr);
        expect(callback).toHaveBeenCalledWith('two', 1, arr);
        expect(callback).toHaveBeenCalledWith(true, 2, arr);
    });

    it('should call the callback function for each element in the array, excluding nested arrays', () => {
        const arr = [1, [2, [3, 4]], 5];
        const callback = jest.fn();
        array_walk(arr, callback);
        expect(callback).toHaveBeenCalledTimes(3);
    });
});