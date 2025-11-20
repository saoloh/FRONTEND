function getLastDigit(num) {
    // Your Code Here
    let str = num.toString();
    console.log(str.length);
    console.log(str.charAt(str.length-1));
    let result = Number(str.charAt(str.length-1));
    console.log(result);
    return result;
  }
  
  console.log(getLastDigit(1)); // 1
  console.log(getLastDigit(18)); // 8
  console.log(getLastDigit(305)); // 5
  console.log(getLastDigit(1569)); // 9
  console.log(typeof getLastDigit(1569)); // Number