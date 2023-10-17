# What is jsmimic-php? 🤔

`jsmimic-php` is a JS library that allows you to mimic PHP functions in JavaScript. This library is useful for people who are familiar with PHP and want to use JavaScript but don't have the time to learn the JavaScript equivalents of PHP functions.


# Installation 🛠️

To install jsmimic-php:

#### using npm
```bash
npm install jsmimic-php
```

#### using yarn

```bash
yarn add jsmimic-php
```

## Usage 📖

<!-- note -->
> #
> **Note:** Multi-dimensional arrays in php are represented as objects in JavaScript. 
> 
> Example: 
>```php
> array(1, 2, array(3, 4)) // in php
> ```
> is the same thing as 👇🏽
> ```js
> [1, 2, {0: 3, 1: 4}] // in JS.
> ```
>
> and
>
> ```php
> array('name' => 'John Doe', 'age' => 20) // in php
> ```
> is the same thing as 👇🏽
> ```js
> {name: 'John Doe', age: 20} // in JS.
> ```
> 
> This is because JavaScript arrays can only have numeric keys, while PHP arrays can have both numeric and string keys. 
> 
> In more simple terms, JavaScript arrays can only have one dimension, while PHP arrays can have multiple dimensions, by multiple dimensions, I mean arrays within arrays or nested arrays.
> 
> but JavaScript arrays can only have arrays within objects, not arrays within arrays. 
> 
> Not clear enough? 🤔
>
> if you want to use multi-dimensional arrays in JavaScript, you can use objects instead and if you want to use objects in JavaScript, you can also use maps instead.
>
> Example:
> ``` php
> array('name' => 'John Doe', 'age' => 20) // in php 
> ```
>
> is the same thing as 👇🏽
>
> ```js
> new Map([['name', 'John Doe'], ['age', 20]]) // in JS.
> // or
> {name: 'John Doe', age: 20} // in JS.
> ```
> #

pheew! 😅, that was a lot to take in, but I hope you understand now. 😊
So let's officially get started. 🚀 

To use jsmimic-php, you must first import it into your project:

```js
const jsmp = require('jsmimic-php');

// or

import jsmp from 'jsmimic-php';

```

or you can import the functions from the library individually:

```js
const { array_chunk, array_combine, array_change_key_case } = require('jsmimic-php');

// or

import { array_chunk, array_combine, array_change_key_case } from 'jsmimic-php';

```

Then, you can use the functions in jsmimic-php:
just like in PHP, but this time in JavaScript. 😎

```js

// Example 1: Using the `array_combine` function

const keys = ['name', 'age'];
const values = ['John Doe', 20];

const arr = array_combine(keys, values); // { name: 'John Doe', age: 20 }




// Example 2: Using the `array_change_key_case` function

const arr = {
    name: 'John Doe',
    age: 20
};

const newArr = array_change_key_case(arr, 'CASE_UPPER'); // { NAME: 'John Doe', AGE: 20 }


// Example 3: Using the `array_chunk` function

const arr = [1, 2, 3, 4, 5];

const newArr = array_chunk(arr, 2); // [[1, 2], [3, 4], [5]]

```

# Documentation 📚

#### Available Array functions:

| Function | Description | Example |
| --- | --- | --- |
| array_change_key_case |  Changes all keys in an array to lowercase or uppercase. | [Example](#1-array_change_key_case) |
| array_chunk |  Split an array into chunks. | [Example](#2-array_chunk) |
| array_column |  Return the values from a single column in the input array. | [Example](#3-array_column) |
| array_combine |  Creates an array by using one array for keys and another for its values. | [Example](#4-array_combine) |
| array_count_values |  Counts all the values of an array. | [Example](#5-array_count_values) |
| array_diff_assoc |  Computes the difference of arrays with additional index check. | [Example](#6-array_diff_assoc) |
| array_diff_key |  Computes the difference of arrays using keys for comparison. | [Example](#7-array_diff_key) |
| array_diff_uassoc |  Computes the difference of arrays with additional index check which is performed by a user supplied callback function. | [Example](#8-array_diff_uassoc) |
| array_diff_ukey |  Computes the difference of arrays using a callback function on the keys for comparison. | [Example](#9-array_diff_ukey) |
| array_diff |  Computes the difference of arrays. | [Example](#10-array_diff) |
| array_fill_keys |  Fill an array with values, specifying keys. | [Example](#11-array_fill_keys) |
| array_fill |  Fill an array with values. | [Example](#12-array_fill) |
| array_filter |  Filters elements of an array using a callback function. | [Example](#13-array_filter) |
| array_flip |  Exchanges all keys with their associated values in an array. | [Example](#14-array_flip) |
| array_intersect_assoc |  Computes the intersection of arrays with additional index check. | [Example](#15-array_intersect_assoc) |
| array_intersect_key |  Computes the intersection of arrays using keys for comparison. | [Example](#16-array_intersect_key) |
| array_intersect_uassoc |  Computes the intersection of arrays with additional index check, compares indexes by a callback function. | [Example](#17-array_intersect_uassoc) |
| array_intersect_ukey |  Computes the intersection of arrays using a callback function on the keys for comparison. | [Example](#18-array_intersect_ukey) |
| array_intersect |  Computes the intersection of arrays. | [Example](#19-array_intersect) |
| array_is_list |  Checks if the given array is a list. | [Example](#20-array_is_list) |
| array_key_exists |  Checks if the given key or index exists in the array. | [Example](#21-array_key_exists) |
| array_key_first |  Gets the first key of an array. | [Example](#22-array_key_first) |
| array_key_last |  Gets the last key of an array. | [Example](#23-array_key_last) |
| array_keys |  Return all the keys or a subset of the keys of an array. | [Example](#24-array_keys) |
| array_map |  Applies the callback to the elements of the given arrays. | [Example](#25-array_map) |
| array_merge |  Merge one or more arrays. | [Example](#26-array_merge) |
| array_merge_recursive |  Merge two or more arrays recursively. | [Example](#27-array_merge_recursive) |
| array_multisort |  Sort multiple or multi-dimensional arrays. | [Example](#28-array_multisort) |
| array_pad |  Pad array to the specified length with a value. | [Example](#29-array_pad) |
| array_product | Calculate the product of values in an array. | [Example](#30-array_product) |
| array_push |  Push one or more elements onto the end of array. | [Example](#31-array_push) |
| array_rand |  Pick one or more random keys out of an array. | [Example](#32-array_rand) |
| array_reduce |  Iteratively reduce the array to a single value using a callback function. | [Example](#33-array_reduce) |
| array_replace | Replaces elements from passed arrays into the first array. | [Example](#34-array_replace) |
| array_reverse |  Return an array with elements in reverse order. | [Example](#35-array_reverse) |
| array_search |  Searches the array for a given value and returns the first corresponding key if successful. | [Example](#36-array_search) |
| array_shift |  Shift an element off the beginning of array. | [Example](#37-array_shift) |
| array_slice |  Extract a slice of the array. | [Example](#38-array_slice) |
| array_splice |  Remove a portion of the array and replace it with something else. | [Example](#39-array_splice) |
| array_sum |  Calculate the sum of values in an array. | [Example](#40-array_sum) |
| array_udiff_assoc |  Computes the difference of arrays with additional index check, compares data by a callback function. | [Example](#41-array_udiff_assoc) |
| array_udiff_uassoc |  Computes the difference of arrays with additional index check, compares data and indexes by a callback function. | [Example](#42-array_udiff_uassoc) |
| array_udiff |  Computes the difference of arrays by using a callback function for data comparison. | [Example](#43-array_udiff) |
| array_uintersect_assoc |  Computes the intersection of arrays with additional index check, compares data by a callback function. | [Example](#44-array_uintersect_assoc) |
| array_uintersect_uassoc |  Computes the intersection of arrays with additional index check, compares data and indexes by separate callback functions. | [Example](#45-array_uintersect_uassoc) |
| array_uintersect |  Computes the intersection of arrays, compares data by a callback function. | [Example](#46-array_uintersect) |
| array_unique |  Removes duplicate values from an array. | [Example](#47-array_unique) |
| array_unshift |  Prepend one or more elements to the beginning of an array. | [Example](#48-array_unshift) |
| array_values |  Return all the values of an array. | [Example](#49-array_values) |
| array_walk_recursive |  Apply a user function recursively to every member of an array. | [Example](#50-array_walk_recursive) |
| array_walk |  Apply a user supplied function to every member of an array. | [Example](#51-array_walk) |
| array |  Create an array. | [Example](#52-array) |
| arsort |  Sort an array in reverse order and maintain index association. | [Example](#53-arsort) |
| asort |  Sort an array and maintain index association. | [Example](#54-asort) |
| compact |  Create array containing variables and their values. | [Example](#55-compact) |
| count |  Count all elements in an array, or something in an object. | [Example](#56-count) |
| current |  Return the current element in an array. | [Example](#57-current) |
| each |  Return the current key and value pair from an array and advance the array cursor. | [Example](#58-each) |
| end |  Set the internal pointer of an array to its last element. | [Example](#59-end) |
| in_array |  Checks if a value exists in an array. | [Example](#60-in_array) |
| key_exists |  Alias of array_key_exists. | [Example](#61-key_exists) |
| key |  Fetch a key from an array. | [Example](#62-key) |
| krsort |  Sort an array by key in reverse order. | [Example](#63-krsort) |
| ksort |  Sort an array by key. | [Example](#64-ksort) |
| list |  Assign variables as if they were an array. | [Example](#65-list) |
| natcasesort |  Sort an array using a case insensitive "natural order" algorithm. | [Example](#66-natcasesort) |
| natsort |  Sort an array using a "natural order" algorithm. | [Example](#67-natsort) |
| next |  Advance the internal array pointer of an array. | [Example](#68-next) |
| range |  Create an array containing a range of elements. | [Example](#69-range) |
| reset |  Set the internal pointer of an array to its first element. | [Example](#70-reset) |
| rsort |  Sort an array in reverse order. | [Example](#71-rsort) |
| shuffle |  Shuffle an array. | [Example](#72-shuffle) |
| sizeof |  Alias of count. | [Example](#73-sizeof) |
| sort |  Sort an array. | [Example](#74-sort) |
| uasort |  Sort an array with a user-defined comparison function and maintain index association. | [Example](#75-uasort) |
| uksort |  Sort an array by keys using a user-defined comparison function. | [Example](#76-uksort) |
| usort |  Sort an array by values using a user-defined comparison function. | [Example](#77-usort) |


## Roadmap 🗺️

- Add more functions from the PHP array functions
- Add more functions from other PHP functions for other data types like strings, integers, etc.
- Add more tests. 🧪
- Add more documentation. 📚
- Add more examples. 📝


<!-- give at least 3 examples for each function in the documentation. -->

## Examples 📝

### 1. array_change_key_case

###### Description:
The array_change_key_case function is used to change the case of all keys in an array to either uppercase or lowercase.

###### Parameters:
- array (Object): The input array whose keys you want to transform.
- case (String): The case transformation option. Use 'CASE_UPPER' to change keys to uppercase or 'CASE_LOWER' to change keys to lowercase.

###### Usage Example:

```js

const originalArray = {
    name: 'John Doe',
    age: 20
};

// Change keys to uppercase
const newArrayUpperCase = array_change_key_case(originalArray, 'CASE_UPPER'); // { NAME: 'John Doe', AGE: 20 }

// Change keys to lowercase
const newArrayLowerCase = array_change_key_case(originalArray, 'CASE_LOWER'); // { name: 'John Doe', age: 20 }

```

###### Explanation:

The array_change_key_case function takes two parameters: the input array and the desired case transformation ('CASE_UPPER' for uppercase, 'CASE_LOWER' for lowercase).
It transforms the keys of the array to the specified case while preserving the original values.


### 2. array_chunk

###### Description:
The array_chunk function is used to split an array into smaller chunks, each containing a specified number of elements.

###### Parameters:
- array (Array): The input array to be chunked.
- size (Number): The size of each chunk.
- preserveKeys (Boolean): (Optional) If set to true, the function will preserve the original keys. Default is false.


Usage Example:

```js

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = array_chunk(originalArray, 3); // [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]


// works with strings too
const textArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const newTextArr = array_chunk(textArray, 4); // [['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h'], ['i', 'j']]

```

###### Explanation:

The array_chunk function takes two parameters: the input array and the size of each chunk.
It divides the original array into smaller arrays, each containing the specified number of elements (except the last chunk, which may have fewer elements if there are not enough remaining).
The resulting array is a multidimensional array where each element is a chunk of the original array.
The array_chunk function is useful when you want to split an array into smaller chunks.

### 3. array_combine

This function creates an array by using one array for keys and another for its values.

###### Parameters:
- keys (Array): Array of keys to be used. Illegal values for key will be converted to string.
- values (Array): Array of values to be used.
- preserveKeys (Boolean): (Optional) If set to true, the function will preserve the original keys. Default is false.

```js

const keys = ['name', 'age'];

const values = ['John Doe', 20];

const arr = array_combine(keys, values); // { name: 'John Doe', age: 20 }

```

###### Explanation:

The array_combine function takes two parameters: the array of keys and the array of values.
It creates an array by using the first array for keys and the second array for values.
The resulting array is an object where each key is a key from the first array and each value is a value from the second array.
The array_combine function is useful when you want to create an associative array from two arrays.

### 4. array_count_values

This function counts all the values of an array.

###### Parameters:
- array (Array): The array of values to count.

```js

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const newArr = array_count_values(arr); // { '1': 2, '2': 2, '3': 2, '4': 2, '5': 2 }

```

###### Explanation: 

The array_count_values function takes one parameter: the array of values to count.
It counts all the values of the array and returns an object where each key is a value from the array and each value is the number of times that value appears in the array.
The array_count_values function is useful when you want to count the number of occurrences of each value in an array.

### 5. array_diff_assoc

This function computes the difference of arrays in array1 but not in array2 with additional index check.

###### Parameters:
- array1 (Array): The array to compare from.
- array2 (Array): An array to compare against.

```js

const arr1 = [1, 2, 3, 4, 5, 8, 10, 11, 12];

const arr2 = [1, 2, 3, 4, 5, 6];

const newArr = array_diff_assoc(arr1, arr2); // [8, 10, 11, 12]

```

###### Explanation:

The array_diff_assoc function takes two parameters: the array to compare from and the array to compare against.
It computes the difference of arrays in array1 but not in array2 with additional index check.
The resulting array is an array of values from array1 that are not in array2. 
The array_diff_assoc function is useful when you want to find the difference between two arrays with additional index check.

### 6. array_diff_key

This function computes the difference of arrays that is in array1 but not in array2 using keys for comparison.

###### Parameters:
- array1 (Array): The array to compare from.
- array2 (Array): An array to compare against.

```js

const array1 = { key1: 'value1', key2: 'value2', key3: 'value3' };

const array2 = { key2: 'value2', key4: 'value4', key5: 'value5' };

const newArr = array_diff_key(array1, array2); // { key1: 'value1', key3: 'value3' }

```

###### Explanation:

The array_diff_key function takes two parameters: the array to compare from and the array to compare against.
It computes the difference of arrays that is in array1 but not in array2 using keys for comparison.
The resulting array is an object of values from array1 that are not in array2.
The array_diff_key function is useful when you want to find the difference between two arrays using keys for comparison.



### 7. array_diff_uassoc

This function computes the difference of arrays with additional index check which is performed by a user supplied callback function.

###### Parameters:
- array1 (Array): The array to compare from.
- array2 (Array): An array to compare against.
- callback (Function): The callback function to use for comparison.

```js

const arr1 = [1, 2, 3, 4, 5, 8, 10, 11, 12];

const arr2 = [1, 2, 3, 4, 5, 6];

const newArr = array_diff_uassoc(arr1, arr2, (a, b) => a - b); // [8, 10, 11, 12] sorted in ascending order

```

###### Explanation:

The array_diff_uassoc function takes three parameters: the array to compare from, the array to compare against and the callback function to use for comparison.
It computes the difference of arrays with additional index check which is performed by a user supplied callback function.
The resulting array is an array of values from array1 that are not in array2.
The array_diff_uassoc function is useful when you want to find the difference between two arrays with additional index check which is performed by a user supplied callback function.

### 8. array_diff_ukey

This function computes the difference of arrays that is in array1 but not in array2 using a callback function on the keys for comparison.

###### Parameters:
- array1 (Array): The array to compare from.
- array2 (Array): An array to compare against.
- callback (Function): The callback function to use for comparison.

```js

const dataset1 = { 'a': 'apple', 'b': 'banana', 'c': 'cherry' };

const dataset2 = { 'b': 'banana', 'd': 'date', 'e': 'elderberry' };

function customKeyCompare(a, b) {
  return a.toLowerCase() === b.toLowerCase() ? 0 : -1;
}

const differentKeys = array_diff_ukey(dataset1, dataset2, customKeyCompare); // { 'a': 'apple', 'c': 'cherry' }

```

###### Explanation:

The array_diff_ukey function takes three parameters: the array to compare from, the array to compare against and the callback function to use for comparison.
It computes the difference of arrays that is in array1 but not in array2 using a callback function on the keys for comparison.
The resulting array is an object of values from array1 that are not in array2.
The array_diff_ukey function is useful when you want to find the difference between two arrays using a callback function on the keys for comparison.

### 9. array_diff

This function computes the difference of arrays.

###### Parameters:
- array1 (Array): The array to compare from.
- array2 (Array): An array to compare against.

```js

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [4, 5, 6, 7, 8];

const newArr = array_diff(arr1, arr2); // [1, 2, 3]

```

###### Explanation:

The array_diff function takes two parameters: the array to compare from and the array to compare against.
It computes the difference of arrays.
The resulting array is an array of values from array1 that are not in array2.
The array_diff function is useful when you want to find the difference between two arrays.

### 10. array_fill_keys

This function fills an array with values, specifying keys.

###### Parameters:
- keys (Array): Array of values that will be used as keys.
- value (Any): Value to use for filling.

```js

const arr = array_fill_keys(['foo', 5, 10, 'bar'], 'banana'); // { foo: 'banana', '5': 'banana', '10': 'banana', bar: 'banana' }

```

###### Explanation:

The array_fill_keys function takes two parameters: the array of keys and the value to use for filling.
It fills an array with values, specifying keys.
The resulting array is an object where each key is a key from the first array and each value is the value to use for filling.
The array_fill_keys function is useful when you want to fill an array with values, specifying keys.

### 11. array_fill

This function fills an array with values.

###### Parameters:
- startIndex (Number): The first index of the returned array.
- num (Number): Number of elements to insert.
- value (Any): Value to use for filling.

```js

const arr = array_fill(5, 6, 'banana'); // [ 'banana', 'banana', 'banana', 'banana', 'banana', 'banana' ]

const filledArray = array_fill(0, 5, 'default'); // [ 'default', 'default', 'default', 'default', 'default' ]

```

###### Explanation:

The array_fill function takes three parameters: the first index of the returned array, the number of elements to insert and the value to use for filling.
It fills an array with values.
The resulting array is an array of values from array1 that are not in array2.
The array_fill function is useful when you want to fill an array with values.

# Contributing 🤝

Contributions, issues and feature requests are welcome! 😃

Feel free to check [issues page](https://github.com/Bryan-b/jsmimic-php/issues "issues page").

<!-- rules on how to contribute to the project -->

### How to contribute 🤝

To contribute to this project:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. For commit message, use: 
    - `FIX: <your message>` for bug fixes or 
    - `FEATURE: <your message>` for new features (new functions implementation etc.) at the start of your commit message.
    
    For example, 
    `FIX: array_chunk function not working as expected`
    or
    `FEATURE: Added array_diff function`.
5. Push to the original branch you created: `git push origin <project_name>/<branch_name>`
6. Create the pull request. 


# Acknowledgments 🙏

- [PHP](https://www.php.net/ "PHP") for the inspiration.

# Author 👨‍💻

👤 **Bryan Ebeh**

- Github: [@Bryan-b](https://github.com/Bryan-b/jsmimic-php/issues "Bryan-b")
- Twitter: [@la_codist](https://twitter.com/la_codist "Bryan Ebeh")
- Linkedin: [Bryan Ebeh](https://www.linkedin.com/in/la-codist/ "Bryan Ebeh")
- Email: [barryb.ebeh@gmail.com](mailto: "barryb.ebeh@gmail.com")

# Show your support 🙌

Give a ⭐️ if this project helped you!


Made with ❤️ by [Bryan](https://github.com/Bryan-b "Bryan") 😊

# License 📝

This project is [MIT](https://github.com/Bryan-b/jsmimic-php/blob/main/LICENSE, "MIT") licensed.
