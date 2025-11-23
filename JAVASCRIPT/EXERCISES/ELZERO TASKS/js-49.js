function createStars(num) {
    // Your Code Here
    let result = '';
    for(let i = 1 ; i < num * 2; i+=2){
        result += '*'.repeat(i) + '\n';
    }
    for(let i = num * 2 - 3 ; i > 0; i-=2){
        result += '*'.repeat(i) + '\n';
    }
    return result;
  }
  
  console.log(createStars(3));
  
  // Output Needed
//   *
//   ***
//   *****
//   ***
//   *
  
  console.log(createStars(7));
  
  // Output Needed
//   *
//   ***
//   *****
//   *******
//   *********
//   ***********
//   *************
//   ***********
//   *********
//   *******
//   *****
//   ***
//   *