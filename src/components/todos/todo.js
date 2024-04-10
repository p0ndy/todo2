import React, {useState} from "react";


function Todo({todo, deleteHandler, updateHandler}){

    const [isEditing, setIsEditing] = useState(false)
    const [updatedTodo, setUpdatedTodo] = useState()

    const updateTodoState = e => {
        setUpdatedTodo({
          id: todo.id,
          message: e.target.value
        })
    }

    const updateAndReset = (input, e ) => {
        e.preventDefault()
        // call updatehandler
        updateHandler(input)
        setIsEditing(false)
    }

    return(
        <div class="qwe">
            {isEditing ? 
            <form onSubmit={e => updateAndReset(updatedTodo, e)}>
                <input 
                    type="text"
                    defaultValue={todo.message}
                    onChange={updateTodoState}
                />
            </form>
            :
            <p onDoubleClick={() => setIsEditing(true)} >{todo.message}</p>
            }
            <button onClick={() => deleteHandler(todo.id)} class="x">X</button>
        </div>
    )
};

export default Todo;