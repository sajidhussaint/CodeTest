let  person={
    name:'sajid',
    age:18,
    place:{
        city:'malappuram'
    }

}

console.log(person.country?.city);//show undefined
console.log(person.place?.city);//malappuram