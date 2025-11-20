function dashBetweenOdd(num) {
    // Write Your Code Here
    let numToString= num.toString();
    console.log(numToString);

    let arrOfNumbers = numToString.split('');

    let result;

    for(let i = 0 ; i < numToString.length;i++){
        if(arrOfNumbers[i] % 2 !== 0  &&  arrOfNumbers[i + 1] % 2 !== 0 ){
            result += arrOfNumbers[i];
            result += '-';
        }
        else{
            result += arrOfNumbers[i];
        }
    }
    return result;
  }
  
  console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
  console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922