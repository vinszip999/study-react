import React from "react";
import ReactDOM from "react-dom";

// function FirstComponent() {
//     return <div>first component</div>
// }

function HelloWorld() {
    return <h1>Hello, world!</h1>
}

ReactDOM.render(
    // <FirstComponent/>,
    <HelloWorld />,
    document.getElementById("root")
);


// 화살표 함수는 본질적으로 "익명함수"이다.
// *소괄호를 생략할 수 있는 경우는 파라미터가 "1개" 일 때만 가능하다* 

const add = (a, b) => { // const는 let으로 해주어도 상관 없다. 
    return a + b
}

const double = a => a * 2 // {} 중괄호를 안쓰면 리턴 문을 쓸 필요가 없다.

const sayHello = () => console.log("Hello") // () 소괄호만 있는 이유는 "파라미터가 없기 때문"이다. 


