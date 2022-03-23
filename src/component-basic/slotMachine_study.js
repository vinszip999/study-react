import React from "react";
import ReactDOM from "react-dom";

function SlotMachine(props) { // (s1, s2, s3)로 비구조화 할당 가능
    const {s1, s2, s3} = props
    const allSame = s1 === s2 && s2 === s3
    const allSeven = allSame && s1 === "7"
    return (
        <div>
            <div>{s1} {s2} {s3}</div>
            {
                allSame && <p style={allSeven ? {color: "red"} : null}>축하합니다.</p>
            }
        </div>
    )
}

ReactDOM.render(
    <div>
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" />
    </div>,
    document.getElementById("root")
);
