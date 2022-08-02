import React from 'react';
import Header from "./applications/Header"
import Taskbroad from './applications/Tasksboard';
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Taskbroad></Taskbroad>
    </div>
  );
}

export default App;
