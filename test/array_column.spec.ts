import { array_column } from "../src";

describe('array_column', () => {

    it('should return an empty array when given an empty input array', () => {
        const inputArray: Record<string, any>[] = [];
        const columnKey = 'name';
        const expectedOutput: any[] = [];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with values from a specified column when given a valid input array and column key', () => {
        const inputArray = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
            { id: 3, name: 'Bob' }
        ];
        const columnKey = 'name';
        const expectedOutput = ['John', 'Jane', 'Bob'];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an empty array when given a column key that does not exist in the input array', () => {
        const inputArray = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
            { id: 3, name: 'Bob' }
        ];
        const columnKey = 'age';
        const expectedOutput = [] as any[];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with values from a specified column when given an input array with only one item', () => {
        const inputArray = [{ id: 1, name: 'John' }];
        const columnKey = 'name';
        const expectedOutput = ['John'];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with values from a specified column when given an input array with nested objects', () => {
        const inputArray = [
            { id: 1, name: 'John', address: { city: 'New York' } },
            { id: 2, name: 'Jane', address: { city: 'Los Angeles' } },
            { id: 3, name: 'Bob', address: { city: 'Chicago' } }
        ];
        const columnKey = 'address.city';
        const expectedOutput = ['New York', 'Los Angeles', 'Chicago'];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an array with values from a specified column when given an input array with null or undefined values', () => {
        const inputArray = [
            { id: 1, name: 'John' },
            { id: 2, name: null },
            { id: 3, name: undefined }
        ];
        const columnKey = 'name';
        const expectedOutput = ['John', null, undefined];

        const result = array_column(inputArray, columnKey);

        expect(result).toEqual(expectedOutput);
    });


});