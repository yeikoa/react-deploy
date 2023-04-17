import { useState,useContext } from "react";
import {Tareas} from '../context/Tareas'
function TaskForm({  }) {

  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(Tareas)
  const valorTaskForm = useContext(Tareas)
  console.log(valorTaskForm);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle ('')
    setDescripcion('')
  };

  return (
    <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="bg-gray-600 p-10 mb-4">
    <h1 className="text-white py-3 text-center font-bold text-xl">Crear tareas</h1>
      <input className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea className="bg-slate-300 p-3 w-full mb-2" placeholder="Descripcion tarea"
      onChange={(e)=>setDescripcion(e.target.value)} value={descripcion}></textarea>
      
      <button className="w-full bg-slate-800 text-white rounded-full">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
