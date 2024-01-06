
function isPalindrome(str) {
  let polindrom = '';
  const len = str.length;
  for (let i = len-1; i >= 0; i -= 1) {
    let lastChar = str[i];
    polindrom += lastChar;

  }
   return str === polindrom ? true : false;
}
console.log(isPalindrome('abcba'));

