
'use strict';
const obj = {
  prop: 100,
};
Object.freeze(obj);
obj.prop = 200;
// Throws an error in strict mode
 
console.log(obj);
//100
