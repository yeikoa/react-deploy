import {useContext} from 'react'
import {Tareas} from '../context/Tareas'
function TaskCard({ task }) {
  const{deleteTask} = useContext(Tareas)
  return (
   
      <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h1 className='text-xl font-bold capitalize text-orange-400'>{task.title}</h1>
        <p className='text-sm'>{task.descripcion}</p>
        <button className
        ='bg-red-400 px-2 py-1 rounded-full mt-4 hover:bg-red-600' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
      </div>
    
  );
}

export default TaskCard;
