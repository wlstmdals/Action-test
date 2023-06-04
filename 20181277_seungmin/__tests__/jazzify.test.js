const jazzify = require("../libs/jazzify");

describe(`모든 음악코드의 끝에 7을 붙이는 함수를 생성한 후 unit test를 작성하세요.`, () => {
  test(`TEST1_["G", "F", "C"] ➞ ["G7", "F7", "C7"]`, () => {
    expect(jazzify(["G", "F", "C"])).toEqual(["G7", "F7", "C7"]);
  });

  test(`TEST2_["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]`, () => {
    expect(jazzify(["Dm", "G", "E", "A"])).toEqual(["Dm7", "G7", "E7", "A7"]);
  });

  test(`TEST3_["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]`, () => {
    expect(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])).toEqual([
      "F7",
      "E7",
      "A7",
      "Ab7",
      "Gm7",
      "C7",
    ]);
  });

  test(`TEST4(입력배열이 없으면 빈배열을 리턴)_[] ➞ []`, () => {
    expect(jazzify([])).toEqual([]);
  });
});
