// Write Your Function Here
function customMerge(...arr){
let result = [];

for(let i = 0 ; i < arr.length;i++){
    for(let j = 0 ;j < arr[i].length;j++){

            result.push(Number(arr[i][j]));
        }

    }

result.sort((a,b) => a - b);
return result;
}

console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]