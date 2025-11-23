let strNumber = "10";

// Method 1
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10 <= Same Solution

// Output Needed

//paresint
let num1 = parseInt(strNumber);
console.log(num1);
//Number
let num2 = Number(strNumber);
console.log(num2);
//parseFloat
let num3 = parseFloat(strNumber);
console.log(num3);
//+
let num4 = +strNumber;
console.log(num4);

//AI
console.log(Math.floor(strNumber));  // 42
console.log(Math.ceil(strNumber));   // 43
console.log(Math.round(strNumber));  
