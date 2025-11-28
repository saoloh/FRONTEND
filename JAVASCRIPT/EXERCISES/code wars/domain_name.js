function domainName(url){
    let RegEx = /^(?:https?:\/\/)?(?:www\.)?([^\./]+)/;
    let result = url.match(RegEx);
    console.log(result[1])
    return result[1];
}

domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");