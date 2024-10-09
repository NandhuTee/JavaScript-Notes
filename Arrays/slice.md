# slice() Method in JavaScript

## Overview
The `slice()` method in JavaScript is used to extract a portion of an array or string without modifying the original array or string. It returns a shallow copy of a portion of the array (or string) into a new array (or substring), selected from the start index to the end index (end index not included). The original array or string remains unchanged.

## Syntax
```javascript
array.slice(start, end);
string.slice(start, end);

| **Feature**            | **Description**                                                  |
|------------------------|------------------------------------------------------------------|
| **Method**             | `slice(start, end)`                                              |
| **Return Type**        | New array (for arrays) or substring (for strings)                |
| **Start Parameter**    | Start index (inclusive, default is 0)                            |
| **End Parameter**      | End index (exclusive, default is array/string length)            |
| **Negative Indices**   | If negative, counts from the end of the array/string             |
| **Effect on Original** | Does not modify the original array or string                     |
| **Shallow Copy**       | Creates a shallow copy (references are copied, not objects)      |
| **Empty Output**       | Returns an empty array if `start >= length` or `start >= end`    |
| **Copying**            | Can be used to make a shallow copy of an array or string         |
