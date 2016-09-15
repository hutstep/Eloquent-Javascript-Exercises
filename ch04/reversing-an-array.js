/*
Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument and
produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies the
array given as argument in order to reverse its elements. Neither may use the
standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous
chapter, which variant do you expect to be useful in more situations? Which one
is more efficient?
*/

function reverseArray(arr) {
  var revArr = [];
  for (var i = 0; i < arr.length; i++) {
    revArr.unshift(arr[i]);
  }
  return revArr;
}

function reverseArrayInPlace(arr) {
  function reverseArr(arr, leftPos, rightPos) {
    if (leftPos >= rightPos) return;
    var leftTemp = arr[leftPos];
    arr[leftPos] = arr[rightPos];
    arr[rightPos] = leftTemp;
    reverseArr(arr, leftPos + 1, rightPos - 1);
  }
  reverseArr(arr, 0, arr.length - 1);
}

console.log(reverseArray(["A", "B", "C"])); // ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // [5, 4, 3, 2, 1]
