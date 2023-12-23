// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//       return "Array should have at least two numbers.";
//     }
  
//     let largest = arr[0];
//     let secondLargest = arr[1];
  
//     if (secondLargest > largest) {
//       [largest, secondLargest] = [secondLargest, largest];
//     }
  
//     for (let i = 2; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//       }
//     }
  
//     return secondLargest;
//   }
  
//   // Example usage:
//   const numbers = [10, 5, 8, 12, 7];
//   const result = findSecondLargest(numbers);
//   console.log("Second Largest Number:", result);


let a=[5,7,8,0,3]

let first=-Infinity
let second=-Infinity
for(i=0;i<a.length;i++){
  if(a[i]>first){
    second=first
    first=a[i]
  }else if(a[i]>second&&a[i]!=first){
    second=a[i]
  }

}

console.log(second);


  