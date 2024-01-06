
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length-1; i +=1){
    if (str[i] === letter){
      return i;
    }
  }
  return -1;
}






console.log(getIndexOf('qwerty', 't'));

