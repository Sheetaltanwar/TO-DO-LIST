import { useState } from "react"
import styles from "./Inputin.module.css"

function Inputin({handleNewItem}){

  let[todoName,setTodoName]=useState("")
  let[dueDate,setDueDate]=useState("")

  let handleNameChange=(event)=>{
     setTodoName(event.target.value)

  }
  let handleDateChange=(event)=>{
       setDueDate(event.target.value)
  }

  let handleButtonClicked=()=>{
     handleNewItem(todoName,dueDate)
     setTodoName("")
     setDueDate("")
  }
    return <div class="container ">
    <div className="row" >
      <div class="col"><input type="text" placeholder="Enter Todo here" onChange={handleNameChange} ></input></div>
      <div class="col"><input type="date" onClick={handleDateChange} ></input></div>
      <div class="col"><button type="button" class="btn btn-success" onClick={handleButtonClicked}>Add</button></div>
    </div>
  </div>
}
export default Inputin;