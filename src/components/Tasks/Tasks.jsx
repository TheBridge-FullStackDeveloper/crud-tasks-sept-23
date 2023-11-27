import React, { useContext, useEffect } from "react";
import Task from "./Task/Task";
import { GlobalContext } from "../../context/GlobalState";
import AddTask from "./AddTask/AddTask";

const Tasks = () => {
  const { getTasks } = useContext(GlobalContext);
  useEffect(()=>{
    getTasks()
  },[])
  return (
    <div>
      <h1>Tasks</h1>
      <AddTask/>
      <Task />
    </div>
  );
};

export default Tasks;
