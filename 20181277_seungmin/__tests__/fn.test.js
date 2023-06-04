const fn = require('../libs/fn');

test('1=1', () => {
    expect(1).toBe(1);
});

test('2+3=5', () => {
    expect(fn.add(2,3)).toBe(5);
});

test('3+3은 5아니다', () => {
    expect(fn.add(3,3)).not.toBe(5);
});

test('3+3은 5아니다', () => {
    expect(fn.add(3,3)).not.toEqual(5);
});


test("이름과 나이를 전달받아서 객체를 반환", ()=> {
    expect(fn.makeUser("Mike",30)).toEqual({
        name: "Mike",
        age: 30
    });
    }
    );
/*
    test("이름과 나이를 전달받아서 객체를 반환", ()=> {
        expect(fn.makeUser("Mike",30)).toStrictEqual({
            name: "Mike",
            age: 30
        });
        }
        );
        */


test("null은 null이다", ()=> {
    expect(null).toBeNull();
});


test("0은 false이다", ()=> {
    expect(fn.add(1,-1)).toBeFalsy();
});

test("0은 false이다", ()=> {
    expect(fn.add(1,-1)).not.toBeTruthy();
});

test("비어있지 않은 문자열은 True이다", ()=> {
    expect(fn.add("hello","world")).toBeTruthy();
});

test("ID는 10자 이하여야합니다", () =>{
    const id = "THE_BLACK";
    expect(id.length).toBeLessThanOrEqual(10); //숫자 뿐 아니라 파일의 크기나 문자열의 길이에도 사용 가능
});

test("비밀번호는 4자리", () =>{
    const pw = "1234";
    expect(pw.length).toEqual(4); //숫자 뿐 아니라 파일의 크기나 문자열의 길이에도 사용 가능
});


test('0.1+0.2=0.3', () => {
    expect(fn.add(0.1,0.2)).toBeCloseTo(0.3);  //java에서 0.1+0.2는 0.3이 아니다. 몇몇 소수점은 이진법으로 분류시 무한소수로 되기 때문
});                                             //보통 소수점 계산은 ToBeCloseTo를 사용



test("Hello World에 h라는 글자가 있나?", ()=> {
    expect('Hello World').toMatch(/h/i);  //대소문자 구분을 없애기 위해선 뒤에 i붙임
});


test("유저 리스트에 Mike 가 있나?", ()=> {
    const user = "Mike";
    const userList = ["Tom", "Mike", "Kai"]
    expect(userList).toContain(user);  
});

test("Error가 발생할까?",() => {
    expect(()=> fn.throwErr()).toThrow();  //어떤 내용이든 상관없이 에러가 발생하면 PASS
})

//////////////////////////////////////////////////////////////////
//비동기 테스트

test("3초 후에 받아온 이름은 Mike", done => {  //callback함수 쓸때 done 넣어줘야함
    function callback(name) {
        expect(name).toBe("Mike");
        done();                 //무조건 넣어 줘야함
    }
    fn.getName(callback);
});
                                            //try-catch로 감쌌을때
test("3초 후에 받아온 이름은 Mike", done => {  //callback함수 쓸때 done 넣어줘야함
    function callback(name) {
        try {
            expect(name).toBe("Mike");
            done();                 //무조건 넣어 줘야함
        } catch (error) {
            done();
        }
       
    }
    fn.getName(callback);
});

test("3초 후에 받아온 이름은 Mike", () => {  
        return fn.getAge().then(age =>  {   //Promise를 사용할땐 return 무조건 붙여줘야함
            expect(age).toBe(30);
        });
});

    //위를 간단하게 바꾸면

test("3초 후에 받아온 이름은 Mike", () => {
    return expect(fn.getAge()).resolves.toBe(30);
});


test("3초 후에 받아온 이름은 Mike", async () => {   //async-await 함수
    const age = await fn.getAge();
    expect(age).toBe(30);
});

test("3초 후에 받아온 이름은 Mike", async () => {   //async-await 함수(resolves)
    await expect(fn.getAge()).resolves.toBe(30);    //return 대신 await 함수
});