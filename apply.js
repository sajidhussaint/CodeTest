// function greet(name, age) {
//     console.log(`Hello, ${name}! I am ${this.title}, and I am ${age} years old.`);
//   }
  
//   const person = { title: 'Mr.' };
//   const args = ['sajid', 24];
  
//   greet.apply(person, args);

  
//   //apply: The apply method is similar to call, but it accepts an array (or an array-like 
//   //object) of arguments as the second parameter. It's useful when you have an array of 
//   //arguments that you want to pass to a function.


//   var employee1 = {firstName: 'John', lastName: 'Rodson'};
// var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};
// function invite(greeting1, greeting2) {
// console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
// }


// invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
// invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?


function player(name,number){
  return console.log(`${name} is number${number} football player,in ${this.country}`);
}

let place={country:'portugal'}

let arr=['cr7',7]

player.apply(place,arr)


