function addEl(str) {

    let regex = /^El/;
    
    if(str.match(regex)){
    
        return str;
    
    } else if(str === ""){
    
         return str;
    
    } else {
    
        str= 'El' + str;
    
        return str;
    
    }
    }
    
    console.log(addEl("")); // ""
    console.log(addEl("Elzero")); // Elzero
    console.log(addEl("zero")); // Elzero