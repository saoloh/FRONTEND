//sort
//slice
let nums = [20, 100, 50, 10, 15, -20, 30];
nums = nums.sort((a,b)=> b-a);

nums = nums.slice(0,2)
console.log(nums);
// Needed Output
[100, 50]