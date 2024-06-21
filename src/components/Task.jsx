import { useState } from 'react'
import './Css/Task.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import TaskItems from './TaskItems';

let count = 0;
const Task = () => {

    const[tasks,setTasks] = useState([]);
    const inputRef = useRef(null);

    const add = ()=>{
        setTasks([...tasks,{no:count++,text:inputRef.current.value,display:""}]);
        inputRef.current.value="";
        localStorage.setItem("tasks_count",count)
    }

    useEffect(()=>{
        setTasks(JSON.parse(localStorage.getItem("tasks")));
        count = localStorage.getItem("tasks_count");
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(tasks);
            localStorage.setItem("tasks",JSON.stringify(tasks)); //to store in localstorage items should be strings
        },100);
    },[tasks])

  return (
    <div className='task'>
      <div className="task-header">Task List</div>
      <div className='task-add'>
        <input ref={inputRef} type='text' placeholder='Add your Task' className='task-input'/>
        <div onClick={()=>{add()}} className="task-add-btn">ADD</div>
      </div><br/>
      <div className="task-list">
        {tasks.map((item,index)=>{
            return <TaskItems key={index}  setTasks={setTasks} no={item.no} display={item.display} text={item.text}/>
        })}
      </div>
    </div>
  )
}

export default Task
