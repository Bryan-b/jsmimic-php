import { in_array } from "../src";

describe('in_array function', () => {
    it('should return true if the value exists in the array (strict comparison)', () => {
        const array = [1, 2, 3, 4, 5];
        const value = 3;
        const result = in_array(value, array, true);
        expect(result).toBe(true);
    });

    it('should return false if the value does not exist in the array (strict comparison)', () => {
        const array = [1, 2, 3, 4, 5];
        const value = 6;
        const result = in_array(value, array, true);
        expect(result).toBe(false);
    });

    it('should return true if the value exists in an array of objects (strict comparison)', () => {
        const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const value = { id: 2 };
        const result = in_array(value, array, true);
        expect(result).toBe(true);
    });

    it('should return false if the value does not exist in an array of objects (strict comparison)', () => {
        const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const value = { id: 4 };
        const result = in_array(value, array, true);
        expect(result).toBe(false);
    });
});