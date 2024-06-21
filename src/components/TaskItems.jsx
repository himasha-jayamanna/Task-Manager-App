import './Css/TaskItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const TaskItems = ({no,display,text,setTasks}) => {

    const deleteTask = (no)=>{
        let data =JSON.parse(localStorage.getItem("tasks"));
        data = data.filter((task)=>task.no!==no);
        setTasks(data);
    }

    const toggle=(no)=>{
        let data =JSON.parse(localStorage.getItem("tasks"));
        for(let i=0;i<data.length;i++){
            if (data[i].no===no) {
                if(data[i].display===""){
                    data[i].display="line-through";
                }else{
                    data[i].display="";
                }
                break;
            }
        }
        setTasks(data);
    }

  return (
    <div className='taskitems'>
      <div className={`taskitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={not_tick} alt=''/>:<img src={tick} alt=''/>}
        <div className="taskitems-text">{text}</div>
      </div>
      <img className='taskitems-cross-icon' onClick={()=>{deleteTask(no)}} src={cross} alt=''/>
    </div>
  )
}

export default TaskItems
