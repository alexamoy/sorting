// function mergeSort(wholeArray) {
//   let sortedArr = [];
//   // base case
//   if (wholeArray.length <= 1) return wholeArray;

//   // recursive case

//   // splitting part
function split(wholeArray) { // wholeArray = [4, 27, 3, 16, 7]
  if (wholeArray.length <= 1) return wholeArray; // ignore

  let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length/2)); // [4, 27]
  let secondHalf = wholeArray.slice(Math.floor(wholeArray.length/2), wholeArray.length); // [3, 16, 7]

  console.log('split func:', [firstHalf, secondHalf]);
  return [firstHalf, secondHalf]; // [ [ 4, 27 ], [ 3, 16, 7 ] ]
}

let finalSplitArr = splitArr.forEach( function (arrWithinWholeArr) {
    console.log('final split arr:', finalSplitArr);
    return split(arrWithinWholeArr);
});

split([4, 27, 3, 16, 7]);
// merge & sorting part

//   return sortedArr;
// }


