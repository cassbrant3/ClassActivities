// create five variables and assign them values
let string = "Oog";
let number = 23;
let boolean = false;
let empty = null;
let variable; 

// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof variable);
console.log(typeof empty);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let template = `"Oog" is "false" `;
// reassign the value of the variable that references "null"
variable = "boo";
// print the value and its type
console.log(variable);
// print a variable that causes a ReferenceError
console.log(error);
// alter the previous line to no longer cause a ReferenceError
let error = "hurray";