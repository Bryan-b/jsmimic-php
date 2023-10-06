"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array_intersect = exports.array_intersect_ukey = exports.array_intersect_uassoc = exports.array_intersect_key = exports.array_intersect_assoc = exports.array_flip = exports.array_filter = exports.array_fill_keys = exports.array_fill = exports.array_diff = exports.array_diff_ukey = exports.array_diff_uassoc = exports.array_diff_key = exports.array_diff_assoc = exports.array_count_values = exports.array_combine = exports.array_column = exports.array_chunk = exports.array_change_key_case = void 0;
/**
 * Changes the case of all keys in an associative array.
 * @param inputArray - The input associative array.
 * @param caseType - Case to convert keys to. Use 'CASE_LOWER' or 'CASE_UPPER'.
 * @returns An array with all keys converted to the specified case.
 */
function array_change_key_case(inputArray, caseType = 'CASE_LOWER') {
    const result = {};
    for (const key in inputArray) {
        if (inputArray.hasOwnProperty(key)) {
            const newKey = caseType === 'CASE_UPPER' ? key.toUpperCase() : key.toLowerCase();
            result[newKey] = inputArray[key];
        }
    }
    return result;
}
exports.array_change_key_case = array_change_key_case;
/**
 * Split an array into chunks.
 * @param arr - The input array.
 * @param size - The size of each chunk.
 * @param preserveKeys - (Optional) Whether to preserve keys.
 * @returns An array of arrays containing chunks of the original array.
 */
function array_chunk(arr, size, preserveKeys = false) {
    if (size <= 0) {
        return [];
    }
    if (Array.isArray(arr)) {
        // Handle regular arrays
        const result = [];
        let chunk = [];
        for (let i = 0; i < arr.length; i++) {
            if (i % size === 0 && i > 0) {
                result.push(chunk);
                chunk = [];
            }
            if (preserveKeys) {
                chunk[i] = arr[i];
            }
            else {
                chunk.push(arr[i]);
            }
        }
        if (chunk.length > 0) {
            result.push(chunk);
        }
        return result;
    }
    else {
        // Handle associative arrays
        const keys = Object.keys(arr);
        const result = [];
        let chunk = {};
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (i % size === 0 && i > 0) {
                result.push(Object.assign({}, chunk));
                chunk = {};
            }
            if (preserveKeys) {
                chunk[key] = arr[key];
            }
            else {
                chunk[i.toString()] = arr[key];
            }
        }
        if (Object.keys(chunk).length > 0) {
            result.push(Object.assign({}, chunk));
        }
        return result;
    }
}
exports.array_chunk = array_chunk;
/**
 * Returns the values from a single column in an input array.
 * @param inputArray - The input associative array.
 * @param columnKey - The column key to extract values from.
 * @returns An array containing values from the specified column.
 */
function array_column(inputArray, columnKey) {
    return inputArray.map((item) => {
        let value = item;
        const keys = columnKey.split('.');
        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            }
            else {
                return undefined; // Key not found or encountered a non-object, return undefined
            }
        }
        return value;
    }).filter((value) => value !== undefined); // Type assertion
}
exports.array_column = array_column;
/**
 * Creates an array by using one array for keys and another for values.
 * @param keys - Array containing keys.
 * @param values - Array containing values.
 * @returns An associative array created from the two input arrays.
 */
function array_combine(keys, values) {
    const result = {};
    keys.forEach((key, index) => {
        if (result.hasOwnProperty(key.toString()))
            throw new Error('Duplicate keys are not allowed.');
        result[String(key)] = values[index];
    });
    return result;
}
exports.array_combine = array_combine;
/**
 * Counts all the values of an array.
 * @param arr - The input array.
 * @returns An associative array where keys are unique values from the input array, and values are their counts.
 */
function array_count_values(arr) {
    const result = {};
    for (const value of arr) {
        const key = String(value);
        if (!result[key]) {
            result[key] = 1;
        }
        else {
            result[key] += 1;
        }
    }
    return result;
}
exports.array_count_values = array_count_values;
/**
 * Computes the difference of arrays with additional index check.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all the values from arr1 that are not present in arr2.
 */
function array_diff_assoc(arr1, arr2) {
    const result = {};
    for (const key in arr1) {
        if (arr1.hasOwnProperty(key)) {
            if (!arr2.hasOwnProperty(key) || arr1[key] !== arr2[key]) {
                Object.assign(result, { [key]: arr1[key] });
            }
        }
    }
    return result;
}
exports.array_diff_assoc = array_diff_assoc;
/**
 * Computes the difference of arrays using keys for comparison.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all the values from arr1 whose keys are not present in arr2.
 */
function array_diff_key(arr1, arr2) {
    const result = {};
    Object.keys(arr1).forEach((key) => {
        if (arr1.hasOwnProperty(key) && !arr2.hasOwnProperty(key)) {
            Object.assign(result, { [key]: arr1[key] });
        }
    });
    return result;
}
exports.array_diff_key = array_diff_key;
/**
 * Computes the difference of arrays with additional index check, compares data by a callback function.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param compareFunc - Callback function to compare elements.
 * @returns An array containing all the values from arr1 that are not present in arr2.
 */
function array_diff_uassoc(arr1, arr2, compareFunc) {
    const result = {};
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
exports.array_diff_uassoc = array_diff_uassoc;
/**
 * Computes the difference of arrays using a callback function on the keys for comparison.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param keyCompareFunc - Callback function to compare keys.
 * @returns An array containing all the values from arr1 whose keys are not present in arr2.
 */
function array_diff_ukey(arr1, arr2, keyCompareFunc) {
    const result = {};
    if (Object.keys(arr2).length === 0)
        return result;
    for (const key in arr1) {
        if (arr1.hasOwnProperty(key) && (!Object.prototype.hasOwnProperty.call(arr2, key) || keyCompareFunc(key, arr2[key]) !== 0)) {
            result[key] = arr1[key];
        }
    }
    return result;
}
exports.array_diff_ukey = array_diff_ukey;
/**
 * Computes the difference of arrays.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all the values from arr1 that are not present in arr2.
 */
function array_diff(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item));
}
exports.array_diff = array_diff;
/**
 * Fill an array with values.
 * @param start - The start index.
 * @param num - Number of elements to insert.
 * @param value - Value to insert.
 * @returns An array filled with the specified value.
 */
function array_fill(start, num, value) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result[start + i] = value;
    }
    return result;
}
exports.array_fill = array_fill;
/**
 * Fill an array with values, specifying keys.
 * @param keys - The keys to fill.
 * @param value - Value to insert.
 * @returns An associative array filled with the specified value.
 */
function array_fill_keys(keys, value = undefined) {
    const result = {};
    keys.forEach((key) => {
        result[key] = value;
    });
    return result;
}
exports.array_fill_keys = array_fill_keys;
/**
 * Filters elements of an array using a callback function.
 * @param arr - The input array.
 * @param callback - A callback function to filter elements.
 * @returns An array containing the elements that pass the filter.
 */
function array_filter(arr, callback) {
    return arr.filter(callback);
}
exports.array_filter = array_filter;
/**
 * Exchanges all keys with their associated values in an array.
 * @param inputArray - The input associative array.
 * @returns An associative array with keys and values swapped.
 */
function array_flip(inputArray) {
    const result = {};
    for (const key in inputArray) {
        if (inputArray.hasOwnProperty(key)) {
            const value = inputArray[key];
            result[String(value)] = key;
        }
    }
    return result;
}
exports.array_flip = array_flip;
/**
 * Computes the intersection of arrays with additional index check.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all values from arr1 that are present in arr2.
 */
function array_intersect_assoc(arr1, arr2) {
    const result = {};
    for (const key in arr1) {
        if (arr1.hasOwnProperty(key) && (key in arr2) && arr1[key] === arr2[key]) {
            result[key] = arr1[key];
        }
    }
    return result;
}
exports.array_intersect_assoc = array_intersect_assoc;
/**
 * Computes the intersection of arrays using keys for comparison.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all values from arr1 whose keys are present in arr2.
 */
function array_intersect_key(arr1, arr2) {
    const result = {};
    for (const key in arr1) {
        if (arr1.hasOwnProperty(key) && (key in arr2)) {
            result[key] = arr1[key];
        }
    }
    return result;
}
exports.array_intersect_key = array_intersect_key;
/**
 * Computes the intersection of arrays with additional index check, compares data by a callback function.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param compareFunc - Callback function to compare elements.
 * @returns An array containing all values from arr1 that are present in arr2.
 */
function array_intersect_uassoc(arr1, arr2, compareFunc) {
    const result = {};
    for (const key in arr1) {
        if (arr1.hasOwnProperty(key) && (key in arr2) && compareFunc(arr1[key], arr2[key]) === 0) {
            result[key] = arr1[key];
        }
    }
    return result;
}
exports.array_intersect_uassoc = array_intersect_uassoc;
/**
 * Computes the intersection of arrays using a callback function on the keys for comparison.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @param keyCompareFunc - Callback function to compare keys.
 * @returns An array containing all values from arr1 whose keys are present in arr2.
 */
function array_intersect_ukey(arr1, arr2, keyCompareFunc) {
    const result = {};
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
exports.array_intersect_ukey = array_intersect_ukey;
/**
 * Computes the intersection of arrays.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array containing all values from arr1 that are present in arr2.
 */
function array_intersect(arr1, arr2) {
    function deepEqual(obj1, obj2) {
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
            for (let i = 0; i < obj1.length; i++) {
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
exports.array_intersect = array_intersect;
