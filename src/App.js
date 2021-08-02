import React, { Fragment } from 'react';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Fragment>
        <div className="container">
        <InputTodo />
        <ListTodo />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
