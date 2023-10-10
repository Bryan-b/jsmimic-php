import { array_flip } from "../src";

describe('array_flip', () => {
    it('should swap keys and values when input array has string keys and values', () => {
        const inputArray = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        const expectedOutput = {
            value1: 'key1',
            value2: 'key2',
            value3: 'key3'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should swap keys and values when input array has number keys and values', () => {
        const inputArray = {
            1: 10,
            2: 20,
            3: 30
        };

        const expectedOutput = {
            '10': '1',
            '20': '2',
            '30': '3'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should swap keys and values when input array has null value', () => {
        const inputArray = {
            key1: null,
            key2: null,
            key3: null
        } as any;

        const expectedOutput = {
            'null': 'key3'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should swap keys and values when input array has undefined value', () => {
        const inputArray = {
            key1: undefined,
            key2: undefined,
            key3: undefined
        } as any;

        const expectedOutput = {
            'undefined': 'key3'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });

    it('should swap keys and values when input array has boolean value', () => {
        const inputArray = {
            key1: true,
            key2: false
        } as any;

        const expectedOutput = {
            'true': 'key1',
            'false': 'key2'
        };

        const result = array_flip(inputArray);

        expect(result).toEqual(expectedOutput);
    });
});