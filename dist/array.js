"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array_slice = exports.array_shift = exports.array_search = exports.array_reverse = exports.array_replace = exports.array_reduce = exports.array_rand = exports.array_push = exports.array_product = exports.array_pad = exports.array_merge_recursive = exports.array_merge = exports.array_map = exports.array_keys = exports.array_key_last = exports.array_key_first = exports.array_key_exists = exports.array_is_list = exports.array_intersect = exports.array_intersect_ukey = exports.array_intersect_uassoc = exports.array_intersect_key = exports.array_intersect_assoc = exports.array_flip = exports.array_filter = exports.array_fill_keys = exports.array_fill = exports.array_diff = exports.array_diff_ukey = exports.array_diff_uassoc = exports.array_diff_key = exports.array_diff_assoc = exports.array_count_values = exports.array_combine = exports.array_column = exports.array_chunk = exports.array_change_key_case = void 0;
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
/**
 * Checks if all keys are numerical and start from 0.
 * @param arr - The input array.
 * @returns `true` if the array is considered a list, `false` otherwise.
 */
function array_is_list(arr) {
    const keys = Object.keys(arr);
    return keys.every((key, index) => key === index.toString());
}
exports.array_is_list = array_is_list;
/**
 * Checks if a specific key exists in an array.
 * @param key - The key to check.
 * @param arr - The input array.
 * @returns `true` if the key exists in the array, `false` otherwise.
 */
function array_key_exists(key, arr) {
    return key in arr;
}
exports.array_key_exists = array_key_exists;
/**
 * Gets the first key of an array.
 * @param arr - The input array.
 * @returns The first key, or `undefined` if the array is empty.
 */
function array_key_first(arr) {
    const keys = Object.keys(arr);
    return keys[0];
}
exports.array_key_first = array_key_first;
/**
 * Gets the last key of an array.
 * @param arr - The input array.
 * @returns The last key, or `undefined` if the array is empty.
 */
function array_key_last(arr) {
    const keys = Object.keys(arr);
    return keys[keys.length - 1];
}
exports.array_key_last = array_key_last;
/**
 * Returns all the keys of an array.
 * @param arr - The input array.
 * @returns An array containing all the keys of the input array.
 */
function array_keys(arr) {
    return Object.keys(arr);
}
exports.array_keys = array_keys;
/**
 * Applies a callback function to all elements of an array.
 * @param arr - The input array.
 * @param callback - A callback function to apply to each element.
 * @returns An array containing the modified values.
 */
function array_map(arr, callback) {
    return arr.map(callback);
}
exports.array_map = array_map;
/**
 * Merges two or more arrays.
 * @param arrays - Arrays to merge.
 * @returns A new array containing the merged elements.
 */
function array_merge(...arrays) {
    const result = [];
    for (const arr of arrays) {
        result.push(...arr);
    }
    return result;
}
exports.array_merge = array_merge;
/**
 * Recursively merges two or more arrays.
 * @param arrays - Arrays to merge.
 * @returns A new object containing the merged values.
 */
function array_merge_recursive(...arrays) {
    const result = {};
    for (const arr of arrays) {
        for (const key in arr) {
            if (arr.hasOwnProperty(key)) {
                if (typeof arr[key] === 'object' && arr[key] !== null) {
                    if (typeof result[key] === 'undefined') {
                        // Initialize the result[key] as an object of the same type as arr[key]
                        result[key] = Array.isArray(arr[key]) ? [] : {};
                    }
                    result[key] = array_merge_recursive(result[key], arr[key]);
                }
                else {
                    result[key] = arr[key];
                }
            }
        }
    }
    return result;
}
exports.array_merge_recursive = array_merge_recursive;
/**
 * Pad an array to a specified length with a value.
 * @param arr - The input array.
 * @param size - The target length.
 * @param value - The value to pad with.
 * @returns A new array padded to the specified length.
 */
function array_pad(arr, size, value) {
    if (arr === null)
        return array_fill(0, size, value);
    if (size < 0)
        throw new Error('Size cannot be negative');
    if (size <= arr.length)
        return arr;
    const padCount = size - arr.length;
    const paddedArray = [...arr];
    for (let i = 0; i < padCount; i++) {
        paddedArray.push(value);
    }
    return paddedArray;
}
exports.array_pad = array_pad;
/**
 * Calculate the product of values in an array.
 * @param arr - The input array.
 * @returns The product of all values in the array.
 */
function array_product(arr) {
    return arr.reduce((product, value) => product * value, 1);
}
exports.array_product = array_product;
/**
 * Add one or more elements to the end of an array.
 * @param arr - The input array.
 * @param elements - Elements to add to the end of the array.
 * @returns The new length of the array.
 */
function array_push(arr, ...elements) {
    arr.push(...elements);
    return arr.length;
}
exports.array_push = array_push;
/**
 * Pick one or more random keys from an array.
 * @param arr - The input array.
 * @param num - Number of random keys to pick.
 * @returns An array containing the randomly picked keys.
 */
function array_rand(arr, num = 1) {
    if (num <= 0 || arr.length === 0)
        return [];
    // If num is greater than or equal to the length of the input array, return all keys in shuffled order
    if (num >= arr.length) {
        const shuffledIndices = Array.from({ length: arr.length }, (_, index) => index);
        for (let i = shuffledIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
        }
        return shuffledIndices;
    }
    // Generate unique random keys
    const availableIndices = Array.from({ length: arr.length }, (_, index) => index);
    const shuffledKeys = [];
    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        const selectedKey = availableIndices.splice(randomIndex, 1)[0];
        shuffledKeys.push(selectedKey);
    }
    return shuffledKeys;
}
exports.array_rand = array_rand;
/**
 * Iteratively reduce an array to a single value using a callback function.
 * @param arr - The input array.
 * @param callback - A callback function to apply to each element.
 * @param initial - (Optional) Initial value for the accumulator.
 * @returns The reduced value.
 */
function array_reduce(arr, callback, initial) {
    if (arr.length === 0 && initial === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    let accumulator = initial !== undefined ? initial : arr[0];
    const startIndex = initial !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
exports.array_reduce = array_reduce;
/**
 * Replace values in an array with values from another array.
 * @param inputArray - The input array to modify.
 * @param replacementArray - An array containing values to replace.
 * @returns A new array with replaced values.
 */
function array_replace(inputArray, replacementArray) {
    return Object.assign(Object.assign({}, inputArray), replacementArray);
}
exports.array_replace = array_replace;
/**
 * Reverses the order of elements in an array.
 * @param arr - The input array.
 * @param preserveKeys - (Optional) Whether to preserve keys.
 * @returns A new array with elements in reverse order.
 */
function array_reverse(arr, preserveKeys = false) {
    const reversedArray = arr.reverse();
    return preserveKeys ? reversedArray : Object.values(reversedArray);
}
exports.array_reverse = array_reverse;
/**
 * Searches for a value in an array and returns the corresponding key if found.
 * @param needle - The value to search for.
 * @param haystack - The input array.
 * @param strict - (Optional) Whether to use strict comparison.
 * @returns The key corresponding to the value, or `null` if not found.
 */
function array_search(needle, haystack, strict = false) {
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
exports.array_search = array_search;
/**
 * Remove and return the first element from an array.
 * @param arr - The input array.
 * @returns The removed element.
 */
function array_shift(arr) {
    return arr.shift();
}
exports.array_shift = array_shift;
/**
 * Extract a portion of an array.
 * @param arr - The input array.
 * @param offset - The starting index.
 * @param length - (Optional) The length of the slice.
 * @returns A new array containing the extracted elements.
 */
function array_slice(arr, offset, length) {
    if (length === 0) {
        return [];
    }
    const endIndex = length !== undefined ? offset + length : undefined;
    if (length !== undefined && length < 0) {
        return arr.slice(offset);
    }
    return arr.slice(offset, endIndex);
}
exports.array_slice = array_slice;
