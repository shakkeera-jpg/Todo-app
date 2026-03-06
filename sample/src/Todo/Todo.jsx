import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deletetodo, edittodo } from "./todoSlice";

export default function ToDo(){
    const[task,setTask]=useState("")
    const [editid,setEditid]=useState(null)  
    
    const dispatch=useDispatch()
    const Todo=useSelector((state)=>state.todos)

    const handleaddedit=()=>{
        if(text.trim()===""){
            if(editid===null){
                dispatch(addtodo(task))
            }else{
                dispatch(edittodo({id:editid,newText:task}))
                setEditid(null)
            }

            setTask("")
        }
    }

    return (
        <div>
            <input 
            value={task}
            type="text"
            onChange={(e)=>setTask(e.target.value)}
            />
          <button>{editid===null?"add":"edit"}</button>
            <ul>
          {Todo.map((todo)=>(
            <li key={todo.id}>{todo}
            <button onClick={()=>dispatch(deletetodo(todo.id))}></button>
            <button onClick={()=>{
                setEditid(todo.id)
                setTask(todo.text)
            }}></button>
            </li>
          
          ))}
           </ul>
        </div>
    )
    
}