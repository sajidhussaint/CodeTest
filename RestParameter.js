function total(...args) {
  let sum = 0;
  for (let i=0;i<=args.length;i++) {
    sum += i;
  }
  return sum;
  
}
console.log(total(1, 2));
//3
console.log(total(1, 2, 3));
//6
console.log(total(1, 2, 3, 4));
//13
console.log(total(1, 2, 3, 4, 5));
//15
//infinete araguments
