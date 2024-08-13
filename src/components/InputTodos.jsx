import React from 'react'

const InputTodos = () => {
    return (
        <div className='flex justify-center mb-10'>
            <input name="doer"/>
            <input name="todo"/>
            <input name="isCompleted" type='checkbox'/>
            <button>
                Them
            </button>
        </div>
    )
}

export default InputTodos