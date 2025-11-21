let myArr = ["69", "108", "122", "101", "114", "111"];

let result = '';
for(let i = 0 ; i < myArr.length;i++){
result += String.fromCharCode(myArr[i]);
}
console.log(result); // Elzero 69-108-122-101-114-111