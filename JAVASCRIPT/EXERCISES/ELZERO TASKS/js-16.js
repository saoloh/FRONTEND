function getCharacters(word, nums) {
    // Your Code Here
    let arr = word.split(' ');
    // console.log(arr)
    // let mappedArr = arr.map((word)=>{
    //     word.slice(0,nums);
    // })
    let FisrtString = arr[0].slice(0,nums);
    let SecondString = arr[1].slice(-nums);
    // console.log(FisrtString);
    // console.log(SecondString);
    let result = FisrtString + SecondString;
    return result;
  }
  
  console.log(getCharacters("Elzero School", 2)); // Elol
  console.log(getCharacters("Elzero School", 3)); // Elzool