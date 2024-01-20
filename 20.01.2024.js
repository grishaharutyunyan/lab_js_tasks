// 1.Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

   // 1. Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        count++;
      }
    }
    return count;
  }
  

  console.log(countTrue([true, false, false, true, false])); 
  console.log(countTrue([false, false, false, false])); 
  console.log(countTrue([])); 
   
//   function countTrue(arr) {
//     return arr.filter(element => element === true).length;
//   }
  
  
//   console.log(countTrue([true, false, true, true, false ,true])); 
//   console.log(countTrue([false, false, false, false,true])); 
//   console.log(countTrue([])); 

// 2. Create a function named getType that determines the type of a given value in JavaScript. This function should handle all JavaScript primitive types, arrays, and objects. The implementation should use an object to map types to their respective logic for type determination, avoiding the use of traditional if or switch statements.
// console.log(getType([1, 2, 3])); // Should return "array"

function getType(value) {
    const types = {
      'undefined': 'undefined',
      'number': 'number',
      'boolean': 'boolean',
      'string': 'string',
      'symbol': 'symbol',
      'function': 'function',
      'object': value === null ? 'null' : (Array.isArray(value) ? 'array' : 'object')
    };
  
    const valueType = typeof value;
    return types[valueType];
  }
  

  console.log(getType([1, 2, 3])); 
  console.log(getType(42)); 
  console.log(getType("Hello")); 
  console.log(getType(true)); 
  console.log(getType(null)); 
  console.log(getType(undefined)); 
  console.log(getType({ key: 'value' })); 
  console.log(getType(function() {})); 
  




// 3. A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it’s a repdigit or not.
// isRepdigit(66) ➞ true
// isRepdigit(0) ➞ true
// isRepdigit(-11) ➞ false

function isRepdigit(number) {
    if (number < 0) {
      return false; 
    }
  
    const lastDigit = number % 10;
  
    while (number > 0) {
      if (number % 10 !== lastDigit) {
        return false;
      }
      number = Math.floor(number / 10);
    }
  
    return true;
  }
  

  console.log(isRepdigit(66));   
  console.log(isRepdigit(0));    
  console.log(isRepdigit(-11));  
  console.log(isRepdigit(111));  
  console.log(isRepdigit(123));  
  

// 4. Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
 
function keysAndValues(obj) {
    const keys = [];
    const values = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
        values.push(obj[key]);
      }
    }
  
    keys.sort();
  
    return [keys, values];
  }
  

  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
 
  



// 5. Create a function that takes an array of numbers and returns the second largest number.
// secondLargest([10, 40, 30, 20, 50]) ➞ 40
// secondLargest([25, 143, 89, 13, 105]) ➞ 105
// secondLargest([54, 23, 11, 17, 10]) ➞ 23

function secondLargest(array) {
    if (array.length < 2) {
      return "Array should have at least two elements.";
    }
  
    const sortedArray = array.slice().sort((a, b) => b - a);
    return sortedArray[1];
  }
  
  
  console.log(secondLargest([10, 40, 30, 20, 50]));   
  console.log(secondLargest([25, 143, 89, 13, 105]));  
  console.log(secondLargest([54, 23, 11, 17, 10]));    

// 6. Create a function that takes a number and returns an array with the digits of the number in reverse order.
// reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]
// reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]
// reverseArr(12345) ➞ [5, 4, 3, 2, 1]


function reverseArr(number) {
    const digits = [];
    
    while (number > 0) {
      digits.push(number % 10);
      number = Math.floor(number / 10);
    }
  
    return digits;
  }
  

  console.log(reverseArr(148597)); 
  console.log(reverseArr(623478));  
  console.log(reverseArr(12345));   
  