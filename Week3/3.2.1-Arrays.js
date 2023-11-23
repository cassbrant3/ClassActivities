// create an Array using an Array literal
const names = ["Cassie", "Meg", "Andrea"];
// access the 1st item in the Array
console.log(names[0]);
// access the last item in the Array
console.log(names[2]);
// print the length of the Array
names.length;
// use the length property to access the last item in the Array
console.log(names[names.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
const otherNames = [];

for (let name of otherNames) {
  let output = name.toLowerCase();
  otherNames.push(output);
}
