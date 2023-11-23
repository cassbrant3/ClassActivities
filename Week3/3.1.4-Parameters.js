// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function Parameters(param1, param2) {
  console.log(param1);
  console.log(param2);
  return param1 + param2;
}
// invoke the function and pass in two numbers
Parameters(1, 2);
// invoke the function and pass in more than two numbers
Parameters(1, 2, 3);
// invoke the function and pass in only one number
Parameters(1);
// change the function to set default values for the parameters
function changedParameters(param1 = 4, param2 = 3) {
  console.log(param1);
  console.log(param2);
}
// again, invoke the function and pass in only one number
changedParameters(1);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function RestOperator(param1, param2, ...myRestParam) {
  console.log(param1, param2);
  console.log(myRestParam);
}
// again, invoke the function and pass in more than two numbers
RestOperator(1, 2, 3, 4);
