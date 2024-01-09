function getSpiralMatrix(size) {
  let arr = [];
  let resultStr = '';
  const arrN = [];
  const resultToNum = size ** 2;
  for (let i = 1; i <= resultToNum; i += 1) {
    resultStr += i;
  }
  for (let s = 0; s <= resultStr.length; s += 1) {
    arrN[s] = resultStr[s];
    if (arrN.length === size) {
      arr = [...arr];
      arrN.length = 0;
    }
    if (arr.length === 1) {
      while (arr.length < size) {
        arrN[s] = resultStr[s];
        arr = [...arrN];
        arrN.length = 0;
      }
    }
  }
  return arr;
}
