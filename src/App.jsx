import { useState } from 'react'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import InputTodos from './components/InputTodos'




function App() {
  const [todos, setTodos] =
    useState([{
      doer: 'Peter',
      todo: 'Do homework',
      isCompleted: true,
    },
    {
      doer: 'Alice',
      todo: 'Do housechores',
      isCompleted: false,

    }, {
      doer: 'Bob',
      todo: 'Go to work',
      isCompleted: false,
    },]
    )



  // 


  /// data down -> 

  // lifting up
  function toggleComplete(doer) {
    const newTodos = todos.map(todo => {
      if (todo.doer === doer) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      } else {
        return todo
      }
    })
    setTodos([...newTodos])
  }
  function clickHandler(input) {
    console.log(input)

  }


  // 

  return <div
    onClick={(e) => clickHandler('dasdsadsa')} // 
  >
    <InputTodos setTodos={setTodos} />
    <TodoList todos={todos} toggleComplete={toggleComplete} />
  </div>
}

export default App
