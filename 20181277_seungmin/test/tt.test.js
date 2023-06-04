const { fetchData, fetchDataWithError, fetchDataWithCallback } = require('../libs/fetchData')

test('the data is peanut butter', () => {
    // fetchData 함수 테스트 (.then 함수 이용)
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the data is peanut butter', async () => {
    // fetchData 함수 테스트 (async await 함수 이용)
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    // fetchDataWithError 테스트
    expect.assertions(1);
    try {
        await fetchDataWithError();
    } catch (error) {
        expect(error).toBe('error');
    }
});

test('the data is peanut butter with .resolves', async () => {
    // fetchData 함수 테스트 (.resolves 함수 이용)
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    // assertions 함수 이용
    // fetchDataWithError 함수 테스트 (.rejects 함수 이용)
    await expect(fetchDataWithError()).rejects.toBe('error');
});

test('the data is peanut butter', done => {
    // fetchDataWithCallback 테스트 (done 이용)
    function callback(err, data) {
        expect(data).toBe('peanut butter');
        done();
    }
    fetchDataWithCallback(callback);
});