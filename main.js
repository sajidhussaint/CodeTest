// const { log } = require('console')
// const fs=require('fs')

// for(let i=1;i<10;i++){

//   fs.appendFile('datas.txt',i+'X'+i'='X,(data,err)=>{
//     if(err){console.log(err);}

//     })
// }




// function *generator(){
//     yield 1;
//     yield 2;
//     yield 3;


// }

// const gen=generator()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());




let a=[10,10,10]


const result=a.reduce((acc,data)=> acc+data,10)

console.log(result);



// const result2=a.filter((val)=>{
//     return val % 2==0
// })

// console.log(result2);

let arr=[1,2,3,4,5]


let  binarySearch=(target,a)=>{
    let left=0;
    let right=arr.length-1;

    while(left<=right){
        let mid=Math.floor((right+left)/2)
        if(target==a[mid]){
            return a[mid]=0;
        }
        if(target<arr[mid]){
            right=mid-1;

        }else{
            left=mid+1
        }
    }
    return -1
}


// console.log(binarySearch(3,arr));

// console.log(arr);






