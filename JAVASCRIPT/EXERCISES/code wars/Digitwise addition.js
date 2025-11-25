function digitwiseAddition(N, K) {
    // Test Constraints:
    // 1 <= n <= 10 ** 9
    // 1 <= k <= 10 ** 5
    let arrOfChars = N.toString().split('');
    let result;
    for(let i = 0 ; i < K; i++){
        result = arrOfChars.map((item)=>{
            return String(Number(item)+1);
        });
        arrOfChars = result.join('').split('');
    }


        console.log(result);
    console.log(result.join('').split('').length);
    return result.join('').split('').length ;
  }

digitwiseAddition(397225306, 17);
digitwiseAddition(9899, 3);