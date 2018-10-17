module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length <= 1) return array.length;

  const sortedArr = array.sort((a, b) => a - b);

  let count = 1;

  const reducer = (acc, curr, i, arr) => {
    const diff = curr - arr[i - 1];


    if (diff === 1) count++; // return count++;
    else if (diff > 1) {
      acc = count > acc
        ? count
        : acc;
      count = 1;
    }

    return acc;
  }

  const resultArr = sortedArr.reduce(reducer, 0);

  return resultArr;
}