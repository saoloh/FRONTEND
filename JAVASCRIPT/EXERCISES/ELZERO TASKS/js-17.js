function formatName(theName) {
    // Your Code Here
    let splitedStringToArray = theName.split(' ');
    // console.log(splitedArray);
    let firstLetter = splitedStringToArray.map((word)=>{
        return word.charAt(0);
    })
    // console.log(firstLetter);
    // console.log(firstLetter[1].toString().toLowerCase());
    for(let i = 1; i < firstLetter.length ; i++){
        firstLetter[i] = firstLetter[i].toString().toLowerCase();
    }
    let result = firstLetter.join('.');
    // console.log(result);
    return result;
  }
  
  console.log(formatName("Osama Elzero")); // O.e
  console.log(formatName("Elzero Web School")); // E.w.s

  