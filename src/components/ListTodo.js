import React, { Fragment, useState, useEffect} from "react"
import EditTodo from "./EditTodo"

const ListTodo = () => {

    const [todos, setTodos] = useState([])
    // delete todo func

    async function deleteTodo(id) {
        try{
            const res = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE",
            })

            setTodos(todos.filter(todo => todo.todo_id !== id))
            console.log(res)
        } catch (err) {
            console.error(err.message)
        }
    }


    async function getTodos () {
        const res = await fetch("http://localhost:5000/todos")

        const todoArray = await res.json()

        // console.log(todoArray)
        setTodos(todoArray)
    }

    useEffect (() => {
        getTodos()
    }, [])

    console.log(todos)
    return (
    <Fragment>
    <table className="table mt-5">
        <thead>
        <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
            todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td><EditTodo todo={todo}/></td>
                    <td><button className="btn btn-danger" 
                    onClick={() => deleteTodo(todo.todo_id)}>
                    Delete
                    </button></td>
                </tr>
            ))
        }
        </tbody>
    </table>
   </Fragment>
    )
}

export default ListTodo