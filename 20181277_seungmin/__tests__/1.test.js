const calcAge = require("../libs/1");

describe("calc test", () => {
  test("TEST1_100 years ➞ 36500 days", () => {
    expect(calcAge(100)).toBeGreaterThanOrEqual(30000);
    expect(calcAge(100)).toEqual(36500);
    expect(calcAge(100)).toBeLessThanOrEqual(40000);
  });

  test("TEST2_0 years ➞ 0 days", () => {
    expect(calcAge(0)).toBeFalsy();
    expect(calcAge(0)).not.toBeTruthy();
    expect(calcAge(0)).not.toBeNull();
  });
  //음수의 경우 undefined 반환하여 테스트 실패하도록 함
  //test("-100 years ➞ Undefined", () => {
  //expect(calcAge(-100)).toBeUndefined();
  //});
});
