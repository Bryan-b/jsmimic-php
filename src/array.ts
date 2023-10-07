/**
 * Changes the case of all keys in an associative array.
 * @param inputArray - The input associative array.
 * @param caseType - Case to convert keys to. Use 'CASE_LOWER' or 'CASE_UPPER'.
 * @returns An array with all keys converted to the specified case.
 */
function array_change_key_case<T>(inputArray: Record<string, T>, caseType: 'CASE_LOWER' | 'CASE_UPPER' = 'CASE_LOWER'): Record<string, T> {
    const result: Record<string, T> = {};

    for (const key in inputArray) {
        if (inputArray.hasOwnProperty(key)) {
            const newKey = caseType === 'CASE_UPPER' ? key.toUpperCase() : key.toLowerCase();
            result[newKey] = inputArray[key];
        }
    }

    return result;
}


/**
 * Split an array into chunks.
 * @param arr - The input array.
 * @param size - The size of each chunk.
 * @param preserveKeys - (Optional) Whether to preserve keys.
 * @returns An array of arrays containing chunks of the original array.
 */
function array_chunk<T>(arr: T[] | Record<string, T>, size: number, preserveKeys: boolean = false): (T[] | Record<string, T>)[] {
    if (size <= 0) {
        return [];
    }

    if (Array.isArray(arr)) {
        // Handle regular arrays
        const result: T[][] = [];
        let chunk: T[] = [];

        for (let i = 0;i < arr.length;i++) {
            if (i % size === 0 && i > 0) {
                result.push(chunk);
                chunk = [];
            }

            if (preserveKeys) {
                chunk[i] = arr[i];
            } else {
                chunk.push(arr[i]);
            }
        }

        if (chunk.length > 0) {
            result.push(chunk);
        }

        return result;
    } else {
        // Handle associative arrays
        const keys = Object.keys(arr);
        const result: (Record<string, T> | T[])[] = [];
        let chunk: Record<string, T> = {};

        for (let i = 0;i < keys.length;i++) {
            const key = keys[i];
            if (i % size === 0 && i > 0) {
                result.push({ ...chunk });
                chunk = {};
            }

            if (preserveKeys) {
                chunk[key] = arr[key];
            } else {
                chunk[i.toString()] = arr[key];
            }
        }

        if (Object.keys(chunk).length > 0) {
            result.push({ ...chunk });
        }

        return result;
    }
}


/**
 * Returns the values from a single column in an input array.
 * @param inputArray - The input associative array.
 * @param columnKey - The column key to extract values from.
 * @returns An array containing values from the specified column.
 */
function array_column<T>(inputArray: Record<string, any>[], columnKey: string): T[] {
    return inputArray.map((item) => {
        let value = item;
        const keys = columnKey.split('.');

        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            } else {
                return undefined; // Key not found or encountered a non-object, return undefined
            }
        }

        return value as T | undefined;
    }).filter((value): value is T => value !== undefined) as T[]; // Type assertion
}



/**
 * Creates an array by using one array for keys and another for values.
 * @param keys - Array containing keys.
 * @param values - Array containing values.
 * @returns An associative array created from the two input arrays.
 */
function array_combine<T extends string | number, U>(keys: T[], values: U[]): Record<string, U> {
    const result: Record<string, U> = {};

    keys.forEach((key, index) => {
        if(result.hasOwnProperty(key.toString()))  throw new Error('Duplicate keys are not allowed.');
        result[String(key)] = values[index];
    });

    return result;
}


/**
 * Counts all the values of an array.
 * @param arr - The input array.
 * @returns An associative array where keys are unique values from the input array, and values are their counts.
 */
function array_count_values<T extends string | number | boolean | undefined>(arr: T[]): Record<string, number> {
    const result: Record<string, number> = {};

    for (const value of arr) {
        const key = String(value);
        if (!result[key]) {
            result[key] = 1;
        } else {
            result[key] += 1;
        }
    }

    return result;
}


/**
 * Computes the difference of arrays with additional index check.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all the values from arr1 that are not present in arr2.
 */
function array_diff_assoc<T>(arr1: Record<string, T>, arr2: Record<string, T>): Record<string, T> {
    const result: Record<string, T> = {};

    for (const key in arr1) {
        if (arr1.hasOwnProperty(key)) {
            if (!arr2.hasOwnProperty(key) || arr1[key] !== arr2[key]) {
                Object.assign(result, { [key]: arr1[key] });
            }
        }
    }

    return result;
}


/**
 * Computes the difference of arrays using keys for comparison.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all the values from arr1 whose keys are not present in arr2.
 */
function array_diff_key<T>(arr1: Record<string, T>, arr2: Partial<Record<string, T>>): Record<string, T> {
    const result: Record<string, T> = {};

    Object.keys(arr1).forEach((key) => {
        if (arr1.hasOwnProperty(key) && !arr2.hasOwnProperty(key)) {
            Object.assign(result, { [key]: arr1[key] });
        }
    })

    return result;
}


/**
 * Computes the difference of arrays with additional index check, compares data by a callback function.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param compareFunc - Callback function to compare elements.
 * @returns An array containing all the values from arr1 that are not present in arr2.
 */
function array_diff_uassoc<T>(arr1: Record<string, T>, arr2: Record<string, T>, compareFunc: (a: T, b: T) => number): Record<string, T> {
    const result: Record<string, T> = {};

    if (Object.keys(arr1).length === Object.keys(arr2).length) {
        for (const key in arr1) {
            if (arr1.hasOwnProperty(key)) {
                if (!(key in arr2) || compareFunc(arr1[key], arr2[key]) !== 0) {
                    result[key] = arr1[key];
                }
            }
        }
    }

    if (Object.keys(result).length === 0) {
        return {};
    }

    return result;
}


/**
 * Computes the difference of arrays using a callback function on the keys for comparison.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param keyCompareFunc - Callback function to compare keys.
 * @returns An array containing all the values from arr1 whose keys are not present in arr2.
 */
function array_diff_ukey<T>(arr1: Record<string, T>, arr2: Record<string, any>, keyCompareFunc: (a: string, b: string) => number): Record<string, T> {
    const result: Record<string, T> = {};

    if (Object.keys(arr2).length === 0) return result;

    for (const key in arr1) {
        if (arr1.hasOwnProperty(key) && (!Object.prototype.hasOwnProperty.call(arr2, key) || keyCompareFunc(key, arr2[key]) !== 0)) {
            result[key] = arr1[key];
        }
    }

    return result;
}


/**
 * Computes the difference of arrays.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all the values from arr1 that are not present in arr2.
 */
function array_diff<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter((item) => !arr2.includes(item));
}


/**
 * Fill an array with values.
 * @param start - The start index.
 * @param num - Number of elements to insert.
 * @param value - Value to insert.
 * @returns An array filled with the specified value.
 */
function array_fill<T>(start: number, num: number, value: T): T[] {
    const result: T[] = [];

    for (let i = 0;i < num;i++) {
        result[start + i] = value;
    }

    return result;
}


/**
 * Fill an array with values, specifying keys.
 * @param keys - The keys to fill.
 * @param value - Value to insert.
 * @returns An associative array filled with the specified value.
 */
function array_fill_keys<T>(keys: string[], value: T = undefined as any): Record<string, T> {
    const result: Record<string, T> = {};

    keys.forEach((key) => {
        result[key] = value;
    });

    return result;
}


/**
 * Filters elements of an array using a callback function.
 * @param arr - The input array.
 * @param callback - A callback function to filter elements.
 * @returns An array containing the elements that pass the filter.
 */
function array_filter<T>(arr: T[], callback: (value: T, index: number, array: T[]) => boolean): T[] {
    return arr.filter(callback);
}


/**
 * Exchanges all keys with their associated values in an array.
 * @param inputArray - The input associative array.
 * @returns An associative array with keys and values swapped.
 */
function array_flip<T extends string | number | symbol | null | undefined | boolean>(inputArray: Record<string, T>): Record<string, string> {
    const result: Record<string, string> = {};

    for (const key in inputArray) {
        if (inputArray.hasOwnProperty(key)) {
            const value = inputArray[key];
            result[String(value)] = key;
        }
    }

    return result;
}


/**
 * Computes the intersection of arrays with additional index check.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all values from arr1 that are present in arr2.
 */
function array_intersect_assoc<T>(arr1: Record<string | number | symbol, T>, arr2: Record<string | number | symbol, T>): Record<string | number | symbol, T> {
    const result: Record<string | number | symbol, T> = {};

    for (const key in arr1) {
        if (arr1.hasOwnProperty(key) && (key in arr2) && arr1[key] === arr2[key]) {
            result[key] = arr1[key];
        }
    }

    return result;
}


/**
 * Computes the intersection of arrays using keys for comparison.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all values from arr1 whose keys are present in arr2.
 */
function array_intersect_key<T>(arr1: Record<string, T>, arr2: Record<string, any>): Record<string, T> {
    const result: Record<string, T> = {};

    for (const key in arr1) {
        if (arr1.hasOwnProperty(key) && (key in arr2)) {
            result[key] = arr1[key];
        }
    }

    return result;
}


/**
 * Computes the intersection of arrays with additional index check, compares data by a callback function.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param compareFunc - Callback function to compare elements.
 * @returns An array containing all values from arr1 that are present in arr2.
 */
function array_intersect_uassoc<T>(arr1: Record<string, T>, arr2: Record<string, T>, compareFunc: (a: T, b: T) => number): Record<string, T> {
    const result: Record<string, T> = {};

    for (const key in arr1) {
        if (arr1.hasOwnProperty(key) && (key in arr2) && compareFunc(arr1[key], arr2[key]) === 0) {
            result[key] = arr1[key];
        }
    }

    return result;
}


/**
 * Computes the intersection of arrays using a callback function on the keys for comparison.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param keyCompareFunc - Callback function to compare keys.
 * @returns An array containing all values from arr1 whose keys are present in arr2.
 */
function array_intersect_ukey<T>(arr1: Record<string, T>, arr2: Record<string, any>, keyCompareFunc: (a: any, b: any) => number): Record<string, T> {
    const result: Record<string, T> = {};

    for (const key1 in arr1) {
        if (arr1.hasOwnProperty(key1)) {
            for (const key2 in arr2) {
                if (arr2.hasOwnProperty(key2) && keyCompareFunc(key1, key2) === 0) {
                    result[key1] = arr1[key1];
                    break; // Break to avoid adding the same key multiple times
                }
            }
        }
    }

    return result;
}


/**
 * Computes the intersection of arrays.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all values from arr1 that are present in arr2.
 */
function array_intersect<T>(arr1: T[], arr2: T[]): T[] {
    function deepEqual(obj1: any, obj2: any): boolean {
        // Check if the objects are of the same type
        if (typeof obj1 !== typeof obj2) {
            return false;
        }

        if (obj1 === obj2 || Number.isNaN(obj1) && Number.isNaN(obj2)) {
            return true;
        }

        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            if (obj1.length !== obj2.length) {
                return false;
            }

            for (let i = 0;i < obj1.length;i++) {
                if (!deepEqual(obj1[i], obj2[i])) {
                    return false;
                }
            }

            return true;
        }

        if (typeof obj1 === 'object' && typeof obj2 === 'object') {
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);

            if (keys1.length !== keys2.length) {
                return false;
            }

            for (const key of keys1) {
                if (!deepEqual(obj1[key], obj2[key])) {
                    return false;
                }
            }

            return true;
        }

        return false;
    }

    return arr1.filter((item1) => arr2.some((item2) => deepEqual(item1, item2)));
}


/**
 * Checks if all keys are numerical and start from 0.
 * @param arr - The input array.
 * @returns `true` if the array is considered a list, `false` otherwise.
 */
function array_is_list<T>(arr: Record<string, T>): boolean {
    const keys = Object.keys(arr);
    return keys.every((key, index) => key === index.toString());
}

/**
 * Checks if a specific key exists in an array.
 * @param key - The key to check.
 * @param arr - The input array.
 * @returns `true` if the key exists in the array, `false` otherwise.
 */
function array_key_exists<T>(key: string | number, arr: Record<string, T>): boolean {
    return key in arr;
}

/**
 * Gets the first key of an array.
 * @param arr - The input array.
 * @returns The first key, or `undefined` if the array is empty.
 */
function array_key_first<T>(arr: Record<string, T>): string | undefined {
    const keys = Object.keys(arr);
    return keys[0];
}

/**
 * Gets the last key of an array.
 * @param arr - The input array.
 * @returns The last key, or `undefined` if the array is empty.
 */
function array_key_last<T>(arr: Record<string, T>): string | undefined {
    const keys = Object.keys(arr);
    return keys[keys.length - 1];
}

/**
 * Returns all the keys of an array.
 * @param arr - The input array.
 * @returns An array containing all the keys of the input array.
 */
function array_keys<T>(arr: Record<string, T>): string[] {
    return Object.keys(arr);
}

/**
 * Applies a callback function to all elements of an array.
 * @param arr - The input array.
 * @param callback - A callback function to apply to each element.
 * @returns An array containing the modified values.
 */
function array_map<T, U>(arr: T[], callback: (value: T, index: number, array: T[]) => U): U[] {
    return arr.map(callback);
}

/**
 * Recursively merges two or more arrays.
 * @param arrays - Arrays to merge.
 * @returns A new object containing the merged values.
 */
function array_merge_recursive<T extends Record<string, any>>(...arrays: T[]): T {
    const result: T = {} as T;

    for (const arr of arrays) {
        for (const key in arr) {
            if (arr.hasOwnProperty(key)) {
                if (typeof arr[key] === 'object' && arr[key] !== null) {
                    if (typeof result[key] === 'undefined') {
                        // Initialize the result[key] as an object of the same type as arr[key]
                        result[key] = Array.isArray(arr[key]) ? [] as any : {} as any;
                    }
                    result[key] = array_merge_recursive(result[key], arr[key]);
                } else {
                    result[key] = arr[key];
                }
            }
        }
    }

    return result;
}

/**
 * Merges two or more arrays.
 * @param arrays - Arrays to merge.
 * @returns A new array containing the merged elements.
 */
function array_merge<T>(...arrays: T[][]): T[] {
    const result: T[] = [];

    for (const arr of arrays) {
        result.push(...arr);
    }

    return result;
}

/**
 * Sorts multiple arrays and maintains their correlation.
 * @param arr - The input arrays to sort.
 * @returns An array of sorted arrays.
 */
function array_multisort<T>(...arr: T[][]): T[][] {
    const keys = arr.map(() => 0);
    const result: T[][] = [];

    // Create an array of arrays with the same elements as input arrays
    for (let i = 0;i < arr.length;i++) {
        result[i] = [...arr[i]];
    }

    // Sort the result array using the first array's values as keys
    result.sort((a, b) => {
        for (let i = 0;i < a.length;i++) {
            const key = a[i];
            const otherKey = b[i];

            if (key < otherKey) return -1;
            if (key > otherKey) return 1;
        }

        return 0;
    });

    return result;
}

/**
 * Pad an array to a specified length with a value.
 * @param arr - The input array.
 * @param size - The target length.
 * @param value - The value to pad with.
 * @returns A new array padded to the specified length.
 */
function array_pad<T>(arr: T[], size: number, value: T): T[] {
    if (size <= arr.length) return arr;

    const padCount = size - arr.length;
    const paddedArray = [...arr];

    for (let i = 0;i < padCount;i++) {
        paddedArray.push(value);
    }

    return paddedArray;
}


/**
 * Calculate the product of values in an array.
 * @param arr - The input array.
 * @returns The product of all values in the array.
 */
function array_product(arr: number[]): number {
    return arr.reduce((product, value) => product * value, 1);
}


/**
 * Add one or more elements to the end of an array.
 * @param arr - The input array.
 * @param elements - Elements to add to the end of the array.
 * @returns The new length of the array.
 */
function array_push<T>(arr: T[], ...elements: T[]): number {
    arr.push(...elements);
    return arr.length;
}


/**
 * Pick one or more random keys from an array.
 * @param arr - The input array.
 * @param num - Number of random keys to pick.
 * @returns An array containing the randomly picked keys.
 */
function array_rand<T>(arr: T[], num: number = 1): number[] {
    const keys = Object.keys(arr);
    const randomKeys: number[] = [];

    while (num > 0) {
        const randomIndex = Math.floor(Math.random() * keys.length);
        randomKeys.push(Number(keys[randomIndex]));
        num--;
    }

    return randomKeys;
}


/**
 * Iteratively reduce an array to a single value using a callback function.
 * @param arr - The input array.
 * @param callback - A callback function to apply to each element.
 * @param initial - (Optional) Initial value for the accumulator.
 * @returns The reduced value.
 */
function array_reduce<T, U>(arr: T[], callback: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initial?: U): U {
    return arr.reduce(callback, initial as U);
}


/**
 * Replace values in an array with values from another array.
 * @param inputArray - The input array to modify.
 * @param replacementArray - An array containing values to replace.
 * @returns A new array with replaced values.
 */
function array_replace<T>(inputArray: Record<string, T>, replacementArray: Record<string, T>): Record<string, T> {
    return { ...inputArray, ...replacementArray };
}


/**
 * Reverses the order of elements in an array.
 * @param arr - The input array.
 * @param preserveKeys - (Optional) Whether to preserve keys.
 * @returns A new array with elements in reverse order.
 */
function array_reverse<T>(arr: T[], preserveKeys: boolean = false): T[] {
    const reversedArray = arr.reverse();
    return preserveKeys ? reversedArray : Object.values(reversedArray);
}


/**
 * Searches for a value in an array and returns the corresponding key if found.
 * @param needle - The value to search for.
 * @param haystack - The input array.
 * @param strict - (Optional) Whether to use strict comparison.
 * @returns The key corresponding to the value, or `null` if not found.
 */
function array_search<T>(needle: T, haystack: Record<string, T>, strict: boolean = false): string | null {
    for (const key in haystack) {
        if (haystack.hasOwnProperty(key)) {
            const value = haystack[key];
            if ((strict && value === needle) || (!strict && value == needle)) {
                return key;
            }
        }
    }

    return null;
}


/**
 * Remove and return the first element from an array.
 * @param arr - The input array.
 * @returns The removed element.
 */
function array_shift<T>(arr: T[]): T | undefined {
    return arr.shift();
}


/**
 * Extract a portion of an array.
 * @param arr - The input array.
 * @param offset - The starting index.
 * @param length - (Optional) The length of the slice.
 * @returns A new array containing the extracted elements.
 */
function array_slice<T>(arr: T[], offset: number, length?: number): T[] {
    return arr.slice(offset, length ? offset + length : undefined);
}

export {
    array_change_key_case,
    array_chunk,
    array_column,
    array_combine,
    array_count_values,
    array_diff_assoc,
    array_diff_key,
    array_diff_uassoc,
    array_diff_ukey,
    array_diff,
    array_fill,
    array_fill_keys,
    array_filter,
    array_flip,
    array_intersect_assoc,
    array_intersect_key,
    array_intersect_uassoc,
    array_intersect_ukey,
    array_intersect,
    array_is_list,
    array_key_exists,
    array_key_first,
    array_key_last,
    array_keys,
    array_map,
    array_merge,
    array_merge_recursive,
    array_multisort,
    array_pad,
    array_product,
    array_push,
    array_rand,
    array_reduce,
    array_replace,
    array_reverse,
    array_search,
    array_shift,
    array_slice
}