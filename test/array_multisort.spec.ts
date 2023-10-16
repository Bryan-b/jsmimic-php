import { array_multisort } from "../src";

describe('array_multisort', () => {
    it('should sort an array by a single column in ascending order', () => {
        const data = [
            { name: 'Bob', age: 30 },
            { name: 'Alice', age: 25 },
            { name: 'Charlie', age: 22 },
        ];
        const sortedData = array_multisort(data, [{ column: 'name', order: 'asc' }]);

        expect(sortedData).toEqual([
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
            { name: 'Charlie', age: 22 },
        ]);
    });

    it('should sort an array by a single column in descending order', () => {
        const data = [
            { name: 'Bob', age: 30 },
            { name: 'Alice', age: 25 },
            { name: 'Charlie', age: 22 },
        ];
        const sortedData = array_multisort(data, [{ column: 'name', order: 'desc' }]);

        expect(sortedData).toEqual([
            { name: 'Charlie', age: 22 },
            { name: 'Bob', age: 30 },
            { name: 'Alice', age: 25 },
        ]);
    });

    it('should sort an array by multiple columns', () => {
        const data = [
            { name: 'Bob', age: 30 },
            { name: 'Alice', age: 25 },
            { name: 'Charlie', age: 22 },
        ];
        const sortedData = array_multisort(data, [
            { column: 'age', order: 'asc' },
            { column: 'name', order: 'desc' },
        ]);

        expect(sortedData).toEqual([
            { name: 'Charlie', age: 22 },
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
        ]);
    });

    it('should handle empty input array', () => {
        const data = [] as any[];
        const sortedData = array_multisort(data, [{ column: 'name', order: 'asc' }]);

        expect(sortedData).toEqual([]);
    });
});