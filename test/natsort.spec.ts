import { natsort } from '../src';

describe('natsort', () => {
    it('should sort an array of numbers in natural order', () => {
        const input = ['10', '2', '100', '1'];
        const expected = ['1', '2', '10', '100'];
        natsort(input);
        expect(input).toEqual(expected);
    });

    it('should sort an array of alphanumeric strings in natural order', () => {
        const input = ['item10', 'item2', 'item1', 'item100'];
        const expected = ['item1', 'item2', 'item10', 'item100'];
        natsort(input);
        expect(input).toEqual(expected);
    });

    it('should sort an array with negative numbers in natural order', () => {
        const input = ['-10', '-2', '1', '-100', '100', '-1'];
        const expected = ['-100', '-10', '-2', '-1', '1', '100'];
        natsort(input);
        expect(input).toEqual(expected);
    });

    it('should sort an empty array', () => {
        const input: string[] = [];
        const expected: string[] = [];
        natsort(input);
        expect(input).toEqual(expected);
    });

    it('should sort an array with a single element', () => {
        const input = ['single'];
        const expected = ['single'];
        natsort(input);
        expect(input).toEqual(expected);
    });

    it('should sort an already sorted array in the same order', () => {
        const input = ['1', '2', '10', '100'];
        const expected = ['1', '2', '10', '100'];
        natsort(input);
        expect(input).toEqual(expected);
    });
});