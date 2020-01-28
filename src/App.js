import React, {useState} from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
    const [todos, setTodos] = useState([
        { text: "Learn about React"},
        { text: "Meet friend for lunch" },
        { text: "Build really cool todo app" },
        { text: "Die" }
    ]);

    const addTodo = (todo) =>{
        setTodos([...todos, {text:todo}] );
    };

    return (
      <div className="parent-container">
          <div className="container top-container">
              <div className="app">
                  <div className="todoform">
                      <TodoForm addTodo={addTodo} />
                      <Todos todos={todos} />
                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;
