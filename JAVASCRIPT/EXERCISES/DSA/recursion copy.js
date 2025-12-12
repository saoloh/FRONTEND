function power(n,x){
    if(x===0)
        return 1;
    if(x === 1)
        return n;
    else
        return n * power(n,x - 1);
}

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1