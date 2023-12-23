//allow you to change the context (the this value) of a function and pass arguments to 
//it in different ways.


// function greet(name) {
//     console.log(`Hello, ${name}! I am ${this.title}.`);
//   }
  
//   const person = { title: 'Mr.' };
  
//   greet.call(person, 'sajid'); // Output: "Hello, sajid! I am Mr."


 //call: The call method is used to invoke a function with a specific this value and 
 //individual arguments. You pass the context (the value of this) as the first argument, and
 //then you pass the function's arguments one by one. 
  

 

//  function greet(greeting) {
//   console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
// }
// const john = {
//   name: 'John',
//   age: 24,
// };
// const jane = {
//   name: 'Jane',
//   age: 22,
// };
// // Hi, I am John and I am 24 years old
// greet.call(john, 'Hi');
// // Hi, I am Jane and I am 22 years old
// greet.call(jane, 'Hello');



// var employee1 = {firstName: 'John', lastName: 'Rodson'};
// var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};
// function invite(greeting1, greeting2) {
// console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
// }
// invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
// invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?




function welcome(place){
  return console.log(`Hi,${this.name},welcome to ${place} `);

}

let person={name:'sajid'}

welcome.call(person,'malappuram')

