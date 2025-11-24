function pigIt(str){
    //Code here
  let splittedArray = str.split(" ");
  console.log(splittedArray);

let result =   splittedArray.map((item)=>{
    if(!/^[?!.,;:]$/.test(item)){
        return item.slice(1) + item[0] + 'ay';
    }else{
        return item;
    }
  })
  let finalResult = result.join(" ");
  console.log(finalResult);
console.log(result)
  }

pigIt('Pig latin is cool');
pigIt('This is my string');
pigIt('This is my string ;');


// if(typeof('?') == 'string'){
//     console.log('ss');
// }