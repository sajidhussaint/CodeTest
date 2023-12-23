
let a=[{a:[10,10,10,10]},{b:[10,10,10,10]}]

let newArr=[]
for(i=0;i<a.length;i++){
   newArr.push(Object.values(a[i]).flat()) 
}

newArr= newArr.flat()

let sum=0;
for(i=0;i<newArr.length;i++){
sum+=newArr[i]
}

console.log(newArr);
console.log(sum);





