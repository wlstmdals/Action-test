//20181277 진승민 4.js

function nearestChapter(obj, num) {
  const value = Object.values(obj);
  const key = Object.keys(obj);
  let temp;
  let result;
  for (let i = 0; i < value.length; i++) {
    let abs_result = Math.abs(num - value[i]);
    if (temp == undefined) {
      temp = abs_result;
    } else {
      if (abs_result < temp) {
        temp = abs_result;
        result = key[i];
      } else if (abs_result == temp) {
        result = key[i];
      }
    }
  }
  return result;
}

module.exports = nearestChapter;
