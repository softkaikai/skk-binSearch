# skk-binSearch
<br />
[![Build Status](https://travis-ci.org/softkaikai/skk-binSearch.svg?branch=master)](https://travis-ci.org/softkaikai/skk-binSearch)
[![npm version](https://badge.fury.io/js/skk-binsearch.svg)](https://badge.fury.io/js/skk-binsearch)
A small module named binSearch to find a specified data from a sorted Array.
## Example
``` javascript
  npm install --save skk-binSearch
```
``` javascript
  var binSearch = require('binSearch');

  var sortedArr = [1,3,6,7,12,54,67,123];

  // If not find specified data from arr, return null
  binSearch(sortedArr, 10); // null
  // If find specified data, return a array
  binSearch(sortedArr, 6);
  // [0:10, index:2, input:[1,3,6,7,12,54,67,123], count:2]
```
