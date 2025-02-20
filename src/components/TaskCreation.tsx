import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


type props ={
    refreshTasks:()=>void
}

export default function TaskCreation({refreshTasks}:props) {

  const [TaskName, setTaskName] = useState('');
  const [TaskDesc, setTaskDesc] = useState('');

  const handleAddTask = () =>{
    const taskInfo = {
        name:TaskName,
        description:TaskDesc,
        done:false
    }

    localStorage.setItem('task-'+uuidv4(),JSON.stringify(taskInfo));

    setTaskName('');
    setTaskDesc('');

    refreshTasks();
  }


  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 className="card-title text-center mb-4">Create a new task!</h1>
        <div className="mb-3">
          <label className="form-label">Task name</label>
          <input 
            type="text" 
            className="form-control" 
            onChange={(e) => setTaskName(e.target.value)} 
            value={TaskName} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea 
            className="form-control" 
            onChange={(e) => setTaskDesc(e.target.value)} 
            value={TaskDesc}
          ></textarea>
        </div>
        <button onClick={handleAddTask} className="btn btn-primary w-100">Add task</button>
      </div>
    </div>
  );
}