function concatenateWithoutLast(words) {
    // Your Code Here
    const mappedWords=words.map((word)=>{
        return word.slice(0,-1)
    });
    // console.log(mappedWords);
    let result = mappedWords.join(' ');
    return result;
  }
  
  console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School