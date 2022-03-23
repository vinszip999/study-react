import React, {useState} from "react";
import ReactDOM from "react-dom";

function Counter(props){
    const [count, setCount] = useState(0) // React.useState(0)로 바로 React. 붙여서 import 해줘도 됨.
    // const [ myname, setMyName ] = useState("John") // set을 붙여야 한다.
}
ReactDOM.render(
    <Counter/>
    ,
    document.getElementById("root")
);
