// const a = [{d: 54, ld: 45}, {aa: 4, lod: 45}, {df: 8, add: 9}, {fg: 50, a: 90}];

// // Function to calculate the absolute difference between numbers in two objects
// function calculateDifference(obj1, obj2) {
//     const values1 = Object.values(obj1);
//     const values2 = Object.values(obj2);

//     let sum = 0;

//     for (let i = 0; i < Math.min(values1.length, values2.length); i++) {
//         if (typeof values1[i] === 'number' && typeof values2[i] === 'number') {
//             sum += Math.abs(values1[i] - values2[i]);
//         }
//     }

//     return sum;
// }

// // Calculate the difference between consecutive objects in the array
// for (let i = 0; i < a.length - 1; i++) {
//     const difference = calculateDifference(a[i], a[i + 1]);
//     console.log(`Difference between objects ${i + 1} and ${i + 2}: ${difference}`);
// }

const a = [{d:54,ld:45},{aa:4,lod:45},{df:8,add:9},{fg:50,a:90}]
function jungle(a){
    let arr = []
    for(let i=0;i<a.length;i++){
        const [value1,value2]=Object.values(a[i])
        arr.push(Math.abs(value1-value2))
    }
    return arr
}
console.log(jungle(a));
