let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array:
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; 


console.log(arrayIntegersOriginal1);
console.log(arrayIntegersOriginal2);
console.log(arrayIntegersOriginal3);
