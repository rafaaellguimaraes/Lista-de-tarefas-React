import React, { useEffect, useState } from 'react';
// Tarefa
import Form from './Form/index';
import Tarefas from './Tarefas';
import './Main.css';

function Main() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefa, setTarefa] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const tarefasFromLocalStorage = JSON.parse(localStorage.getItem('tarefa'));
    if (!tarefasFromLocalStorage) {
      setTarefa(tarefasFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefa', JSON.stringify(tarefa));
  }, [tarefa]);

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
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        novaTarefa={novaTarefa}
      />
      <Tarefas
        tarefa={tarefa}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
export default Main;
