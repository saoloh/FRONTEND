// Write Your Function Here
function customCalc(...arr){
console.log(arr);

let filteredArray = arr.filter(item=>{
    if(Number(item) === NaN){
        
    }else {
        return Number(item);
    }
});
console.log(filteredArray);

let mappedArray = filteredArray.map(item=>{
    return Number(item);
})
console.log(mappedArray);


let firstNumber = mappedArray[0];
let lastNumber = mappedArray[mappedArray.length-1];



const sumedNumbers = mappedArray.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0);
console.log(sumedNumbers);
 
let result = sumedNumbers * firstNumber * lastNumber;

return result;

}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10

