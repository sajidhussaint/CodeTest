let fact=(x)=>{
    if(x==1){
        return 1
    }
    return x*fact(x-1)
}

console.log('factorial is:',fact(6));


let sum=(a)=>{
if(a.length==0){
    return 0;
}
return a.pop()+sum(a)
}

console.log('sum is:',sum([1,2,3,4]));

