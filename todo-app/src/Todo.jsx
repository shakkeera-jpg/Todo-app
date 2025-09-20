import { useState } from "react";

function Todo(){
    const [task,setTask]=useState([])
    const [input,setInput]=useState("")


    const addTask=()=>{
        if(input.trim()==="")return;
        setTask([...task,input]);
        setInput("");
    }

    const deleteTask=(index)=>{
        const newTask=task.filter((_,i)=>i!==index)
        setTask(newTask)
    }

    return (
        <div>
        <h1>To-Do List</h1>
        <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="enter a task"
        />
       <button onClick={addTask}>Add</button>

       <ul>
        {task.map((task,index)=>(
            <li key={index}>
            {task}{" "}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
       </ul>
        </div>
    )

}

export default Todo;