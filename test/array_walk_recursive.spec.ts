import { array_walk_recursive } from '../src';

describe('array_walk_recursive', () => {
    it('should call the callback function for each element in the input array', () => {
        const arr = [1, 2, 3];
        const callback = jest.fn();

        array_walk_recursive(arr, callback);

        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenCalledWith(1, 0, arr);
        expect(callback).toHaveBeenCalledWith(2, 1, arr);
        expect(callback).toHaveBeenCalledWith(3, 2, arr);
    });

    it('should recursively call the callback function for each nested array element', () => {
        const arr = [1, [2, [3]]];
        const callback = jest.fn();

        array_walk_recursive(arr, callback);

        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenCalledWith(1, 0, arr);
        expect(callback).toHaveBeenCalledWith(2, 0, arr[1]);
    });

    it('should handle empty arrays without throwing errors', () => {
        const arr: number[] = [];
        const callback = jest.fn();

        array_walk_recursive(arr, callback);

        expect(callback).not.toHaveBeenCalled();
    });

    it('should handle arrays with null and undefined elements', () => {
        const arr = [null, undefined];
        const callback = jest.fn();

        array_walk_recursive(arr, callback);

        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback).toHaveBeenCalledWith(null, 0, arr);
        expect(callback).toHaveBeenCalledWith(undefined, 1, arr);
    });

    it('should handle arrays with mixed data types', () => {
        const arr = [1, 'two', true];
        const callback = jest.fn();

        array_walk_recursive(arr, callback);

        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenCalledWith(1, 0, arr);
        expect(callback).toHaveBeenCalledWith('two', 1, arr);
        expect(callback).toHaveBeenCalledWith(true, 2, arr);
    });
});