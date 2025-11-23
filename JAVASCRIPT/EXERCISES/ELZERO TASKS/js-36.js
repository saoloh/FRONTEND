// Write Your Code Here

// const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
// let result = '';
// for (let i = 0; i < 20; i++) {
//     result += chars[Math.floor(Math.random() * chars.length)];
//    
//   }
//console.log(result);


let result = '';
for (let i = 0; i < 20; i++) {
    result += String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
}
console.log(result);