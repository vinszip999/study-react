import React from "react";
import ReactDOM from "react-dom";

const ComponentWithProps = function(props){
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

ReactDOM.render(
    <ComponentWithProps value="Hello"/>,
    document.getElementById("root")
);
