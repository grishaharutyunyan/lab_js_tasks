// 1.Implement Symbol.iterator for a Custom Range Object. Create a custom range object that can iterate over a range of numbers. Implement the Symbol.iterator method to allow it to be used with for...of loops.
// for (let num of range) {
//     console.log(num); // Should log numbers from 1 to 5
// }


let Range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.from > this.to) {
                    return { value: undefined, done: true };
                } else {
                    return { value: this.from++, done: false };
                }
            }
        };
    }
};

for (let num of Range) {
    console.log(num);
}

// //  same with generator
// let customRange = {
//     from: 1,
//     to: 5,
//     *[Symbol.iterator]() {   
//         while (this.from <= this.to) {
//             yield this.from++;
//         }
//     }
// };

// for (let num of customRange) {
//     console.log(num);
// }





// 2. Implement a lazy evaluation wrapper for arrays where methods like map and filter are computed only when the value is accessed. Use proxies to intercept property access.
// let lazy = lazyArray([1, 2, 3, 4]).map(x => x * x).filter(x => x > 5);
// console.log(lazy[1]); // Computed at this point: 16







// 3. Custom Set Implementation with O(1) Complexity for Add, Remove, and Check Operations. Implement a custom Set class with constant time complexity for add, remove, and check operations. Internally use a JavaScript object to store elements.
// let mySet = new CustomSet();
// mySet.add(1);
// mySet.add(2);
// console.log(mySet.has(1)); // true
// mySet.remove(1);
// console.log(mySet.has(1)); // false

class CustomSet {
    constructor() {
        this.elements = {};
    }

    add(element) {
        this.elements[element] = element;
    }

    has(element) {
        
        return element in this.elements;
    }

    remove(element) {
        
        delete this.elements[element];
    }
}


let mySet = new CustomSet();
mySet.add(1);
mySet.add(2);

console.log(mySet.has(1)); 

mySet.remove(1);
console.log(mySet.has(1)); 






// 4. Write a function to deeply freeze an object. Unlike Object.freeze, which only freezes the top-level properties, a deep freeze will recursively apply to all nested objects.
// let obj = { a: { b: 2 } };
// deepFreeze(obj);
// obj.a.b = 3; // Throws error in strict mode
function deepFreeze(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;  
    }
  
    Object.freeze(obj);
  

    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        obj[prop] = deepFreeze(obj[prop]);  
      }
    }
  
    return obj;
  }
  

  let obj = { a: { b: 2 } };
  deepFreeze(obj);


// 5. Create a function to check the type of a variable against a given type, including support for primitive types, built-in types (like Array, Date), and custom classes.
// console.log(isType(5, 'number')); // true
// console.log(isType(new Date(), Daxd  te)); // true
// console.log(isType([], 'array')); // true
  

function isType(variable, type) {
    const getType = (obj) => {
        if (obj === null) return 'null';
        if (Array.isArray(obj)) return 'array';
        return typeof obj;
    };

    const variableType = getType(variable);

    if (typeof type === 'string') {
        return variableType.toLowerCase() === type.toLowerCase();
    }

    if (typeof type === 'function') {
        if (type === Array && variableType === 'array') return true;
        if (type === Date && variable instanceof Date) return true;
        if (variable instanceof type) return true;
    }

    return false;
}


console.log(isType(5, 'number'));         
console.log(isType(new Date(), Date));    
console.log(isType([], 'array'));          
console.log(isType('Hello', 'string'));   
console.log(isType(null, 'null'));          
console.log(isType({}, 'object'));          






// 6. Write a JavaScript function named isEquivalent that replicates the functionality of the Object.is method. This function should provide a reliable way to check if two values are exactly the same, including correctly handling JavaScript’s unique cases like NaN, and distinguishing between -0 and +0.
// isEquivalent(NaN, NaN) should return true.
// isEquivalent(0, -0) should return false.
// isEquivalent(5, 5) should return true.
// isEquivalent('hello', 'hello') should return true.
// isEquivalent('hello', 'world') should return false.
// isEquivalent(true, false) should return false.



function isEquivalent(value1, value2) {
    if (value1 === value2) {
        return value1 !== 0 || 1 / value1 === 1 / value2;
    }

 
    if (typeof value1 === 'number' && typeof value2 === 'number' &&
        value1 !== value1 && value2 !== value2) {
        return true;
    }

    return false;
}


console.log(isEquivalent(NaN, NaN));         
console.log(isEquivalent(0, -0));             
console.log(isEquivalent(5, 5));              
console.log(isEquivalent('hello', 'hello'));  
console.log(isEquivalent('hello', 'world'));  
console.log(isEquivalent(true, false));       
