import React from 'react'

const TodoForm = ({addTodo}) =>{
    let input;

    return(
        <div className={"container"}>
            <div className="app-title text-center">Another ToDo App</div>
            <div className={"form-group row "}>
                <input className={"form-control col-md-8 "} type={"text"} ref={node => {input = node;}} placeholder={"Add a ToDo"}/>
                <input className={"form-control btn-primary col-md-4 submit-button"} type={"submit"} value={"Add"} onClick={() => {
                    addTodo(input.value);
                    input.value='';
                }}/>
            </div>
        </div>
    )
};

export default TodoForm;