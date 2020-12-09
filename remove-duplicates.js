const removeDuplicates = (inputArr) => {

  if (inputArr && inputArr.length === 0) {
    return inputArr;
  }

  let lastElemAdded = inputArr[0];
  // initialize output array with the first elem of input array
  const outputArr = [lastElemAdded];

  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i] !== lastElemAdded) {
      lastElemAdded = inputArr[i];
      outputArr.push(lastElemAdded);
    }
  }

  return outputArr;
};

const testArr1 = [2, 3, 4, 5, 5, 5, 9, 9, 9, 10];
const testArr2 = [0];
const testArr3 = [];
const testArr4 = [2, 3, 4, 6, 6, 8, 10, 10, 10, 10, 11, 11, 13];
const testArr5 = [2, 3, 4, 6, 6, 8, 10, 10, 10, 10, 11, 11, 13, 13, 22, 22];

[testArr1, testArr2, testArr3, testArr4, testArr5]
  .forEach(arr => console.log(removeDuplicates(arr)));
