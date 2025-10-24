import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration(){
    const [input,setInput]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const Login=()=>{
        navigate("/Login")
    }
   const Inputfield1=(e)=>{
    setInput(e.target.value)
   }
   const Inputfield2=(e)=>{
    setEmail(e.target.value)}

    const Inputfield3=(e)=>{
    setPassword(e.target.value)}
    return (
        <div>
          <div>
       <input 
       type="text"
       value={input}
       onChange={Inputfield1}
       placeholder="enter your name"
       />
</div>  
     <div>
       <input 
       type="email"
       value={email}
       onChange={Inputfield2}
       placeholder="enter your email "
       />
</div>
<div>
       <input 
       type="password"
       value={password}
       onChange={Inputfield3}
       placeholder="create a password"
       />
</div>
       <button onClick={Login}>Submit</button>
        </div>
    )
}