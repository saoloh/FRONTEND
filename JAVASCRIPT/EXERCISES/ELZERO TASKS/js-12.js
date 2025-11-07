let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];

let result = [];

let charOne = "";

let charTwo = "";

// Your Code Here

  
  

names.forEach((name)=>{

    // console.log(name.charAt(0).toLowerCase(),name.charAt(name.length-1).toLowerCase(),name)

    if (name.charAt(0).toLowerCase() ==  name.charAt(name.length-1).toLowerCase()){

        result.push(name);

    }

})

console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']