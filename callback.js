let sum=(a,b,cb)=>{
    console.log('sum is:',a+b);
    cb(a,b)
}

let mult=(a,b)=>{
    setTimeout(()=>{
        console.log('factorial is:',a*b);
    },3000)
}

sum(10,20,mult)