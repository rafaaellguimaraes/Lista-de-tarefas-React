import React, { useState } from 'react';
// Form
import { FaPlus } from 'react-icons/fa';
// Tarefa
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

function Main() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefa, setTarefa] = useState([]);
  const [index, setIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novasTarefas = [...tarefa];
    if (index === -1) {
      setTarefa([...novasTarefas, novaTarefa.trim()]);
      setNovaTarefa('');
    } else {
      novasTarefas[index] = novaTarefa.trim();
      setTarefa([...novasTarefas]);
      setIndex(-1);
      setNovaTarefa('');
    }
  };

  const handleChange = (e) => {
    setNovaTarefa(e.target.value);
  };

  const handleEdit = (e, indx) => {
    setIndex(indx);
    setNovaTarefa(tarefa[indx]);
  };

  const handleDelete = (e, indx) => {
    const novasTarefas = [...tarefa];
    novasTarefas.splice(indx, 1);
    setTarefa([...novasTarefas]);
  };

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>
      <form onSubmit={handleSubmit} action="#" className="form">
        <input onChange={handleChange} type="text" value={novaTarefa} />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
      <ul className="tarefas">
        {tarefa.map((tarefas, indx) => (
          <li key={tarefas}>
            {tarefas}
            <span>
              <FaEdit onClick={(e) => handleEdit(e, indx)} className="edit" />
              <FaWindowClose onClick={(e) => handleDelete(e, indx)} className="delete" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
