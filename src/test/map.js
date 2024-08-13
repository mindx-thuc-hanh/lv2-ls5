const todos = [{
    doer: 'Peter',
    todo: 'Do homework',
    isCompleted: false,
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


const mapTodos = todos.map(todo => {
    return {
        ...todo,
        render: `<div>${todo.doer}: ${todo.todo}</div>`
    }
})


console.log(mapTodos)
