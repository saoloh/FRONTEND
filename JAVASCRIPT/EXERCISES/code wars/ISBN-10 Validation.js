function validISBN10(isbn) {
    // Must be exactly 10 characters
    if (isbn.length !== 10) return false;
  
    // Map characters to numbers, handling 'X' as 10 only in last position
    let mappedArr = isbn.split('').map((item, index) => {
      if (item.toUpperCase() === 'X') {
        return index === 9 ? 10 : NaN;
      }
      return Number(item);
    });
  
    // Validate: no NaN values allowed
    if (mappedArr.some(isNaN)) return false;
  
    // Compute checksum: sum of digit * position (1–10)
    let result = mappedArr.reduce((acc, cur, index) => acc + cur * (index + 1), 0);
  
    // Valid if divisible by 11
    return result % 11 === 0;
  }
  

validISBN10("1112223339");
validISBN10("048665088X");
validISBN10("1293");
validISBN10("X123456788");