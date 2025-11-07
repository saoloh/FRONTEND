function checkBiggestNum(word) {

      console.log(Math.max(...(word.split("").map(Number))));
    
    }
    
      
    
    console.log(checkBiggestNum("1500654")); // 6
    
    console.log(checkBiggestNum("8509507")); // 9