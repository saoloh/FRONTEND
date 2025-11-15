let theName = "salah";

// Line 1 => Eo
// Line 2 => lzer
// Line 3 => ze

console.log(theName.charAt(0) + theName.charAt(theName.length -1));
console.log(theName.slice(1,-1));
console.log(theName.length%2==0?theName.charAt((theName.length/2)-1)+theName.charAt(theName.length/2):theName.charAt(theName.length/2));