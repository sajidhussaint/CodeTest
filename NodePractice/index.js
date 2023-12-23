
const fs = require('fs');

const outputFile = 'source.txt';


function writeMultiplication(i, j) {
    if (i <= 1) {
        if (j <= 10) {
            const multiplication = `${i} x ${j} = ${i * j}\n`;
            fs.appendFileSync(outputFile, multiplication);
            console.log(multiplication);
            setTimeout(() => {
                writeMultiplication(i, j + 1);
            }, 2000);
        } else {
            writeMultiplication(i + 1, 1);
        }
    } else {
        console.log('Table written to the file');
    }
}


writeMultiplication(1, 1);


// for(i=0;i<20;i++){
//     if(i%2==0){
//         setTimeout(()=>{
//             fs.appendFileSync('DaTAs.txt',`${i}\n`);
//             console.log(i);
//         },2000)

//     }
// }







