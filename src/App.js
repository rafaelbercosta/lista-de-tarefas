import React from 'react';
import './App.css';
import Login from './pages/Login';
import ToDo from './pages/ToDoList'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ="/" element= {<Login/>}/>
        <Route exact path="/todo" element={ <ToDo/> } />
        </Routes>

    </div>
  );
}

export default App;
