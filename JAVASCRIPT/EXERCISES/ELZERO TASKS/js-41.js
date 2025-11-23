const myData = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
  };
  
  // Your Code Here
  const cloned1 = { ...myData };
  console.log(cloned1); // {user: 'Elzero', age: 41, country: 'Egypt'}


  const cloned2 = Object.assign({}, myData);
console.log(cloned2); // {user: 'Elzero', age: 41, country: 'Egypt'}