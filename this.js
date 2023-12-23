const person = {
    firstName: 'John',
    lastName: 'Doe',
    printName: function() {
      console.log(this.firstName + ' ' + this.lastName);
    }
  };

person.printName()

function datas(){
    let a=10;
    function inside(){
        console.log(this.clear);
    }
    inside()
}


datas()


