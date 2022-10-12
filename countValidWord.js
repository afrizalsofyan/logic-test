const countValidWord = (txt = '') => {
  const newTextArr = txt.split(' ');
  let countValidString = 0;
  // do checking every word
  for (let i = 0; i < newTextArr.length; i++) {
    // check if word not include special character count + 1
    if (!newTextArr[i].match(/[\W_]/)) {
      countValidString += 1;
    }
    // check if there are reapeat word, if its valid repeat word then count + 1
    if (newTextArr[i].includes('-')) {
      const checkDashWord = newTextArr[i].split('-');
      if (checkDashWord.length === 2) {
        if (checkDashWord[0].toLowerCase() === checkDashWord[1].toLowerCase()) {
          countValidString += 1;
        }
      }
    }
    // checking word in the middle of the text
    if (newTextArr[i].match(/\W/)) {
      let stringWithLastSpecialChar = newTextArr[i].split('');
      let lastCharWord =
        stringWithLastSpecialChar[stringWithLastSpecialChar.length - 1];
      // check if there are character , or . in the middle of text, if the word valid then count + 1
      if (
        lastCharWord === ',' ||
        lastCharWord === '.' ||
        lastCharWord === '?' ||
        lastCharWord === '!'
      ) {
        stringWithLastSpecialChar.pop();
        let checkingMiddleWord = stringWithLastSpecialChar.join('');
        if (!checkingMiddleWord.match(/\W/)) {
          countValidString += 1;
        }
      }
      // check if there are word with character ( ) or [ ] or < > in the middle of text, if the word valid then count + 1
      if (
        ((stringWithLastSpecialChar[0] === '(' ||
          stringWithLastSpecialChar[0] === '[' ||
          stringWithLastSpecialChar[0] === '<') &&
          stringWithLastSpecialChar[stringWithLastSpecialChar.length - 1] ===
            ')') ||
        stringWithLastSpecialChar[stringWithLastSpecialChar.length - 1] ===
          ']' ||
        stringWithLastSpecialChar[stringWithLastSpecialChar.length - 1] === '>'
      ) {
        countValidString += 1;
      }
    }
  }
  return countValidString;
};

console.log(countValidWord('Kemarin Shopia per[gi ke mall.'));
console.log(
  countValidWord('Saat meng*ecat tembok, Agung dib_antu oleh Raihan.')
);
console.log(countValidWord('Berapa u(mur minimal[ untuk !mengurus ktp?'));
console.log(
  countValidWord('Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.')
);
