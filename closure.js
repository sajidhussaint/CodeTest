function outerFunction() {
    const outerVar = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVar); // innerFunction has access to outerVar
    }
  
    return innerFunction;
  }
  
  const closureFunction = outerFunction();
  closureFunction(); // Logs: "I am from the outer function"

  //A closure in JavaScript is a function that has access to variables 
  //from its containing (enclosing) function, even after the outer function
  // has finished executing.