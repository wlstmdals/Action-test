function reverse(str) {
  const reverse = str
    .split(" ")
    .filter((val) => val != "")
    .reverse()
    .join(" ");
  return reverse;
}

module.exports = reverse;
