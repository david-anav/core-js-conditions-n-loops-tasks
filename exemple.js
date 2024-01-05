function convertToRomanNumerals(num) {
  const arrRim = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  if (num <= 10) {
    return arrRim[num - 1];
  }
  if (num > 10 && num <= 20) {
    return `X${arrRim[num - 10 - 1]}`;
  }
  if (num > 20 && num <= 30) {
    return `XX${arrRim[num - 20 - 1]}`;
  }
  if (num < 39) {
    return `XXX${arrRim[num - 30 - 1]}`;
  }
  return 'XXXIX';
}
const num = 37;
console.log(convertToRomanNumerals(num));
