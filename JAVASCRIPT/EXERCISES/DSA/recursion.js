// let nums = [-100000,-100000];
// return nums.includes(0)? 0:nums.push(0);
// let sortedArray = nums.sort((a,b)=>a-b);
// console.log(sortedArray);
// let indexOfZero = sortedArray.indexOf(0);
// console.log(indexOfZero);
// let NumBeforeZero = sortedArray[indexOfZero-1];
// let NumAfterZero = sortedArray[indexOfZero+1];
// if(NumBeforeZero = 'undefined' ){
//     return NumAfterZero;
// }else if(NumAfterZero = 'undefined'){
//     return NumBeforeZero
// }
// return NumBeforeZero - 0  > NumAfterZero - 0 ?NumBeforeZero:NumAfterZero;
//==============================================
// function countDownRecursive(n) {
//     if(n <= 0){
//         return
//     }
//     countDownRecursive(n -1)
// }
//=============================================
//return the sum of all the nums between n and zero
// function sumRange(n ,total = 0){
//     if(n <= 0){
//         return total;
//     }
//     // total +=n;
//     return sumRange(n-1,total+n);
//     // for(let i = n;i > 0;i-- ){
//     //     total +=i;
//     // }
//     // return total;
// }
// console.log(sumRange(3));
//==============================================
// function getAllChildrenNames(person) {
// if (person.children.length == 0){
//     return
// }
// person.children.forEach(child => {
//     console.log(child.name)
//         getAllChildrenNames(child)
    
// })

// }



// const tree = {
//     name: 'John',
//     children: [
//       {
//         name: 'Jim',
//         children: []
//       },
//       {
//         name: 'Zoe',
//         children: [
//           { name: 'Kyle', children: [] },
//           { name: 'Sophia', children: [] }
//         ]
//       }
//     ]
//   }
//=========================================
// function collatz(n){
//   if(n == 1 )
//     return 0;
//   else if(n % 2 == 0)
//     return 1 + collatz(n/2);
//   else if (n % 2 !== 0)
//     return 1 + collatz(3*n+1);
// }


// console.log(collatz(10));
//============================
// function sumRange(n){
//   if(n === 0){
//     return 0;
//   }else{
//     return n + sumRange(n-1);
//   }
// }
// console.log(sumRange(3));
