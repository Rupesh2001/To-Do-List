import React from 'react'
import { useState } from 'react'
const Todolist = () => {
    const [tasks,setTasks]=useState(["Eat breakfast", "Sleep", "Repeat"]);
    const [newtask, setNewtask]=useState("");
    function handleInputchange(event){
        setNewtask(event.target.value)
    }
    function addTask(){
        if(newtask.trim()!=="")
        setTasks(t=>[...t, newtask]);
        setNewtask("");
            }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks); 
    }
    function moveUp(index){
        if(index > 0)
        {
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    function moveDown(index)
    {
        if(index <tasks.length - 1)
            {
                const updatedTasks =[...tasks];
                [updatedTasks[index],updatedTasks[index+1]]=
                [updatedTasks[index+1],updatedTasks[index]];
                setTasks(updatedTasks)
            }

    }
    return (

   <>
    <div className="container">
        
        <h1>TO DO LIST</h1>
        <input
        value={newtask}
        placeholder='Enter your todo list'
        type="text"
        onChange={handleInputchange}/>
        <button
        className="add-button"
         onClick={addTask}>ADD</button>
     
    <ol>
       {tasks.map((task, index)=>
       <li key={index}>
        <span className="spantext">{task}</span>
        <button className="delete-button" onClick={()=>deleteTask(index)}>DELETE</button>
        <button className="moveup" onClick={()=>moveUp(index)}>MOVE UP</button>
        <button className="movedown" onClick={()=>moveDown(index)}>MOVE DOWN</button>
       </li>
    )}
        
    </ol>
    </div>
   </>
  )
}

export default Todolist
