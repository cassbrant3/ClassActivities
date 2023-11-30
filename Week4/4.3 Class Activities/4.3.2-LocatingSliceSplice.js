const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
//first a = 0
console.log(arr.indexOf("a"));
//first b = 2
console.log(arr.indexOf("b"));
//first c = 4
console.log(arr.indexOf("c"));
// find the last index of "a", "b", and "c"
console.log(arr.lastIndexOf("a")); //last a = 6
console.log(arr.lastIndexOf("b")); //last b = 8
console.log(arr.lastIndexOf("c")); //last c = 11
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
let firstIsLast = false;
while (!firstIsLast) {
  let firstA = arr.indexOf("a");
  let lastA = arr.lastIndexOf("a");

  firstIsLast = firstA === lastA;

  if (!firstIsLast) {
    arr.splice(lastA, 1);
  }
  arr.splice(lastA, 1);

  console.log(arr.join(", "));
}
