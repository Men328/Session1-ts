"use strict";
let string = "banana";
string = Array.from(new Set(string.split(''))).join(" ");
console.log(string);
