import React, { useState } from "react";


function ToDoList() {
    const [tasks, setTask] = useState(["buy food", "go run", "do exercise"]);
    const [newTask, setNewTask] = useState ("");
    
    function handleInputChange (e){
        setNewTask (e.target.value);
    }
    
    function addTask() {

        
    }

    function deleteTask(index) {
        
    }


    function moveUp (index) {

    }

    function moveDown (index) {

    }

    return ( <div className="list" >
                <h1>To Do List</h1>
                <div>
                    <input type="text" placeholder= "Enter a task" value= {newTask} onChange= {handleInputChange}/>
                    <button
                        className= "add-button" onClick={addTask}>Add
                    </button>
                </div>
                <ol>
                    {tasks.map((task, index) =>
                    <li key= {index}>
                        <span className= "text">{task}</span>
                        <button className = "delete-button" onClick={() => deleteTask (index)}> Delete 
                        </button>
                        <button className = "up-button" onClick={() => moveUp (index)}> 🔼
                        </button>
                        <button className = "down-button" onClick={() => moveDown (index)}> 🔽
                        </button>
                    </li>
                    
                )}
                </ol>
                
            </div>
    );
}


export default ToDoList