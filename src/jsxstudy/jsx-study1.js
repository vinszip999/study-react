import React from "react";
import ReactDOM from "react-dom";

const name = "이유빈";
const element = <h1>Hello {name}</h1>

ReactDOM.render(element, document.getElementById("root"));

// const div1 = <div>
//     {true}
//     {false}
//     {undefined}
//     {null}

// </div>

// ReactDOM.render(div1, document.getElementById("root"));



// const unreadMessages = ["메세지1", "메세지2"]
// const div2 = <div>
//     <h1>Hello!</h1>
//     {
//         unreadMessages.length > 0 &&
//         <h2>You have {unreadMessages.length} unread messages.</h2>
//     }
//     {
//         unreadMessages.length > 0 ? // ? 삼항 연산자
//         <h2>You have {unreadMessages.length} unread messages.</h2> : 
//         // null
//         <h2>메세지를 다 읽으셨습니다.</h2>
//     }

// </div>

// ReactDOM.render(div2, document.getElementById("root"));


// 조건문
function conditionalRender(age) {
    if (age >= 20) {
        return <div>성인</div>
    } else {
        return <div>미성년자</div>
    }
}

<h1 style={{color: "red", backgroundColor: "lightblue", fontSize: "30px"}}>Hello Style!</h1>
// * background-color, font-size가 아닌, -(하이픈) 부분을 붙이고 다음 문자를 대문자로 써야한다!!

