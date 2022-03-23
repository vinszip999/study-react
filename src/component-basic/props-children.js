import React from "react";
import ReactDOM from "react-dom";

function Child(props) {
    return <div>{props.children}</div>
}

const Card = function (props) {
    return (
        <div style={{
            width: props.width, height: props.height,
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px"
        }}>
            {props.children}
        </div>
    )
}

const PersonProfile = function (props) {
    const { name, age, gender, profile } = props.person
    return (
        <div className='person' style={props.highlight ? { color: 'red', backgroundColor: 'yellow' } : null}> {/* undefined가 들어가있다. */}
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}
const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}

// Card로 바꾸면 화면에 그려지는 것은 똑같지만 감싸고 있는 것은 Card이다. 
ReactDOM.render(
    <div>
        <Card>Hello</Card>
        <Card>
            <h1>Title</h1>
            <div>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </div>
        </Card>
        <Card width="600px" height="350px">
            <PersonProfile person={anotherPerson}/>
        </Card>
    </div>
    , document.getElementById("root"));