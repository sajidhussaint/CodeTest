console.log('1.this is normal console');

process.nextTick(()=>{console.log('2.Next tick is Here');})


const promise1=new Promise((resolve,reject)=>{
    resolve('3.this is promise')
})

promise1.then((data)=>{console.log(data);})


setTimeout(()=>{console.log('4.this is setTimeOut');})



