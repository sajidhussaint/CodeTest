var msg = "Hello John";
var n = msg.search(/John/i); // 6 index to start
console.log(n);

var n2 = msg.replace(/John/i, "Buttler");
// Hello Buttler

console.log(n2);
