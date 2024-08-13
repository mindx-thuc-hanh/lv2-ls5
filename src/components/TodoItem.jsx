import React from 'react'

const TodoItem = (props) => {
    // {
    //     doer: 'Peter',
    //     todo: 'Do homework',
    //     isCompleted: false,
    //   }

    return (

        <div className={
            `${props.todo.isCompleted && 'line-through'} border border-black rounded-md min-w-40 border-solid px-4 py-3 flex justify-center`
        }>
            {props.todo.doer}: {props.todo.todo}

            <button className='bg-blue text-white border-none outline-none rounded-md'>
                Sua
            </button>
            <button className='bg-red text-white border-none outline-none rounded-md'>
                Xoa
            </button>
            <button
                onClick={() => props.toggleComplete(props.todo.doer)}
            >toggle complete</button>
        </div >
    )
}

export default TodoItem