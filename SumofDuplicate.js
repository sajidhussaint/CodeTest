let a = [5, 6, 7, 1, 5,5, 6, 2];
let sum = 0;

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] == a[j]) {
      sum += a[i];
      // Break to avoid counting the same duplicate multiple times
      break;
    }
  }
}

console.log(sum);
