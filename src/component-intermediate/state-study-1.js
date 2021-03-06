import React, { useState } from "react";
import ReactDOM from "react-dom";


function Counter(props) {
    const [count, setCount] = useState(0) // React.useState(0)로 바로 React. 붙여서 import 해줘도 됨.
    // const [ myname, setMyName ] = useState("John") // set을 붙여야 한다.

    return (
        <div>
            <h1>{count}</h1>
            {/* <button onclick={() => setCount(count + 1)}>증가</button>  html 문법 방식!! */}
            <button onClick={() => setCount(prev => prev + 1)}>증가</button> {/* 화살표 함수 */}

            <button onClick={() => setCount(function (prev) { return prev - 1 })}>감소</button> {/*이런 형태로 써주는 것이 좋다!*/}
            {/* <button onClick={() => setCount(count - 1)}>감소</button> */}

            {/* <button onkeypress={() => setCount(count + 1)}>증가</button> html 문법 방식!!*/}
            {/* <button onKeyPress={() => setCount(count + 1)}>증가</button> */}

        </div>
    )
}
ReactDOM.render(
    <Counter />
    ,
    document.getElementById("root")
);
