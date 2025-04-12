import { Link } from "react-router-dom"
import logoApp from "../../assets/todo.svg"
export default function Home(){
    return(
        <div className="container">
             <img src={logoApp} alt=""/>
             <Link to="/lista" className="btn-home">Entrar</Link>
        </div>
       )
    }