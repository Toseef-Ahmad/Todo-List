import React, { useState } from 'react';
import './Todo.css';

const Todo = (props) => {
  const { todo, id } = props.todoObj;
  const [editTodo, setEditTodo] = useState(todo);

  const [isActive, setIsActive] = useState(false);

  const editForm = (
    <input
      className="Todo-edit-form"
      type="text"
      value={editTodo}
      onChange={() => setEditTodo(event.target.value)}
    />
  );

  const handleApply = (event) => {
    setIsActive(!isActive);
    props.editTodoList(id, editTodo);
  };

  const handleDelete = () => {
    props.deleteTodoList(id);
  };

  const applyFormButton = <button onClick={handleApply}>Apply</button>;

  if (isActive) {
    return (
      <>
        <div className="Todo">
          <div className="Todo-edit-form">
            {editForm}
            {applyFormButton}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="Todo">
          <h2>{editTodo}</h2>
          <div className="Todo-buttons">
            <button onClick={() => setIsActive(!isActive)} name="edit">
              <i class="fas fa-pen"></i>
            </button>
            <button onClick={handleDelete} name="delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Todo;
