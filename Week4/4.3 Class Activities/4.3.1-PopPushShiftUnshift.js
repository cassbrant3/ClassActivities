const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn1 = nums.pop();
console.log(popReturn1);
let popReturn2 = nums.pop();
console.log(popReturn2);
// remove each of the first two items with shift(), saving each item to a variable
let removeShift1 = nums.shift();
console.log(removeShift1);
let removeShift2 = nums.shift();
console.log(removeShift2);
// use push and unshift to add the variables back to the array in numerical order, 0-6
let pushReturn = nums.push(5, 6);
console.log(pushReturn);
let unshiftReturn = nums.unshift(0, 1);
console.log(unshiftReturn);
