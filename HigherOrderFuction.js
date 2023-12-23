const fof = () => console.log ('Hello, I am a First order function');


const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();


higherOrder(fof);
