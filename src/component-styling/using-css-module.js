// import React from 'react'
// import ReactDOM from 'react-dom'
// import buttonStyle from './MyButton.module.css'

// const MyButton = function(props) {
//     // 고유한 클래스 이름이 부여된 것을 확인 가능
//     // {font: "MyButton_font__2DthZ", color: "MyButton_color__1R2rw", size: "MyButton_size__1uFe0", border: "MyButton_border__34FhX"}
//     console.log(buttonStyle)

//     // 객체의 font, color, size, border 속성에 클래스 이름이 저장됨
//     return <button className={`${buttonStyle.font} ${buttonStyle.color} ${buttonStyle.size} ${buttonStyle.border}`}>{props.label}</button>
// }

// ReactDOM.render(<MyButton label="Click Me" />, document.getElementById("root"))

import React from 'react'
import ReactDOM from 'react-dom'
import buttonStyle from './MyButton.module.css'
import cn from 'classnames'

const MyButton = function(props) {
    // 템플릿 문자열 사용이 불편하므로, classnames 모듈 활용
    console.log( cn('foo', 'bar') ) // => 'foo bar'
    console.log( cn('foo', { bar: true }) ) // => 'foo bar'
    console.log( cn({ 'foo-bar': true }) ) // => 'foo-bar'
    console.log( cn({ 'foo-bar': false }) ) // => ''
    console.log( cn({ foo: true }, { bar: true }) ) // => 'foo bar'
    console.log( cn({ foo: true, bar: true }) ) // // => 'foo bar'
    // falsy 값은 모두 무시 (null, false, undefined, 0, 빈 문자열(''))
    console.log( cn(null, false, 'bar', undefined, 0, 1, { baz: null }, '') ) // => 'bar 1'

    const { font, color, size, border } = buttonStyle;
    return <button className={cn(font, color, size, border)}>{props.label}</button>
}

ReactDOM.render(<MyButton label="Click Me" />, document.getElementById("root"))

