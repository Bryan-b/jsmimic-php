import { sizeof } from "../src";

describe('sizeof', () => {
    it('should return 0 for an empty array', () => {
        const arr = [];
        const result = sizeof(arr);
        expect(result).toBe(0);
    });

    it('should return the correct length for an array with elements', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = sizeof(arr);
        expect(result).toBe(5);
    });
});