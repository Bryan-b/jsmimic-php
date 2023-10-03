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

    for (const key in arr1) {
        if (arr1.hasOwnProperty(key)) {
            if (!(key in arr2) || compareFunc(arr1[key], arr2[key]) !== 0) {
                result[key] = arr1[key];
            }
        }
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

    for (const key in arr1) {
        if (arr1.hasOwnProperty(key) && !Object.prototype.hasOwnProperty.call(arr2, key) || keyCompareFunc(key, arr2[key])) {
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
function array_fill_keys<T>(keys: string[], value: T): Record<string, T> {
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
function array_flip<T extends string | number | symbol>(inputArray: Record<string, T>): Record<string, string> {
    const result: Record<string, string> = {};

    for (const key in inputArray) {
        if (inputArray.hasOwnProperty(key)) {
            const value = inputArray[key];
            result[value.toString()] = key;
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
function array_intersect_assoc<T>(arr1: Record<string, T>, arr2: Record<string, T>): Record<string, T> {
    const result: Record<string, T> = {};

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
function array_intersect_ukey<T>(arr1: Record<string, T>, arr2: Record<string, any>, keyCompareFunc: (a: string, b: string) => number): Record<string, T> {
    const result: Record<string, T> = {};

    for (const key1 in arr1) {
        if (arr1.hasOwnProperty(key1)) {
            const key2 = Object.keys(arr2).find((key) => keyCompareFunc(key1, key));

            if (key2 !== undefined) {
                result[key1] = arr1[key1];
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
    return arr1.filter((item) => arr2.includes(item));
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
    array_intersect
}