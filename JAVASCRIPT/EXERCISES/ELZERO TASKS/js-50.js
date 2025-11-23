function createStars(num) {
let numOfStars = 2 * num  -1;
let result = ''; 
    for(let i = 1 ; i <= num * 2;i++){
        if(i <= num){
            result += ' '.repeat(i-1) + '*'.repeat(numOfStars) + '\n';
            if(numOfStars > 1){
                numOfStars -=2;
            }
            
        } 
        else{
            // result += '*'.repeat(numOfStars) + '\n';
            result +=   ' '.repeat(12-i) + '*'.repeat(numOfStars) + '\n';
            numOfStars +=2;
        }

    }
    return result;
}
  
  console.log(createStars(6));
  
  // Output Needed
//   ***********
//    *********
//     *******
//      *****
//       ***
//        *
//        *
//       ***
//      *****
//     *******
//    *********
//   ***********