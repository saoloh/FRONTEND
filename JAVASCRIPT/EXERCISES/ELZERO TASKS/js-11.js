let myMoney = 5301503206;

let str = myMoney.toString(); // "5301503206"

let arr = str.split("");  // ["5", "3", "0", "1", "5", "0", "3", "2", "0", "6"]

let result = "";


for (let i = 0; i < arr.length; i++) {
 const char = arr[i];
 const positionFromRight = arr.length - i;

  

 if (i !== 0 && positionFromRight % 3 === 0) {

 result += ",";

 }

 result += char;

}

  

console.log(result);