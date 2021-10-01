import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addToTodoList = (todo) => {
    const newTodo = { todo, id: uuidv4() };
    setTodoList((prev) => [...prev, newTodo]);
  };

  const editTodoList = (id, editTodo) => {
    const newTodo = todoList.map((t) => {
      if (t.id === id) {
        t.todo = editTodo;
      }
      return t;
    });
    setTodoList(newTodo);
  };

  const deleteTodoList = (id) => {
    const newTodoList = todoList.filter((t) => t.id !== id);
    setTodoList(newTodoList);
  };

  const todoes = todoList.map((t) => (
    <li key={t.id}>
      <Todo
        todoObj={t}
        editTodoList={editTodoList}
        key={t.id}
        deleteTodoList={deleteTodoList}
      />
    </li>
  ));

  return (
    <div className="TodoList">
      {console.log(todoList)}
      <h1>Todo List</h1>
      <ul>{todoes}</ul>
      <TodoForm addToTodoList={addToTodoList} />
    </div>
  );
};

export default TodoList;
