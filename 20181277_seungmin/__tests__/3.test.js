const getFrequencies = require("../libs/3");

describe(`Frequencies 테스트`, () => {
  test('TEST1_(["A", "B", "A", "A", "A"])', () => {
    expect(getFrequencies(["A", "B", "A", "A", "A"])).toEqual({ A: 4, B: 1 });

    expect(getFrequencies(["A", "B", "A", "A", "A"])).toMatchObject({ A: 4 });
  });

  test("TEST2_([1, 2, 3, 3, 2])", () => {
    expect(getFrequencies([1, 2, 3, 3, 2])).toEqual({ 1: 1, 2: 2, 3: 2 });

    expect(getFrequencies([1, 2, 3, 3, 2])).toMatchObject({ 1: 1, 2: 2, 3: 2 });
  });

  test("TEST3_([true, false, true, false, false])", () => {
    expect(getFrequencies([true, false, true, false, false])).toEqual({
      true: 2,
      false: 3,
    });

    expect(getFrequencies([true, false, true, false, false])).toMatchObject({
      true: 2,
      false: 3,
    });
  });
});
