import React from 'react'
import Todo from './Todo'

function TodoList({
    todos,
    addTodo,
    completeTodo,
    editTodoText,
    deleteTodo
}) {
    return (
        <div>
            <h1>Create Todo</h1>
            <input type='text' />
            {todos.length ? (
                <>
                    <h1>Todo Items</h1>
                    {todos.filter((i) => !i.completed).map((todo) => {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                completeTodo={completeTodo}
                                editTodoText={editTodoText}
                                deleteTodo={deleteTodo}
                            />
                        )
                    })}
                </>
            ) : <h1>No todos added yet.</h1>}
            {/* <Todo /> */}
        </div>
    )
}

export default TodoList
