import React,{useState} from 'react';
import "./childComponent.css";
import Delete from "@material-ui/icons/Delete";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DoneListComponent from "./doneListComponent";


const TodoComponent = (props) => {


const [task, setTask] = useState("")
const [taskList, setTaskList] = useState([])
const [done, setDone] = useState(false)
const [tasksQuantity,setTasksQuantity ] = useState(0)

const formSubmit=(e)=>{
  e.preventDefault()
}

const inputHandler=(e)=>{
setTask(e.target.value)
}
const addBtn=()=>{
    if(task===""){

     alert("Sorry you didn't write task")
   }
    else{
      const addTaskList={
    
    id:Math.floor(Math.random()*1000),
    value:task,
    isCompleted:false
  }
  setTaskList([...taskList,addTaskList])
  setTask("")
}


}

const completedCheck=(e,id)=>{
  e.preventDefault()
  const element=taskList.findIndex(elem=>elem.id===id)
  const newTaskList=[...taskList]
  newTaskList[element]={
    ...newTaskList[element],
    isCompleted:!newTaskList[element].isCompleted
  }
  setTaskList(newTaskList)
newTaskList[element].isCompleted && setTasksQuantity(tasksQuantity+1)
newTaskList[element].isCompleted===false && tasksQuantity>0 && setTasksQuantity(tasksQuantity-1)

}
const deleteBtn=(e,id)=>{
   e.preventDefault()
setTaskList(taskList.filter(elem=>elem.id!==id))
}

const doneListBtn=()=>{
  setDone(!done)

}

  return (
    <div>
    <div className="task_app">
  	<form 
    onSubmit={formSubmit}
    className="input_task">
    <input
    className=" input p-1"
    value={task}
    name="text"
    onChange={inputHandler}
     placeholder="Add todos"
     />
   
    <button 
    onClick={addBtn}
    className=" ml-2 add_btn btn-dark  "
    >Add ToDos</button>

    <button 
    className=" done_btn ml-2  btn-success "
    onClick={doneListBtn}>Done ToDos-{tasksQuantity} </button>
    </form>
    <br/>
    </div>
  <div className="container">
    <ol className="ul_list">
    {taskList!==[] ? taskList.map(item=>(
      <li 
      className={item.isCompleted===false ? "list_items":"list_items_done"}
      key={item.id}

      >{item.value}
      <Delete 
      onClick={e=>deleteBtn(e,item.id)}
      className="delete_icon"/>
      {item.isCompleted===false ? <CheckBoxOutlineBlankIcon
       className="check_icon"
       onClick={(e)=>completedCheck(e,item.id)}/>:
       <CheckBoxIcon 
       onClick={(e)=>completedCheck(e,item.id)} className="check_icon"/>}
      
      </li>
    )):null}

    </ol>
   <div >
    {done ? <DoneListComponent
      doneItems={taskList}
      quantity={tasksQuantity}
      />:null}
      </div>
   </div>
    </div>

  )
}

export default TodoComponent;