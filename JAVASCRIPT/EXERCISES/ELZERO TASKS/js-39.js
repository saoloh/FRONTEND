let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

// Write Your Code Here
Object.freeze(myData);
try{
    myData.push("Name");
}catch(e){
    console.log(myData);
}

 // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']