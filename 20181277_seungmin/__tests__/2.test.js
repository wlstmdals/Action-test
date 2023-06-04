const countTrue = require("../libs/2");

describe(`True 카운트 테스트`, () => {
  test("[true, false, false, true, false] ➞ 2", () => {
    expect(countTrue([true, false, false, true, false])).toBe(2);
    expect(countTrue([true, false, false, true, false])).toBeGreaterThanOrEqual(
      2
    );
    expect(countTrue([true, false, false, true, false])).toBeLessThanOrEqual(2);
  });

  test("[false, false, false]➞ 0", () => {
    expect(countTrue([false, false, false])).toBeFalsy();
    expect(countTrue([false, false, false])).not.toBeTruthy();
    expect(countTrue([false, false, false])).not.toBeNull();
    expect(countTrue([false, false, false])).toBe(0);
  });

  test("[] ➞ 0", () => {
    expect(countTrue([])).toBeFalsy();
    expect(countTrue([])).not.toBeTruthy();
    expect(countTrue([])).not.toBeNull();
    expect(countTrue([])).toBe(0);
  });
});
