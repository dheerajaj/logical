// Question 1:Create a function that takes the age in years and returns the age in days.

// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.

// Question 2 : Create a function that takes a numbers(step) as an argument & returns the number
//              of mathstick in that step
// step 1 : 6 matchstick  step 2: 11 matchstick step 3 : 16 matchstick and so on

function matchHouse(step) {
  if (step === 0) {
    return 0;
  } else {
    return step * 6 - (step - 1);
  }
}

console.log(matchHouse(6)); // 31 matchstick

// Question 3 : Create a Function that calculate the number diffrent square in an n*n square grid
//  if n=0 -> square is 0
//  if n= 1 -> square 1+0 =1
// if n=2 -> square 2*2+1 = 5 and so on.....

function numSquare(n) {
  if (n <= 0) {
    return 0;
  }
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

// const n=3
console.log(numSquare(3));
//n =3 -> square (3*(3+1)*(2*3+1))/6   -> square = 14

// Question 4 : Implement a simple shopping cart system with features to add items,
// remove items and calculate the total price. Use objects to represent items,
//  including properties for the item name, price and quantity. Implement features to add items to the cart,
//  remove items and calculate the total cost.

class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  addItem(itemName, price, quantity = 1) {
    const newItem = {
      itemName: itemName,
      price: price,
      quantity: quantity,
    };

    this.cart.push(newItem);
  }

  removeItem(itemName) {
    this.cart = this.cart.filter((item) => item.itemName !== itemName);
  }

  calculateTotal() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}

const myCart = new ShoppingCart();

myCart.addItem("Apples", 2.5, 3);
myCart.addItem("Bananas", 1.5, 2);
myCart.addItem("Oranges", 3.0, 1);

console.log("Current Cart:", myCart.cart);

myCart.removeItem("Bananas");

console.log("Updated Cart:", myCart.cart);

const totalCost = myCart.calculateTotal();
console.log("Total Cost:", totalCost);

//  Question 5:- Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canBeNested(arr1, arr2) {
  const minArr1 = Math.min(...arr1);
  const maxArr1 = Math.max(...arr1);
  const minArr2 = Math.min(...arr2);
  const maxArr2 = Math.max(...arr2);

  return minArr1 > minArr2 && maxArr1 < maxArr2;
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [0, 1, 2, 3, 4];
const array3 = [4, 5, 6];

console.log(canBeNested(array1, array2)); // Output: true
console.log(canBeNested(array1, array3)); // Output: false

//Question : 6 You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

// Create a function that returns whether the first array is slightly superior to that of the second.

// Examples
// isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// // The pair of items at each index are compared in turn.
// // 1 from the first array is the same as 1 from the second array.
// // 2 is the same as 2.
// // However, 4 is greater than 3, so first array is superior.

// isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

// isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

// isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

// isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false

function isFirstSuperior(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      return true;
    } else if (arr1[i] < arr2[i]) {
      return false;
    }
  }
  return false;
}

// Examples
console.log(isFirstSuperior([1, 2, 4], [1, 2, 3])); // Output: true
console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])); // Output: true
console.log(
  isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])
); // Output: true
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])); // Output: false
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])); // Output: false

// Question 7 : Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

function minMax(arr) {
  if (arr.length === 0) {
    return []; // Handle empty array case
  }

  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  return [minValue, maxValue];
}

// Examples
console.log(minMax([1, 2, 3, 4, 5])); // Output: [1, 5]
console.log(minMax([2334454, 5])); // Output: [5, 2334454]
console.log(minMax([1])); // Output: [1, 1]
console.log(minMax([])); // Output: []

// Question 8 :Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

function largestSwap(num) {
  // Extract digits
  const digit1 = Math.floor(num / 10);
  const digit2 = num % 10;

  // Compare original number with its swapped version
  return num >= digit2 * 10 + digit1;
}

// Examples
console.log(largestSwap(27)); // Output: false
console.log(largestSwap(43)); // Output: true

// Question 9 : Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

var expect = function (val) {
  return {
    toBe: function (otherVal) {
      if (val !== otherVal) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (otherVal) {
      if (val === otherVal) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// Question 10 : Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

var map = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};

// Example 1
const arr1 = [1, 2, 3];
const plusOne = function (n) {
  return n + 1;
};
const newArray1 = map(arr1, plusOne);
console.log(newArray1); // Output: [2, 3, 4]

// Example 2
const arr2 = [1, 2, 3];
const plusI = function (n, i) {
  return n + i;
};
const newArray2 = map(arr2, plusI);
console.log(newArray2); // Output: [1, 3, 5]

// Example 3
const arr3 = [10, 20, 30];
const constant = function () {
  return 42;
};
const newArray3 = map(arr3, constant);
console.log(newArray3); // Output: [42, 42, 42]

// Question 11:Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:arr[i] - number from the arr , i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// Example 2:

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0
// Example 3:

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out


var filter = function(arr, fn) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
          filteredArr.push(arr[i]);
      }
  }

  return filteredArr;
};

// Example usage
const arr = [1, 2, 3, 4, 5];
const isEven = function(n) { return n % 2 === 0; }
const filteredArray = filter(arr, isEven);
console.log(filteredArray); // Output: [2, 4]

// Question 12: Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

var once = function(fn) {
  let called = false;
  let result;

  return function(...args) {
      if (!called) {
          called = true;
          result = fn(...args);
          return result;
      } else {
          return undefined;
      }
  };
};

// Example 1
const addNumbers = (a, b, c) => (a + b + c);
const onceAddNumbers = once(addNumbers);

console.log(onceAddNumbers(1, 2, 3)); // Output: 6
console.log(onceAddNumbers(2, 3, 6)); // Output: undefined

// Example 2
const multiplyNumbers = (a, b, c) => (a * b * c);
const onceMultiplyNumbers = once(multiplyNumbers);

console.log(onceMultiplyNumbers(5, 7, 4)); // Output: 140
console.log(onceMultiplyNumbers(2, 3, 6)); // Output: undefined
console.log(onceMultiplyNumbers(4, 6, 8)); // Output: undefined


// Question 13: Given a function fn, return a memoized version of that function.A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial. sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise. factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

function memoize(fn) {
  const cache = {};

  return function(...args) {
      const key = JSON.stringify(args);

      if (cache[key] === undefined) {
          cache[key] = fn(...args);
      }

      return cache[key];
  };
}

// Example usage with sum
const sum = memoize((a, b) => a + b);

console.log(sum(2, 3)); // Output: 5
console.log(sum(2, 3)); // Output: 5 (result is retrieved from the cache)

// Example usage with fib
const fib = memoize(function(n) {
  return (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);
});

console.log(fib(4)); // Output: 5
console.log(fib(4)); // Output: 5 (result is retrieved from the cache)

// Example usage with factorial
const factorial = memoize(function(n) {
  return (n <= 1) ? 1 : factorial(n - 1) * n;
});

console.log(factorial(5)); // Output: 120
console.log(factorial(5)); // Output: 120 (result is retrieved from the cache)

Question 14 : 