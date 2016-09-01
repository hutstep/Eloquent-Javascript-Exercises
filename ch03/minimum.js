/*
Minimum

The previous chapter introduced the standard function Math.min that returns its
smallest argument. We can do that ourselves now. Write a function min that takes
two arguments and returns their minimum.
*/

function minimum(num1, num2) {
  if (isNaN(num1) || isNaN(num2))
    return 'Only numbers are allowed!';
  else
    return num1 <= num2 ? num1 : num2;
}
console.log(minimum(12, 6)); // 6

console.log(minimum(14.1, 9.53)); // 9.53

console.log((minimum('Hello', 10))); // Only numbers are allowed!
