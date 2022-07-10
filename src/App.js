import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Todos from './components/Todos';
import React, { useState } from 'react';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([])

  const onDelete = (todo) => {
    setTodos(todos.filter((td) => {
      return td !== todo;
    }))
  }

  const addTodo = (title) => {
    let sno = todos.length + 1 // this will fetch the index of last element and one to it
    console.log(sno)
    setTodos([...todos, {sno: sno, title: title}])
  }


  return (
    <>
      <Nav title='React' logo={true}/>
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer/>
    </>
  );
}

export default App;
