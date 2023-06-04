function jazzify(arr) {
  const result = arr.map((value) =>
    value.endsWith("7") ? value : value + "7"
  );
  return result;
}

module.exports = jazzify;
