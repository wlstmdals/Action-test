const fn = require('../libs/fn');

//mock fn

//const mockFn = jest.fn();
const mockFn = jest.fn(num => num + 1);

/*
mockFn();
mockFn(1);
*/
/*
test("dd", () => {
    console.log(mockFn.mock.calls);
    expect("dd").toBe("dd");
});

*/

/*
test("함수는 2번 호출됩니다", ()=> {
    expect(mockFn.mock.calls.length).toBe(2);
});

test("2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다", ()=> {
    expect(mockFn.mock.calls[1][0]).toBe(1);
});
*/

/*
function forEachAdd1(arr){
    arr.forEach(num => {
        mockFn(num + 1);
    });
}

forEachAdd1([10, 20, 30]);

test("함수는 3번 호출됩니다", ()=> {
    expect(mockFn.mock.calls.length).toBe(3);
});

test("전달된 값은 11, 21, 31 입니다",() => {
    expect(mockFn.mock.calls[0][0]).toBe(11);
    expect(mockFn.mock.calls[1][0]).toBe(21);
    expect(mockFn.mock.calls[2][0]).toBe(31);

})
*/

mockFn(10);
mockFn(20);
mockFn(30);

/*
test("함수는 3번 호출됩니다", ()=> {
    console.log(mockFn.mock.results);
    expect(mockFn.mock.calls.length).toBe(3);
});
*/

test("10에서 1 증가한 값이 반환된다", ()=> {
    expect(mockFn.mock.results[0].value).toBe(11);
});

test("20에서 1 증가한 값이 반환된다", ()=> {
    expect(mockFn.mock.results[1].value).toBe(21);
});

test("30에서 1 증가한 값이 반환된다", ()=> {
    expect(mockFn.mock.results[2].value).toBe(31);
});

