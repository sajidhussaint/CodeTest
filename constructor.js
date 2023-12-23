let Person=function (name,gender,dob){
    this.name=name;
    this.gender=gender;
    this.dob=dob;
    this.calcAge=function(){
        let age=new Date().getFullYear()-this.dob;
        console.log(age);
    }
}

let pr=new Person('sajid','Male',1999)
pr.calcAge()