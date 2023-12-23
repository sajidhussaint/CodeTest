// let a=[5,6,2,7,4]

// let larg1=Math.max(...a)
// for(i=0;i<a.length;i++){
//     if(a[i]==larg1){
//         a.splice(i,1)
//     }
// }

// console.log(a);
// let n=4
//     let sum=0
//     for(i=1;i<=n;i++){
//         sum+=i
//     }

//     console.log(sum);


var totalMoney = function(n) {
    let balance=0
    let week=0
    let day=1

    for(let i=1;i<=n;i++){
        balance+=week+day
        day++
        if(i%7 == 0){
            week++
            day=1
        }
    }
    return balance
};




