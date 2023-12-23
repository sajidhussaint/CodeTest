let weakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

// Adding objects to the WeakSet
console.log(obj1);
weakSet.add(obj1);
weakSet.add(obj2);

// Checking if an object is in the WeakSet
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// Removing an object from the WeakSet
weakSet.delete(obj1);

// Checking again
console.log(weakSet.has(obj1)); // false
console.log(weakSet.has(obj2)); // true


console.log('-------');
var ws = new WeakSet();
var user = {};
ws.add(user);
ws.has(user);
// true
ws.delete(user);
// removes user from the set
ws.has(user);
// false, user has been removed
