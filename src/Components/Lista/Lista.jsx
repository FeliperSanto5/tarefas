import { useState } from "react";
import { Link } from "react-router-dom";

export default function Lista() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function handleAddTarefa() {
    if (titulo.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTitulo("");
    setDescricao("");
  }

  return (
    <div className="containerlista">
      <Link to="/" className="btn-back">Voltar</Link>

      <header>
        <div className="txt-title">Lista de Tarefas</div>
        <div className="txt-sub">Registre suas tarefas</div>
        <div className="total">Total de tarefas: {tarefas.length}</div>
      </header>

      <input
        type="text" placeholder="Informe a Tarefa" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
      <textarea name="" id="description" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
      <button className="btn-add" onClick={handleAddTarefa}>Adicionar Tarefa</button>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <div className="top">
              <div className="title">{tarefa.titulo}</div>
              <div className="actions">
                <button>Deletar</button>
                <button>Editar</button>
              </div>
            </div>
            <div className="bottom">
              <p>{tarefa.descricao}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}