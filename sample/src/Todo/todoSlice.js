import { createSlice } from "@reduxjs/toolkit";


const todoslice=createSlice({
    name:"todos",
    initialState:[],
    reducer:{
       addtodo:(state,action,)=>{
        state.push({id:Date.now(),text:action.payload})
       },

       deletetodo:(state,action,)=>{
        return state.filter((todo)=>todo.id!==action.payload)
       },

       edittodo:(state,action,)=>{
        const {id,newText}=action.payload
        const todo=state.find(t=>t.id===id)
        if(todo){
            todo.text=newText
        }
       }
    }
})
export const {addtodo,deletetodo,edittodo}=todoslice.actions
export default todoslice.reducer