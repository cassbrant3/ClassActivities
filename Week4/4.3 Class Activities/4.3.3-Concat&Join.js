const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
// print the new, merged array
const arrThree = arrOne.concat(arrTwo, 4, "e");
console.log(arrThree);
// join the merged array and print the result
const joinArrThree = arrThree.join(", ");
console.log(joinArrThree);
