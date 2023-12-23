
//encapsulation -hide data show usefull
let sajid={
    name:'sajid t',
    age:24,
    salary:90000,

    get Name(){
        return this.name;
    },
    set setName(val){
        this.name=val;
    }
}

console.log(sajid.Name);
sajid.setName='john'
console.log(sajid.Name);


//set calculated value for a property


let alex={
    name:'alexander',
    age:90,
    salary:200,

    get Name(){
        return 'Mr.'+ this.name;
    },
    set setName(val){
        if(val.length<4){
            console.log('name should be 4 charactor');
        }else{
            this.name=val;
        }
    }
}
console.log('');
console.log(alex.Name);
alex.setName='joh'
console.log(alex.Name);





