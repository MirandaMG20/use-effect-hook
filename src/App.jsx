import { useEffect, useState } from 'react'
import TodoList from './components/TodoList'

function App() {

  // Create
  const [todos, setTodos] = useState([]) // todos = [{}, {}, {}]

  const addTodo = (e) => {
    // creating our object to insert into our array
    const newTodo = {
      text: e.target.value,
      id: Date.now(),
      completed: false
    }
    setTodos([ // updating my array state
      ...todos, // we copy the array 
      newTodo // adding new object to the array
    ])
    e.target.value = '' // clear out the input
  }

  // Complete
  const completeTodo = (id, e) => {
    const todosCopy = [...todos] // shallow copy of the array
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].completed = !todoCopy[indexOfTodo].completed
    setTodos([...todosCopy])
  }

  // Edit
  const editTodoText = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].text = e.target.value
    setTodos([...todosCopy])
    e.target.value = ''
  }

  // Delete
  const deleteTodo = () => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy.splice(indexOfTodo, 1)
    setTodos([...todosCopy])
  }

  return (
    <>
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
    </>
  )
}


export default App








// https://devtalla.com/post/how-to-build-a-react-counter-app

// function App() {

//   const [count, setCount] = useState(0)
//   const [evenCounter, setEvenCounter] = useState(0)

//   useEffect(() => {
//     console.log("I'm just a random log")
//   }, [evenCounter])

//   const handleIncrement = () => { 
//     if (count % 2 === 0) { // it will only count when a even number is counted
//       setEvenCounter(evenCounter + 1)
//       // setEvenCounter((evenCounter) => evenCounter + 1)
//     }
//     setCount(count + 1)
//     // setCount((count) => count + 1)
//   }

//   const handleDecrement = () => {
//     setCount((count) => count - 1)
//   }

//   const resetCount = () => {
//     setCount(0)
//   }

//   return (
//     <>
//       <h1>useEffect Hook</h1>
//       <h3> {count} </h3>
//       <br />
//       <h3> {evenCounter} </h3>
//       <button onClick={handleIncrement}> + </button>
//       <button onClick={handleDecrement}> - </button>
//       <button onClick={resetCount}> Reset </button>
//     </>
//   )
// }