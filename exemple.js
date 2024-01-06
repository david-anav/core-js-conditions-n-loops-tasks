function isContainNumber(num, digit) {
  const numToStr = String(num);
  let s = 0;
  do {
    if( numToStr[s] === String(digit)){
      return true;
    }
    s += 1;
  }while(s <= numToStr.length)
  return false;
}


console.log(isContainNumber(123450, 5));

