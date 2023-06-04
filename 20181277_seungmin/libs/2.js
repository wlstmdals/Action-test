//20181277 진승민 2.js

function countTrue(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let trueCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      trueCount++;
    }
  }
  return trueCount;
}

module.exports = countTrue;
