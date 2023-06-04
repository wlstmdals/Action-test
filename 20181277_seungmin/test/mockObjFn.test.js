const { fetchTitle } = require("../libs/fetchData");
const { ModifiedTitle } = require("../libs/modifiedTitle");

describe("normal", () => {
  test("normal", async () => {
    // fetchTitle 함수 테스트
    const result = await fetchTitle();
    expect(result).toEqual({
      title: "Welcome Modified: delectus aut autem",
      userId: 101,
    });
    //위 문장은
    //expect(result.title).toEqual('Welcome Modified: delectus aut autem');
    //expect(result.userId).toEqual(101);
    //로 변경 가능 (아래도 다 동일)
  });
});

describe("mock", () => {
  // restore all mocks after each
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("mock test", async () => {
    // ModifiedTitle.prototype.get 함수 mock
    jest.spyOn(ModifiedTitle.prototype, "get").mockResolvedValue({
      title: "Mocked: title",
      userId: 201,
    });

    // fetchTitle 함수 테스트
    const result = await fetchTitle();
    expect(result).toEqual({
      title: "Welcome Mocked: title",
      userId: 201,
    });
    // 결과물
    // {
    //     title: 'Welcome Mocked: title',
    //     userId: 201
    // }
  });

  test("normal again", async () => {
    // 원래 fetchTitle 함수 테스트
    const result = await fetchTitle();
    expect(result).toEqual({
      title: "Welcome Modified: delectus aut autem",
      userId: 101,
    });
  });
});
