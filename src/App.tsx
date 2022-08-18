import React from 'react';
import { Provider } from 'react-redux';

import Header from "./applications/Header"
import Taskbroad from './applications/Tasksboard';
import "./App.scss"
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App" >
        <Header></Header>
        <Taskbroad></Taskbroad>
      </div>
    </Provider>
  );
}

export default App;
