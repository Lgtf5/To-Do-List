import React, { useState } from "react";


function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState ("");
    
    function handleInputChange (e){
        setNewTask (e.target.value);
    }
    
    function addTask() {

        if (newTask.trim() !==""){
        setTasks([...tasks, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index) {
        
        const updateTasks = tasks.filter ((_, i) => i !== index) 
        setTasks (updateTasks);
    }


    function moveUp (index) {
        if (index > 0) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    function moveDown (index) { 
        console.log (index)
        if (index < tasks.length - 1) {
            const updateTasks = [...tasks]; 
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            setTasks(updateTasks);

        }
    }

    return ( <div className="list" >
                <h1>To Do List</h1>
                <div className="input-container" >
                    <input type="text" placeholder= "Enter a task" value= {newTask} onChange= {handleInputChange}/>
                    <button
                        className= "add-button" onClick={addTask}> Add
                    </button>
                </div>
                <ol>
                    {tasks.map((tasks, index) =>
                    <li key= {index}>
                        <span className= "text">{tasks}</span>
                        <button className = "delete-button" onClick={() => deleteTask (index)}> Delete 
                        </button>
                        <button className = "up-button" onClick={() => moveUp (index)}> △
                        </button>
                        <button className = "down-button" onClick={() => moveDown (index)}> ▽
                        </button>
                    </li>
                    
                )}
                </ol>
                
            </div>
    );
}


export default ToDoList