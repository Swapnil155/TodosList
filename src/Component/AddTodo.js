import React, {useState} from "react";

export const AddTodo = ({addTodo}) => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [time,setTime] = useState("")
  const [date, setDate] = useState("")

  const SubmitEvent = (e) =>{
    e.preventDefault()
    //console.log("submit from")

    if(!name || !desc || !date || !time){
      alert("Please fill the all values")
    }
    else{
      addTodo(name, desc, date, time)
      setName("")
      setDesc("")
      setDate("")
      setTime("")
    }

  }
  return (
    <div className="col-8 my-5  justify-content-center">
      <div className="d-flex m-5 justify-content-center">
        <h1> Task Craetor</h1>
      </div>
      <div className="card p-3 shadow">
        <form onSubmit={SubmitEvent}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Task Name
            </label>
            <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Task Description
            </label>
            <textarea
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
            />
          </div>
          <div className="row g-2">
            <div className="col-md">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Task Date
              </label>
              <input
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div className="col-md">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Task Time
              </label>
              <input
                value={time}
                onChange={(e)=>setTime(e.target.value)}
                type="time"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md mt-5 d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-success ">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
