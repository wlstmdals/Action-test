//20181277 진승민 3.js

function getFrequencies(arr) {
  if (arr.length === 0) {
    return {};
  }

  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    freq[key] = freq[key] ? freq[key] + 1 : 1;
  }
  return freq;
}

module.exports = getFrequencies;
