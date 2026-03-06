import { configureStore } from "@reduxjs/toolkit";
import todosreducer from "./todoSlice"

const store=configureStore({
    reducer:{
        todos:todosreducer
    }
})

export default store