function fib(n){
    let results = [0,1];
    for(let i =2 ; i < n ; i++){
        results.push(results[i-1] + results[i-2]);
    }
    return results
}
console.log(fib(8));

function fibonacci(n){
    if (n < 2){

        return n;
    }
    return fibonacci(n -1) + fibonacci(n - 2);
}
console.log(fibonacci(6))

// merge sort function devide the func to two func
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft,sortedRight)
}
//if the arr  length < 1 return arr
// mergesort left and right 
function merge(left,right){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < result[i]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}

//merge func takes right and left part
//sort them
//concat them
