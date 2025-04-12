import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home";
import Lista from "./Components/Lista/Lista";
export default function app(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/lista" exact element={<Lista/>} />
        </Routes>
        </BrowserRouter>
        </>
    ) 
}