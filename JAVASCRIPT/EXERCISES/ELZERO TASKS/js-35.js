// make an array containing [09a-zA-Z] and make a loop 20 turn and every turn choose an index of the array with rand
const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let result = '';
for (let i = 0; i < 20; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
    console.log(result);
  }

  
