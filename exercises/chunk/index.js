// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkArr = [];
  for (let i = 0; i < array.length; i + size) {
    chunkArr.push(array.splice(i, size));
  }
  return chunkArr;
}

function chunk(array, size) {
  const chunkedArr = [];
  let i = 0;

  while (i < array.length) {
    chunkedArr.push(array.slice(i, i + size));
    i += size;
  }
  return chunkedArr;
}

function chunk(array, size) {
  const chunkArr = [];
  for (let elem of array) {
    let last = chunkArr[chunkArr.length - 1];
    if (!last || last.length === size) {
      chunkArr.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunkArr;
}

module.exports = chunk;
