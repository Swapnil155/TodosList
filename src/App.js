import "./App.css";
import { AddTodo } from "./Component/AddTodo";
import TodosList from "./Component/TodosList";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  let sort = todos.sort(
    (a, b) =>
      new Date(...a.taskDate.split("-").reverse()) -
      new Date(...b.taskDate.split("-").reverse())
  );

  console.log(sort.slice(0,3));

  const addTodo = (name, desc, date, time) => {
    console.log("Adding Todos", date, time);
    let taskNo;
    if (todos.length === 0) {
      taskNo = 0;
    } else {
      taskNo = todos[todos.length - 1].taskNo + 1;
    }
    const myTodo = {
      taskNo: taskNo,
      taskName: name,
      taskDesc: desc,
      taskDate: date,
      taskTime: time,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <div className="container">
          <div className="row">
            <AddTodo addTodo={addTodo} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <>
                      <TodosList todos={sort.slice(0,3)} />
                    </>
                  );
                }}
              />

              <Route
                exact
                path="/Upcoming"
                render={() => {
                  return (
                    <>
                      <TodosList todos={sort.slice(0,3)} />
                    </>
                  );
                }}
              />
              <Route
                exact
                path="/All"
                render={() => {
                  return (
                    <>
                      <TodosList todos={sort} />
                    </>
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
