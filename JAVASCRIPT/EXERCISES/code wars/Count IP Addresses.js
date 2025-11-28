function ipsBetween(start, end){
    // console.log(start.split('.').reverse()[0]);
    // console.log(end.split('.').reverse()[0]);
    let result = 0;
    result +=  end.split('.').reverse()[0] - start.split('.').reverse()[0]  ;
    // console.log(result);
    result +=  256* (end.split('.').reverse()[1] - start.split('.').reverse()[1]);
    // console.log(result);
    result +=  (256*256) * (end.split('.').reverse()[2] - start.split('.').reverse()[2]);
    // console.log(result);
    result +=  (256*256*256) * (end.split('.').reverse()[3] - start.split('.').reverse()[3]) ;
    console.log(result);
    return result;
    }

    ipsBetween("150.0.0.0", "150.0.0.1",);
    ipsBetween("10.0.0.0", "10.0.0.50",);
    ipsBetween("20.0.0.10", "20.0.1.0", );
    ipsBetween("10.11.12.13", "10.11.13.0", );
    ipsBetween("160.0.0.0", "160.0.1.0", );
    ipsBetween("170.0.0.0", "170.1.0.0", );
    ipsBetween("50.0.0.0", "50.1.1.1", );
    ipsBetween("180.0.0.0", "181.0.0.0", );
    ipsBetween("1.2.3.4", "5.6.7.8", );
    ipsBetween("0.0.0.0", "255.255.255.255",);