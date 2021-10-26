import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./styles.css";
import { checkTodo, deleteTodo, getTodos } from "../../../actions/actions";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const email = localStorage.getItem("googleEmail");

  useEffect(() => {
    getTodos(email).then((res) => {
      let arr = [];
      for (let i = 0; i < res.length; i++) {
        arr.push({ text: res[i].TodoName, isComplete: res[i].Status });
      }

      setTodos(arr);
      console.log(todos);
    });
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoText, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    deleteTodo(email, todoText);
    setTodos((prev) =>
      prev.map((item) => (item.text === todoText ? newValue : item))
    );
  };

  const removeTodo = (name) => {
    const removedArr = [...todos].filter((todo) => todo.text !== name);
    deleteTodo(email, name);
    setTodos(removedArr);
  };

  const completeTodo = (name) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.text === name) {
        todo.isComplete = !todo.isComplete;
        let c = todo.isComplete ? 1 : 0;
        checkTodo(email, name, c);
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1 className="h1_todo">Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
