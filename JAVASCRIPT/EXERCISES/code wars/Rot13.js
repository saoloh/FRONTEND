function Rot13(message){
    //your code here
    console.log('T'.charCodeAt(0));
    console.log(String.fromCharCode(97));
    //split
    let splitedMessage = message.split('');
    console.log(splitedMessage);
    //charcode +13
    let Rot13 = splitedMessage.map((item)=>{
      if(item.match(/[a-zA-Z]/)){
        return item.charCodeAt(0) > 77 && item.charCodeAt(0) < 97|| item.charCodeAt(0) > 109 
        ? String.fromCharCode(item.charCodeAt(0) - 13)
        : String.fromCharCode(item.charCodeAt(0) + 13);
      }else{
        return item;
      }
    });
    //if not word \W do nothing
    console.log(Rot13.join(''));
    return Rot13.join('');
  }

  Rot13("test");
  Rot13("Test");