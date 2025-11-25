function rgb(r, g, b) {

    HexRed = r > 255 
    ? 'FF' 
    :r < 0 ? '00':r < 16 ?'0' + r.toString(16).toUpperCase():r.toString(16).toUpperCase();
    console.log(HexRed);

    HexGreen = g > 255 
    ? 'FF' 
    :g < 0 ? '00':g < 16 ?'0' + g.toString(16).toUpperCase():g.toString(16).toUpperCase() ;
    console.log(HexGreen);

    HexBlue = b > 255 
    ? 'FF' 
    :b < 0 ? '00'
    :b < 16 
    ?'0' + b.toString(16).toUpperCase()
    :b.toString(16).toUpperCase();
    console.log(HexBlue);

    return `${HexRed}${HexGreen}${HexBlue}`;
}

rgb(  0,   0,   0);
console.log(rgb(  0,   0, -20));
rgb(300, 255, 255);
rgb(173, 255,  47);


let x = 11
console.log(x.toString(16));