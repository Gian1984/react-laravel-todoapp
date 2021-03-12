import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function Index() {

    const [showAddTask, setShowAddTask] = useState (false) 

    const [tasks, setTask] = useState  ([
        {
            id:'1',
            text:'Doctor',
            day:'1st Feb 2021',
            reminder:'true'
        },
        {
            id:'2',
            text:'Meeting',
            day:'2nd Feb 2021',
            reminder:'false'
        },
        {
            id:'3',
            text:'Food shopping',
            day:'3rd Feb 2021',
            reminder:'true'
        }
    
    ])
    // rafce
    const addTask=(task)=>{
        const id = Math.floor(Math.random()*10000) +1
        const newTask = {id, ...task}
        setTask([...tasks, newTask])
    }



    const deleteTask=(id)=>{
        setTask(tasks.filter((task)=>task.id !== id))
    }

    const toggleReminder=(id)=>{
        setTask(tasks.map((task)=>task.id === id ?
        {...task, reminder: !task.reminder} : task
        ))
    }



    return (
        <div className="container mt-5">            
            <div className="card">
                <div className="card-header">
                    <Header onAdd={()=>setShowAddTask(!showAddTask)}></Header>
                </div>
                <div className="card-body">
                {/* showAddTask is on false and this is ternary to say if it's false dont show it     */}
                { showAddTask && <AddTask onAdd={addTask}></AddTask>}
                    {tasks.length > 0 ? <Tasks 

                                            tasks={tasks} 
                                            onDelete={deleteTask} 
                                            onToggle={toggleReminder}
                                        
                                        /> : 'Nothing to show'}

                </div>
                <div className="card-footer text-muted">
                2 days ago
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
