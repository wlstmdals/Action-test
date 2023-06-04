//20181277 진승민 1.js

function calcAge(a) {
  const daysInYear = 365;
  let b = a * daysInYear;

  console.log(`calcAge(${a}) = ${b}`);
  return b;
}

module.exports = calcAge;
