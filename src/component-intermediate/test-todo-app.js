// 도전 과제)
// 1. ES6 문법 공부하기 (중요도 : 3) [증가][감소] [삭제]
//   * 증가 버튼 누르면 중요도 1씩 상승하고, 감소 누르면 중요도 1씩 감소
//   * 중요도는 음수가 될 수 없으므로 0까지만 감소 가능
//   * 중요도가 5 이상이면 볼드 처리
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TodoItem = function({ todo: { completed, text }, idx, handleTodoStatusToggle, handleTodoRemove }) {
    const [count, setCount] = useState(0)
    const increase = () => setCount(prev => prev + 1)
    const decrease = () => setCount(prev => prev - 1)
    
    // const add = (amount) => setCount(prev => prev + amount)
    return (
        <div>
            <span style={completed ? { textDecoration: 'line-through' } : null}
            // 삼항 연산자 사용해서 line-through 밑줄 그어주고 있음. 
                onClick={() => handleTodoStatusToggle(idx)}>
                {text}
            </span>
            {/* &nbsp; */}
            &nbsp;(중요도 : {count})&nbsp;
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>&nbsp;
            <button onClick={() => handleTodoRemove(idx)}>삭제</button>
            {
                count == 5
                ? <h1 style={{color: "red"}}></h1>
                : null
            }
        </div>
    )
}
// const Counter = function (props) {   
//     const [count, setCount] = useState(0)
//     const increase = () => setCount(prev => prev + 1)
//     const decrease = () => setCount(prev => prev - 1)
//     // Q1) 특정 숫자 값(amount)을 파라미터로 전달받아 count에 더해주는 add 함수 정의
//     const add = (amount) => setCount(prev => prev + amount)

//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={increase}>+</button>
//             <button onClick={decrease}>-</button>
//             {/* Q2) 5, 10만큼 증가시키는 버튼을 추가하여 Q1에서 정의한 add 메소드를 사용하도록 수정 */}
//             {/* 밑에 코드는 무한 반복으로 실행되서 오류남!! */}
//             {/* <button onClick={add(5)}>+5</button> */}
//             <button onClick={() => add(5)}>+5</button>
//             <button onClick={() => add(10)}>+10</button>
//         </div>
//     )
// }

const TodoList = function({ todos, handleTodoStatusToggle, handleTodoRemove }) {
    return (
        <ol>
            {
                todos.map((todo, idx) => {
                    return (
                        <li key={idx}>
                            <TodoItem idx={idx} todo={todo}
                                handleTodoStatusToggle={handleTodoStatusToggle}
                                handleTodoRemove={handleTodoRemove} />
                        </li>
                    )
                })
            }
        </ol>
    )
}

const TodoAdder = function({ handleTodoAdd }) {
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)
    return (
        <div>
            <input type='text' onChange={handleChange} value={input} /> 
            {/* onChange는 react용 태그이다. */}
            <button onClick={() => {
                handleTodoAdd({ completed: false, text: input })
                setInput("")
            }}>추가</button>
        </div>
    )
}

const TodoApp = function(props) {
    const [todos, setTodos] = useState([
        { completed: false, text: '리액트 공부하기' },
        { completed: true, text: 'ES6 문법 공부하기' }
    ])

    const handleTodoAdd = newTodo => setTodos(todos => todos.concat(newTodo))
    const handleTodoStatusToggle = todoIndex => {
        setTodos(todos => {
            return todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        })
    }
    const handleTodoRemove = todoIndex => {
        setTodos(todos => {
            return todos.filter((_, idx) => {
                return idx !== todoIndex
            })
        })
    }
    

    return (
        <div>
            <TodoList todos={todos}
                handleTodoStatusToggle={handleTodoStatusToggle}
                handleTodoRemove={handleTodoRemove}/>
            <TodoAdder handleTodoAdd={handleTodoAdd} />
        </div>
    )
}

ReactDOM.render(<TodoApp />, document.getElementById("root"))