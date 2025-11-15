function repeatWithRules(word) {
    // Your Code Here
    let arr = word.split('');
    // console.log(arr)
    let result = [];
    for(let i = 0 ; i < arr.length;i++){
        result.push(arr[i].repeat(i+1));
    }
    // console.log(result);
    let strResult = result.join('');
    // there are several ways to turn an array to string
    //1- toString => but it will add , between them
    //2-join here you can choose if you want to add something between them or just concat
    // console.log(strResult);
    return strResult;
  }
  
  console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
  console.log(repeatWithRules("Hello")); // Heelllllllooooo