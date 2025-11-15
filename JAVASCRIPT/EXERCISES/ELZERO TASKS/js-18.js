let st = "elzero";
console.log(st.charAt(0).toUpperCase());
console.log([st[0].toUpperCase(), ...st.slice(1)].join(""));
console.log(st.replace(/^./, (match) => match.toUpperCase()));
console.log(st[0].toUpperCase().concat(st.substring(1)));
console.log();
console.log();
console.log();
// Output Needed
"Elzero"
"Elzero"
"Elzero"
"Elzero"
"Elzero"
"Elzero"
"Elzero"