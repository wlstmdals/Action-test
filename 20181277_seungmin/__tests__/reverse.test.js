const reverse = require("../libs/reverse");

describe(`단어 역순나열 테스트`, () => {
  test(`TEST1_" the sky is blue" ➞ "blue is sky the"`, () => {
    expect(reverse(" the sky is blue")).toMatch("blue is sky the");
  });

  test(`TEST2_"hello   world!  " ➞ "world! hello"`, () => {
    expect(reverse("hello   world!  ")).toEqual("world! hello");
  });

  test(`TEST3_"a good example" ➞ "example good a"`, () => {
    expect(reverse("a good example")).toMatch("example good a");
  });
});
