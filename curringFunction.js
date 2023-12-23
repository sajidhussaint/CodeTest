function curry(a) {
  return function (b) {
    return a + b;
  };
}

let result = curry(10)(90);

console.log(result);
//Currying allows you to create custom functions for specific tasks 
//and reuse them with different values,

//It can help you write more concise and flexible code

const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1,2,3));// 6

const curryUnaryFunction = a => b => c => a + b + c;
curryUnaryFunction (1); // returns a function: b => c => 1 + b + c
curryUnaryFunction (1) (2); // returns a function: c => 3 + c
curryUnaryFunction (1) (2) (3); // returns the number 6

