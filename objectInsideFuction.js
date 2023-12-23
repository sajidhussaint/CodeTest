const person = {
    firstName: "Sajid",
    lastName: "Hussain",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(person.fullName()); // Output: "Sajid Hussain"
  