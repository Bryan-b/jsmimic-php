import { array_reduce } from "../src";

describe('array_reduce', () => {
    it('should sum up the numbers in the array when using a callback function', () => {
        const arr = [1, 2, 3, 4, 5];
        const callback = (accumulator: number, currentValue: number) => accumulator + currentValue;
        const result = array_reduce(arr, callback);
        expect(result).toBe(15);
    });

    it('should concatenate the strings in the array when using a callback function', () => {
        const arr = ['Hello', ' ', 'World', '!'];
        const callback = (accumulator: string, currentValue: string) => accumulator + currentValue;
        const result = array_reduce(arr, callback);
        expect(result).toBe('Hello World!');
    });

    it('should return the initial value when reducing an empty array with an initial value', () => {
        const arr: number[] = [];
        const callback = (accumulator: number, currentValue: number) => accumulator + currentValue;
        const initial = 10;
        const result = array_reduce(arr, callback, initial);
        expect(result).toBe(10);
    });

    it('should return the single element when reducing an array of one element without an initial value', () => {
        const arr = [5];
        const callback = (accumulator: number, currentValue: number) => accumulator + currentValue;
        const result = array_reduce(arr, callback);
        expect(result).toBe(5);
    });

    it('should return the sum of the element and the initial value when reducing an array of one element with an initial value', () => {
        const arr = [5];
        const callback = (accumulator: number, currentValue: number) => accumulator + currentValue;
        const initial = 10;
        const result = array_reduce(arr, callback, initial);
        expect(result).toBe(15);
    });
});