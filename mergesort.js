function mergeSort(wholeArray) {
  let sortedArr = [];
  // base case
  if (wholeArray.length <= 1) return wholeArray;

  // recursive case
  // splitting part
function split(wholeArray) {
      let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length/2));
      let secondHalf = wholeArray.slice(Math.ceil(wholeArray.length/2), wholeArray.length - 1);
      return [firstHalf, secondHalf];
  }

  // merge & sorting part

  return sortedArr;
}
