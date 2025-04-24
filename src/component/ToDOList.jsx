import React ,{useState} from 'react'
import './To_do.css';
const ToDOList = () => {
    const [tasks,setTasks] = useState([]);
    const [newTasks,setNewTasks] = useState("");

    function handleInputChange(event){

        setNewTasks(event.target.value);
    }

    function addTask()
    {
        if(newTasks.trim() !== "" ){
            setTasks(t=>[...t,newTasks])
            setNewTasks("");
        }
        
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((element,i)=> i  !== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index)
    {
        if(index > 0)
        {
            const updatedTasks = [...tasks];
            
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1] ,updatedTasks[index]];
        
            setTasks(updatedTasks);

        }

    }

    function moveTaskDown(index)
    {
        if(index < tasks.length - 1)
            {
                const updatedTasks = [...tasks];
                
                [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1] ,updatedTasks[index]];
            
                setTasks(updatedTasks);
    
            }
    


    }


  return (
    <div className='TO_do_list'>
        <h2>TO-DO-LIST</h2>

    <div>
    <input type='text' placeholder='Enter the task.....' value={newTasks} onChange={handleInputChange}></input> &nbsp;

    <button className='add-button' onClick={addTask} >Add</button> &nbsp;


    </div>
    
    <ol>
        {tasks.map((task,index) => <li key={index}>
        <spam  className ='text'>{task}</spam> 
        <button className='delete-button' onClick={()=> deleteTask (index)} > Delete</button> &nbsp;
        <button className='move-up-button' onClick={ ()=>moveTaskUp(index)} > UP</button> &nbsp;
        <button className='move-down-button' onClick={ () =>moveTaskDown(index)}> Down</button> &nbsp;



        </li>
    
    )}
    </ol>
       
    </div>
  )
}

export default ToDOList
