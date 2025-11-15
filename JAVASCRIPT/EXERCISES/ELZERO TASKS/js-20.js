let st = "Elzero";
console.log(`${st.split('').splice(-1)}`);
console.log(st.charAt(st.length-1));
console.log(st.slice(-1));
console.log(`${st.split('').at(st.length-1)}`);
console.log(`${st.match(/(.)$/g)}`);
console.log(`${st.split('')[st.length-1]}`);
console.log(`${st.split('').reverse()[0]}`);
// Needed Output
// "o"  split splice array
// "o"  charat
// "o"  slice string
// "o"  at
// "o"  (.)$ .:matches any character $:at the end of the expression
// "o"  []
// "o"  reverse [0]