let  person={
    name:'sajid',
    ages:null,
    place:{
        city:'malappuram'
    }

}

console.log(person.age);//normal undefined
console.log(person.ages??'data is coming soon');//with nullish operator

