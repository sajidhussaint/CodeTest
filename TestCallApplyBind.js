function foo(country,place){
    console.log(`My Name is ${this.fname} ${this.lname} ,From ${country},${place}`);
}

let person={fname:'sajid',lname:'hussain'}

foo.call(person,'India','malappuram')
foo.apply(person,['India','malappuram'])
let BindedData=foo.bind(person)

BindedData('UAE','Dubai')

