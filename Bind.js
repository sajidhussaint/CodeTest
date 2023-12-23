// var employee1 = {firstName: 'John', lastName: 'Rodson'};
// var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};
// function invite(greeting1, greeting2) {
// console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
// }
// var inviteEmployee1 = invite.bind(employee1);
// var inviteEmployee2 = invite.bind(employee2);
// inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
// inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?



function bio(greet1,greet2){
    return console.log(`${greet1} ${greet2} is ${this.firstName} ${this.secondName}.`);
}

let names={firstName:'sajid',secondName:'hussain'}

let sajidData=bio.bind(names)

sajidData('My','Name')


