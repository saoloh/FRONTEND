let arr = [1, 1, 1, 2, 3, 4, 3];

let result = [];
let sortedArr = arr.sort((a,b)=>{ return a-b});

//for

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] !== arr[i-1]){
//         result.push(arr[i]);
//     }
// }
// console.log(result);

/*=====================================================AI================================================================*/

// result = new Set(arr);
// console.log(result);


// result = arr.reduce((acc,currentValue)=>{
//     if(!acc.includes(currentValue)){
//         acc.push(currentValue)
//     }
//     return acc;
// },[]);
// console.log(result);


// result = arr.filter((element, index, self) => {
//     // self is the array we are filtering on
//     return self.indexOf(element) === index;
// });

// console.log(result);