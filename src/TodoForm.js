import React from 'react'

const TodoForm = ({addTodo}) =>{
    let input;

    return(
        <div>
            <input type={"text"} ref={node => {input = node;}}/>
            <input type={"submit"} />
        </div>
    )
};

export default TodoForm;