import { array_splice } from "../src";

describe('array_splice', () => {
    it('should remove a portion of an array and replace it with new elements', () => {
        const arr = [1, 2, 3, 4, 5];
        const start = 1;
        const deleteCount = 2;
        const elements = [6, 7];

        const result = array_splice(arr, start, deleteCount, ...elements);

        expect(result).toEqual([2, 3]);
        expect(arr).toEqual([1, 6, 7, 4, 5]);
    });

    it('should remove a portion of an array and replace it with new elements', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const start = 2;
        const deleteCount = 1;
        const elements = ['x', 'y'];

        const result = array_splice(arr, start, deleteCount, ...elements);

        expect(result).toEqual(['c']);
        expect(arr).toEqual(['a', 'b', 'x', 'y', 'd', 'e']);
    });

    it('should remove a portion of an array and replace it with new elements', () => {
        const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        const start = 0;
        const deleteCount = 2;
        const elements = [{ id: 5 }, { id: 6 }];

        const result = array_splice(arr, start, deleteCount, ...elements);

        expect(result).toEqual([{ id: 1 }, { id: 2 }]);
        expect(arr).toEqual([{ id: 5 }, { id: 6 }, { id: 3 }, { id: 4 }]);
    });

    it('should remove a portion of an array and replace it with new elements', () => {
        const arr: number[] = [];
        const start = 0;
        const deleteCount = 0;
        const elements = [1, 2, 3];

        const result = array_splice(arr, start, deleteCount, ...elements);

        expect(result).toEqual([]);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should remove a portion of an array and replace it with new elements', () => {
        const arr = [1, 2, 3];
        const start = 4;
        const deleteCount = 0;
        const elements = [4, 5];

        const result = array_splice(arr, start, deleteCount, ...elements);

        expect(result).toEqual([]);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should remove a portion of an array and replace it with new elements', () => {
        const arr = [1, 2, 3, 4, 5];
        const start = -3;
        const deleteCount = 2;
        const elements = [6, 7];

        const result = array_splice(arr, start, deleteCount, ...elements);

        expect(result).toEqual([3, 4]);
        expect(arr).toEqual([1, 2, 6, 7, 5]);
    });
});