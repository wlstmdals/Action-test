const nearestChapter = require("../libs/4");

describe(`챕터 테스트`, () => {
  test(`TEST1_({ "Chapter 1" : 1, "Chapter 2" : 15, "Chapter 3" : 37}, 10)`, () => {
    expect(
      nearestChapter({ "Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37 }, 10)
    ).toMatch("Chapter 2", "2");
  });

  test(`TEST2_({"New Beginnings" : 1, "Strange Developments" : 62, "The End?" : 194, "The True Ending" : 460}, 200)`, () => {
    expect(
      nearestChapter(
        {
          "New Beginnings": 1,
          "Strange Developments": 62,
          "The End?": 194,
          "The True Ending": 460,
        },
        200
      )
    ).toMatch("The End?");
  });

  test(`nearestChapter({
    "Chapter 1a" : 1,
    "Chapter 1b" : 5
  }, 3) ➞ "Chapter 1b"`, () => {
    expect(
      nearestChapter(
        {
          "Chapter 1a": 1,
          "Chapter 1b": 5,
        },
        3
      )
    ).toMatch("Chapter 1b");
  });
});
