const count = require("../libs/5");

describe(`빈도 테스트`, () => {
  test(`TEST1_{a: "moron", b: "scumbag", c: "moron", d: "idiot", e: "idiot"}`, () => {
    expect(
      count({ a: "moron", b: "scumbag", c: "moron", d: "idiot", e: "idiot" })
    ).toEqual({ moron: 2, scumbag: 1, idiot: 2 });
  });

  test(`TEST2_{a: "moron", b: "moron", c:"moron"}`, () => {
    expect(count({ a: "moron", b: "moron", c: "moron" })).toEqual({ moron: 3 });
  });

  test(`TEST3_{a: "idiot", b: "scumbag"}`, () => {
    expect(count({ a: "idiot", b: "scumbag" })).toEqual({
      idiot: 1,
      scumbag: 1,
    });
  });
});
