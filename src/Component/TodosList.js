
import React from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";

export default function TodosList(props) { 


  // const UpComing = () => {
  //   console.log("upcoming Todos");
    
  //   const TodoUpcomming = props.todos
    

  //   let sort = TodoUpcomming.sort((a,b) => new Date(...a.taskDate.split('-').reverse())-new Date(...b.taskDate.split('-').reverse()))
  // //console.log(sort)

  // sort.slice(0,3).map((todo)=>{
  //   console.log(todo)
  //   return todo
  // })   
  // };

  // const All = () => {
  //   console.log("All");
  //   const TodoUpcomming = props.todos
  //   //console.log(TodoUpcomming.taskDate)
  //   let sort = TodoUpcomming.sort((a,b) => new Date(...a.taskDate.split('-').reverse())-new Date(...b.taskDate.split('-').reverse()))
  
  //   sort.map((todo)=>{
  //     console.log(todo)
  //     return todo
  //   })
  // };

  
  return (
    <div className="col-4 my-5 mx-auto">
      <div className="card shadow py-4">
        <div className="row g-2">
          <div className="col-md d-flex justify-content-center">
            <Link
            name="upcoming"
              type="submit"
              className="btn btn-outline-success "
               to="/Upcoming"
            >
              Upcoming
            </Link>
          </div>

          <div className="col-md d-flex justify-content-center">
            <Link
              type="submit"
              className="btn btn-outline-success "
              to="/All"
            >
              All
            </Link>
          </div>
        </div>
        <hr></hr>
        <div className="mx-2 overflow-auto" style={{ height: "35rem" }}>
          {props.todos.length === 0
            ? ""
            : props.todos.map((todo) => {
                console.log(todo.taskNo);
                return <Todo todo={todo} key={todo.taskNo} />;
              })}
              {}
        </div>
      </div>
    </div>
  );
}
