import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
     const [input,setInput]=useState("")
     const [input1,setInput1]=useState("")
    
     const navigate=useNavigate()

    const Home=()=>{
        navigate("/Home")
    }
  
    const inputfield=(e)=>{
    setInput(e.target.value)
    }

    const inputfield1=(e)=>{
    setInput1(e.target.value)
    }

    return (
        <div>

        <input 
        type="email"
        value={input}
        onChange={inputfield}
        placeholder="enter email"
        />

        <input 
        type="password"
        value={input1}
        onChange={inputfield1}
        placeholder="enter password"
        />
    <button onClick={Home}>Login</button>
        </div>
    )
}