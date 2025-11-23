function createStars(num) {
for(let i = 1; i < num * 2  ; i+=2){
    console.log("*".repeat(i));
}
}
  
  console.log(createStars(8));
  
  // Output Needed
//   *
//   ***
//   *****
//   *******
//   *********
//   ***********
//   *************
//   ***************