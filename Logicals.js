// Question 1 : Create a function that takes a numbers(step) as an argument & returns the number 
//              of mathstick in that step
// step 1 : 6 matchstick  step 2: 11 matchstick step 3 : 16 matchstick and so on

function matchHouse(step){
  if (step === 0){
      return 0;
  }else{
      return (step*6)-(step -1);
  }
}

console.log(matchHouse(6)); // 31 matchstick


// Question 2 : Create a Function that calculate the number diffrent square in an n*n square grid
//  if n=0 -> square is 0
//  if n= 1 -> square 1+0 =1
// if n=2 -> square 2*2+1 = 5 and so on.....

function numSquare(n){
  if(n<=0){
      return 0;
  }
  return (n*(n+1)*(2*n+1))/6;
}

// const n=3
console.log(numSquare(3));  
//n =3 -> square (3*(3+1)*(2*3+1))/6   -> square = 14


// Question 3 : Implement a simple shopping cart system with features to add items, 
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
      quantity: quantity
    };

    this.cart.push(newItem);
  }

  removeItem(itemName) {
    this.cart = this.cart.filter(item => item.itemName !== itemName);
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
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


//  Question 4:- Create a function that returns true if the first array can be nested inside the second and false otherwise.

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

console.log(canBeNested(array1, array2));  // Output: true
console.log(canBeNested(array1, array3));  // Output: false
