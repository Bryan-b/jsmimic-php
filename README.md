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

# Usage 📖

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

| Function | Description | 
| --- | --- |
| array_change_key_case |  Changes all keys in an array to lowercase or uppercase. |
| array_chunk |  Split an array into chunks. |
| array_column |  Return the values from a single column in the input array. |
| array_combine |  Creates an array by using one array for keys and another for its values. |
| array_count_values |  Counts all the values of an array. |
| array_diff_assoc |  Computes the difference of arrays with additional index check. |
| array_diff_key |  Computes the difference of arrays using keys for comparison. |
| array_diff_uassoc |  Computes the difference of arrays with additional index check which is performed by a user supplied callback function. |
| array_diff_ukey |  Computes the difference of arrays using a callback function on the keys for comparison. |
| array_diff |  Computes the difference of arrays. |
| array_fill_keys |  Fill an array with values, specifying keys. |
| array_fill |  Fill an array with values. |
| array_filter |  Filters elements of an array using a callback function. |
| array_flip |  Exchanges all keys with their associated values in an array. |
| array_intersect_assoc |  Computes the intersection of arrays with additional index check. |
| array_intersect_key |  Computes the intersection of arrays using keys for comparison. |
| array_intersect_uassoc |  Computes the intersection of arrays with additional index check, compares indexes by a callback function. |
| array_intersect_ukey |  Computes the intersection of arrays using a callback function on the keys for comparison. |
| array_intersect |  Computes the intersection of arrays. |
| array_is_list |  Checks if the given array is a list. |
| array_key_exists |  Checks if the given key or index exists in the array. |
| array_key_first |  Gets the first key of an array. |
| array_key_last |  Gets the last key of an array. |
| array_keys |  Return all the keys or a subset of the keys of an array. |
| array_map |  Applies the callback to the elements of the given arrays. |
| array_merge |  Merge one or more arrays. |
| array_merge_recursive |  Merge two or more arrays recursively. |
| array_pad |  Pad array to the specified length with a value. |
| array_product | Calculate the product of values in an array. |
| array_push |  Push one or more elements onto the end of array. |
| array_rand |  Pick one or more random keys out of an array. |
| array_reduce |  Iteratively reduce the array to a single value using a callback function. |
| array_replace | Replaces elements from passed arrays into the first array. |
| array_reverse |  Return an array with elements in reverse order. |
| array_search |  Searches the array for a given value and returns the first corresponding key if successful. |
| array_shift |  Shift an element off the beginning of array. |
| array_slice |  Extract a slice of the array. |
| array_splice |  Remove a portion of the array and replace it with something else. |
| array_sum |  Calculate the sum of values in an array. |
| array_udiff_assoc |  Computes the difference of arrays with additional index check, compares data by a callback function. |
| array_udiff_uassoc |  Computes the difference of arrays with additional index check, compares data and indexes by a callback function. |
| array_udiff |  Computes the difference of arrays by using a callback function for data comparison. |
| array_uintersect_assoc |  Computes the intersection of arrays with additional index check, compares data by a callback function. |
| array_uintersect_uassoc |  Computes the intersection of arrays with additional index check, compares data and indexes by separate callback functions. |
| array_uintersect |  Computes the intersection of arrays, compares data by a callback function. |
| array_unique |  Removes duplicate values from an array. |
| array_unshift |  Prepend one or more elements to the beginning of an array. |
| array_values |  Return all the values of an array. |
| array_walk_recursive |  Apply a user function recursively to every member of an array. |
| array_walk |  Apply a user supplied function to every member of an array. |
| array |  Create an array. |
| arsort |  Sort an array in reverse order and maintain index association. |
| asort |  Sort an array and maintain index association. |
| compact |  Create array containing variables and their values. |
| count |  Count all elements in an array, or something in an object. |
| current |  Return the current element in an array. |
| each |  Return the current key and value pair from an array and advance the array cursor. |
| end |  Set the internal pointer of an array to its last element. |
| in_array |  Checks if a value exists in an array. |
| key_exists |  Alias of array_key_exists. |
| key |  Fetch a key from an array. |
| krsort |  Sort an array by key in reverse order. |
| ksort |  Sort an array by key. |
| list |  Assign variables as if they were an array. |
| natcasesort |  Sort an array using a case insensitive "natural order" algorithm. |
| natsort |  Sort an array using a "natural order" algorithm. |
| next |  Advance the internal array pointer of an array. |
| range |  Create an array containing a range of elements. |
| reset |  Set the internal pointer of an array to its first element. |
| rsort |  Sort an array in reverse order. |
| shuffle |  Shuffle an array. |
| sizeof |  Alias of count. |
| sort |  Sort an array. |
| uasort |  Sort an array with a user-defined comparison function and maintain index association. |
| uksort |  Sort an array by keys using a user-defined comparison function. |
| usort |  Sort an array by values using a user-defined comparison function. |


# Roadmap 🗺️

- Add more functions from the PHP array functions
- Add more functions from other PHP functions for other data types like strings, integers, etc.
- Add more tests. 🧪
- Add more documentation. 📚
- Add more examples. 📝

# Contributing 🤝

Contributions, issues and feature requests are welcome! 😃

Feel free to check [issues page](https://github.com/Bryan-b/jsmimic-php/issues "issues page").

<!-- rules on how to contribute to the project -->

<!-- # How to contribute 🤝

To contribute to this project:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
    Use `FIX:` for bug fixes or `FEATURE:` for new features (new functions implementation etc.) at the start of your commit message.
    For example, 
    `FIX: array_chunk function not working as expected`
    or
    `FEATURE: Added array_diff function`.
4. Push to the original branch you created: `git push origin <project_name>/<location>`
5. Create the pull request. -->


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
