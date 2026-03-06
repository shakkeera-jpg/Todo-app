import { useState } from "react";
function IsDarkMode(){
    const[isDarkMode,SetIsDarkMode]=useState(false)

    const Handleclick=()=>{
        SetIsDarkMode(!IsDarkMode)

        return (
            <div
            style={{
                backgroundColor:IsDarkMode ? "#1e1e1e": "#fff",
                color:isDarkMode ? "#fff": "#1e1e1e",
                display:"flex",
                flexDirection:"column",
                textAlign:"center",
                alignItems:"center",
                justifyContent:"center",
                padding:"20px"
               }}
            >
                <h1>{IsDarkMode?"Dark Mode":"Light Mode"}/</h1>
                <button onClick={Handleclick} style={{
                    color:"white",
                    padding:"12px,14px",
                    backgroundColor:"green",
                    borderRadius:"18px",
                    cursor:"pointer",
                    marginTop:"20px",
                    border:"none"
                }}> switch to{IsDarkMode ? "Light":"Dark"}Mode</button>
            </div>
        )
    }
}

export default IsDarkMode