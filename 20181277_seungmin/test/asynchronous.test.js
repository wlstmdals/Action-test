//20181277 진승민
//참고 사이트
//https://velog.io/@mokyoungg/Jest-Jest%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%BD%94%EB%93%9C-%EA%B2%80%EC%82%AC
//https://hoony-gunputer.tistory.com/entry/jest-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%85%8C%EC%8A%A4%ED%8C%85?category=938581

const {
  fetchData,
  fetchDataWithError,
  fetchDataWithCallback,
} = require("../libs/fetchData");

test("the data is peanut butter", () => {
  // fetchData 함수 테스트 (.then 함수 이용)
  const result = fetchData();
  result.then((data) => {
    expect(data).toBe("peanut butter");
  });
  //위를 간단하게 바꾸면 아래로 바꿀 수 있을것 같다?
  //result.expect(data).toBe("peanut butter");

  result.catch((error) => {
    console.log(error);
  });
});

test("the data is peanut butter", async () => {
  //테스트 함수 앞에 async 추가
  // fetchData 함수 테스트 (async await 함수 이용)
  const result = await fetchData();
  //Promise를 리턴하는 함수 앞에 await 붙여주기
  expect(result).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  // fetchDataWithError 테스트
  try {
    const result = await fetchDataWithError();
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("the data is peanut butter with .resolves", async () => {
  // fetchData 함수 테스트 (.resolves 함수 이용)
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  // assertions 함수 이용
  // fetchDataWithError 함수 테스트 (.rejects 함수 이용)
  await expect(fetchDataWithError()).rejects.toMatch("error");
});

test("the data is peanut butter", (done) => {
  // fetchDataWithCallback 테스트 (done 이용)
  //done은 Jest에게 테스트 할 코드가 비동기 코드라는 것을 알려주며
  //콜백의 호출까지 마무리 되었다는것을 알려줌
  function callback(error, data) {
    if (error) {
      console.log("<An error has occurred!>");
      return;
    }
    setTimeout(() => {
      expect(error).toBeNull();
      expect(data).toMatch("peanut butter");
      done();
    }, 3000);
  }
  fetchDataWithCallback(callback);
});
