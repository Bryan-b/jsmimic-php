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

To use jsmimic-php, you must first import it into your project:

```js
const jsmp = require('jsmimic-php');

// or

import jsmp from 'jsmimic-php';

```

Then, you can use the functions in jsmimic-php:
just like in PHP, but this time in JavaScript. 😎

```js

// Example 1: Using the `array_combine` function

const keys = ['name', 'age'];
const values = ['John Doe', 20];

const arr = jsmp.array_combine(keys, values); // { name: 'John Doe', age: 20 }


// Example 2: Using the `array_change_key_case` function

const arr = {
    name: 'John Doe',
    age: 20
};

const newArr = jsmp.array_change_key_case(arr, 'CASE_UPPER'); // { NAME: 'John Doe', AGE: 20 }


// Example 3: Using the `array_chunk` function

const arr = [1, 2, 3, 4, 5];

const newArr = jsmp.array_chunk(arr, 2); // [[1, 2], [3, 4], [5]]

```

# Documentation 📚

###Available functions in jsmimic-php

##### Array functions:

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


# Roadmap 🗺️

- Add more functions from the PHP array functions.
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
