import TaskCard from './TaskCard'
import {useContext} from 'react'
import {Tareas} from '../context/Tareas'
function TaskList() {

  const {tasks} = useContext(Tareas)

  if (tasks.length ===0){
    return <h1 className='text-white text-center p-10 bg-orange-500 text-4xl'>No hay nada</h1>
  }
  return (
    <div className='grid grid-cols-4 gap-2 '>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
