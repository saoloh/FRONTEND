function replaceFirstWithLast(word) {

      let str = '';
    
      str = word.at(0);
    
      console.log(str)
    
      word = word.replace(word.at(0),word.at(word.length-1));
    
      console.log(word);
    
      word = word.slice(0,word.length-1);
    
      word += str;
    
      console.log(word);
    
    }
    
      
    
    console.log(replaceFirstWithLast("olzerE")); // Elzero
    
    console.log(replaceFirstWithLast("Hello")); // oellH