import { natcasesort } from "../src";

describe('natcasesort', () => {
    it('should sort an empty array', () => {
        const arr = [] as string[];
        natcasesort(arr);
        expect(arr).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const arr = ['apple'];
        natcasesort(arr);
        expect(arr).toEqual(['apple']);
    });

    it('should handle an array with all elements already in order', () => {
        const arr = ['apple', 'banana', 'cherry'];
        natcasesort(arr);
        expect(arr).toEqual(['apple', 'banana', 'cherry']);
    });

    it('should handle an array with all elements in reverse order', () => {
        const arr = ['cherry', 'banana', 'apple'];
        natcasesort(arr);
        expect(arr).toEqual(['apple', 'banana', 'cherry']);
    });

    it('should sort an array with numbers and special characters', () => {
        const arr = ['100', 'apple', '@banana', '9cherry', '12date'];
        natcasesort(arr);
        expect(arr).toEqual(['@banana', '9cherry', '12date', '100', 'apple']);
    });
});