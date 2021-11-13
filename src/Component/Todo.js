import React from 'react'

export default function Todo({todo}) {
    return (
        <div className="card d-flex flex-row justify-content-around m-2 py-3 border-1 border-primary">
            <div className="fw-bolder fs-4">{todo.taskName}</div>
            <div className="fw-bolder fs-4">{todo.taskTime}</div>
          </div>
    )
}
