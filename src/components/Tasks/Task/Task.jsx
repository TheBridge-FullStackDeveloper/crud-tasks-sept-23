import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { Link } from 'react-router-dom'

const Task = () => {
    const {tasks,deleteTask} = useContext(GlobalContext)

    const task = tasks.map(task =>{
        return <div key={task._id}>
            <p>{task.title}</p>
            <Link to={`/editTask/${task._id}`}>
            <button>Editar</button>
            </Link>
            <button onClick={()=>deleteTask(task._id)}>Eliminar</button>
        </div>
    })
  return (
    <div>{task}</div>
  )
}

export default Task