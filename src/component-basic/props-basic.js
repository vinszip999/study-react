import React from "react";
import ReactDOM from "react-dom";

// 배열 비구조화 할당
const arr = [100, 200]
// const v1 = arr[0]
// const v2 = arr[1]
const [v1, v2] = arr
const [v3] = arr

// 객체 비구조화 할당
const user = { name: "John", age: 20 }
const { name: n, age } = user

function f1({ name, age }) {
    console.log(name, age)
}

function f2({ user }) {
    const name = user.name
    const age = user.age
    console.log(name, age)
}


const ComponentWithProps = function (props) {
    // 문법적인 오류는 안나지만, props는 값을 읽는 용도로만 써주여아 한다.
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

function Greeting(props) {
    return <h1>Hello, {props.name}</h1>
}


// 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function ({ name, age, gender, profile, highlight }) {
    return (
        <div className='person' style={highlight ? { color: 'red', backgroundColor: 'yellow' } : null}> {/* undefined가 들어가있다. */}
            <h1>Profile</h1>
            <img src={profile}/>
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

ReactDOM.render(
    <div>
        {/* <ComponentWithProps value="Hello"/>
        <ComponentWithProps value={1} />
        <ComponentWithProps value={ {a: 1, b: "React"}} />
        <ComponentWithProps value={() => { }} /> */}
        <Greeting name="김미림" />
        <PersonProfile name='John' age={35} gender='male'
            profile='https://randomuser.me/api/portraits/men/75.jpg' 
            highlight/>
        <PersonProfile {...anotherPerson} highlight />

    </div>,
    document.getElementById("root")
);
