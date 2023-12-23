// forEach
const numbers = [1, 2, 3, 4];
numbers.forEach((number) => {
  console.log(number); // Iterates over each element in an array and performs a specified action
}); // It does not create a new array but is useful for side effects

// map
const numbers2 = [1, 2, 3, 4];
const doubled = numbers2.map((number) => number * 2); // Creates a new array by applying a provided function to each element in an existing array

// filter
const numbers3 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers3.filter((number) => number % 2 === 0); // Creates a new array containing all elements that pass a specified test

const numbers4 = [1, 2, 3, 4];
const sum = numbers4.reduce((accumulator, currentValue) => accumulator + currentValue,0); // Applies a provided function to accumulate values from an array, resulting in a single value.
// Operations like summ , maximum value.
