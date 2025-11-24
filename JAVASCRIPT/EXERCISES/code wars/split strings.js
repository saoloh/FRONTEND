function solution(str){
    let result = [];
    for(let i = 0 ; i < str.length ; i+=2){
        str[i+1] !== undefined ? result.push(str[i] + str[i+1]):result.push(str[i] + '_');
    }
    console.log(result);
}

solution("abcdef");
solution("abcdefg");
solution("");