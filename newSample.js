let a={name:[1,2,3,4],age:[9,8,7],place:[7,8]}

let newArr=[]


for(let i in a){
    
    
    newArr.push(Object.values(a[i]))
}


newArr=newArr.flat()

let result=newArr.reduce((acc,val)=>acc+val,0)

console.log(result);