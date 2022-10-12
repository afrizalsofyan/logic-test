const countSockPairing = (ar = []) => {
  let count = 0;
  //validation for cheking input tpye
  if (typeof ar !== 'object') return 'input invalid';

  //if just 1 element value, return 0
  if (ar.length == 1) return (count = 0);

  const arrSort = ar.sort((a, b) => a - b);
  while (arrSort.length > 0) {
    //compare between element index 0 and 1
    //if true count will be increase 1, then delete array for elemet 2 twice
    //else array will be delete for index 0
    if (arrSort[0] === arrSort[1]) {
      count += 1;
      arrSort.shift();
      arrSort.shift();
      i++;
    } else {
      arrSort.shift();
    }
  }
  return count;
};

console.log(countSockPairing([5, 7, 7, 9, 10, 4, 5, 10, 6, 5]));
console.log(countSockPairing([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(countSockPairing([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(countSockPairing([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
