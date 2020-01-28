import React, {useState} from 'react';
import './App.css';
import TodoForm from "./TodoForm";

function App() {
    const [todos, setTodos] = useState([
        { text: "Learn about React"},
        { text: "Meet friend for lunch" },
        { text: "Build really cool todo app" }
    ]);

  return (
      <div className="parent-container">
          <div className="container top-container">
              <div className="app">
                  <div className="todoform">
                      <TodoForm />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
