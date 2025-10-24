import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
function Task(){
    return (
        
    <BrowserRouter>
    <Routes>
 <Route path="/" element={<Navigate to="/registration" />} />
<Route path="/Registration" element={<Registration/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>

    )
}

export default Task