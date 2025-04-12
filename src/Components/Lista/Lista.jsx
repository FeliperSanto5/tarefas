import { Link } from "react-router-dom"
export default function Lista(){

    return(
        
        <div className="containerlista">
        <Link to="/" className="btn-back">Voltar</Link>
            <header>
            <div className="txt-title">Lista de Tarefas</div>
            <div className="txt-sub">Registre suas tarefas</div>
            <div className="total">Total de tarefas </div>
            </header>

            <input type="text" placeholder="Informe a Tarefa" />
            <textarea name="" id="description"></textarea>
            <button className="btn-add">Adicionar Tarefa</button>
            <ul>
                <li>
                    <div className="top">
                    <div className="title">Estudar React</div>
                    <div className="actions">
                        <button>Deletar</button>
                        <button>Editar</button>
                    </div>
                    </div>

                    <div className="bottom">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas, deleniti doloremque earum, atque ipsa, accusamus magni quae voluptatum quasi sit animi expedita facere porro quos incidunt inventore nam rerum!
                        </p>
                    </div>
                </li>
                
            </ul>

         </div>
        


        
    )
}