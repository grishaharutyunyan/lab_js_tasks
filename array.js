// 1.Given an array of objects, group them by a specific property.
//  For instance, given an array of people objects, group them by ‘age’.
// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 }
// ];

// console.log(groupByProperty(people, 'age'));
// // Output: { '25': [ { name: 'Bob', age: 25 } ], '30': [ { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 30 } ] }


function groupByProperty(array, property) {
  const grouped = {};
  
  array.forEach(obj => {
    const key = obj[property];
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(obj);
  });

  return grouped;
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

console.log(groupByProperty(people, 'age'));


// // 2. Create a function that deeply flattens an array. 
// The function should be able to handle nested arrays of any depth.
// const nestedArray = [1, [2, [3, [4]], 5]];
// console.log(deepFlatten(nestedArray));
// // Output: [1, 2, 3, 4, 5]

function deepFlatten(array) {
  return array.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? deepFlatten(val) : val);
  }, []);
}

const nestedArray = [1, [2, [3, [4]], 5]];
console.log(deepFlatten(nestedArray));

// 3. Write a custom implementation of 
// the Array.prototype.map function without using the native .map() method.
//  const numbers = [1, 2, 3];
// const doubled = customMap(numbers, num => num * 2);
// console.log(doubled);
// // // Output: [2, 4, 6]


function customMap(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
  }
  return result;
}

const numbers = [1, 2, 3];
const doubled = customMap(numbers);
console.log(doubled);


// 4. Given two arrays, combine them into one array without any duplicates.
//  Use array methods to achieve this, and consider the performance.
// const array1 = [1, 2, 3];
// const array2 = [2, 3, 4];
// console.log(combineUnique(array1, array2));
// // Output: [1, 2, 3, 4]

function combineUnique(array1, array2) {
  const set = new Set([...array1, ...array2]);
  return Array.from(set);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(combineUnique(array1, array2));


// Write a function that finds the longest string in an array of strings. Make sure it handles edge cases properly.
// const strings = ["short", "medium length", "longest string"];
// console.log(findLongestString(strings));
// // Output: "longest string"

function findLongestString(array){
     let longestString = array[0];

     for(let i = 1 ; i < array.length ; i++){
        const currentString = array[i] ;
       if(typeof currentString !== 'string'){
        return null ;
       }
       if(currentString.length > longestString.length){
         longestString = currentString
       }

     }
     return longestString
}

const strings = ["short", "medium length", "longest string"];

let long = findLongestString(strings);
console.log(long)


// 6. Create a function that takes two arrays and returns an array of their intersection (elements that are present in both arrays).
// const nums1 = [1, 2, 3, 4];
// const nums2 = [3, 4, 5, 6];
// console.log(arrayIntersection(nums1, nums2));
// // Output: [3, 4]


function arrayIntersection(arr1,arr2){
    let res = []
     for(let i = 0; i < arr1.length; i++){
       for(let j = 0; j < arr2.length;j++){
          if(arr1[i]=== arr2[j]){
            res.push(arr1[i])
          }
       }
     }
     return res;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 1, 8];
console.log(arrayIntersection(arr1, arr2));


// 7. Write a function that splits an array into groups of a specified size. For example, chunking an array into subarrays of length 2.
// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunkArray(data, 3));
// // Output: [[1, 2, 3], [4, 5, 6], [7]]


function chunkArray(arr, num){
  let res = []
    for (let i = 0 ; i < arr.length ; i+= num){
            res.push(arr.slice(i,i+num))
                     
    }
    return res ;
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunkArray(data, 3));

// 8. Write a custom implementation of the Array.prototype.reduceRight method. This function applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// const array = [1, 2, 3, 4];
// const sum = customReduceRight(array, (acc, value) => acc + value, 0);
// console.log(sum);
// // Output: 10


function customReduceRight(){
  
}