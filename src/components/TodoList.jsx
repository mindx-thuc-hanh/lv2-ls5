import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    return (
        <div className='w-100 flex justify-center flex-col items-center gap-4'>
            {
                props.todos.map(
                    (todo,index) =>
                        <TodoItem
                        key={index}
                            toggleComplete={props.toggleComplete}
                            todo={todo} />)
            }

            {/* ~ */}
            {/* <TodoItem todo={props.todos[0]} />
            <TodoItem todo={props.todos[1]} />
            <TodoItem todo={props.todos[2]} /> */}
        </div>
    )
}

export default TodoList