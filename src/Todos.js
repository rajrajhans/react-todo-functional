import React from 'react';

const Todos = ({todos}) => {
    return (
        <div className={"todo-list"}>
                {
                    todos.map((todo, index) => (
                        <Todo todo={todo} key={index} index={index}/>
                    ))
                }
        </div>
    );
};

const Todo = ({todo}) =>(
    <div className="todo">
        {todo.text}
    </div>
);

export default Todos;
