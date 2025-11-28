Math.round = function(number) {
    if (number === 0) return 0;
    let parts = number.toString().split('.');
    if (parts.length === 1) return number; // already integer
    let intPart = parseInt(parts[0], 10);
    let decimal = parseFloat("0." + parts[1]);
    return decimal >= 0.5 ? intPart + 1 : intPart;
  };
  
  Math.ceil = function(number) {
    if (number === 0) return 0;
    let parts = number.toString().split('.');
    if (parts.length === 1) return number; // already integer
    let intPart = parseInt(parts[0], 10);
    // For negatives, ceil should move toward zero
    return number > 0 ? intPart + 1 : intPart;
  };
  
  Math.floor = function(number) {
    if (number === 0) return 0;
    let parts = number.toString().split('.');
    if (parts.length === 1) return number; // already integer
    let intPart = parseInt(parts[0], 10);
    // For negatives, floor should move away from zero
    return number > 0 ? intPart : intPart - 1;
  };
  

Math.round(5)
Math.round(0.5)
Math.ceil(0.4)
Math.ceil(0.5)
Math.floor(0.4)
Math.floor(0.5)


console.log(Math.round(5));