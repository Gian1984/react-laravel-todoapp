import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { get } from 'lodash';

function Index() {


    const [showAddTask, setShowAddTask] = useState (false) 

    const [tasks, setTask] = useState  ([
        
        // {
        //     id:'1',
        //     text:'Doctor',
        //     day:'1st Feb 2021',
        //     reminder:'true'
        // },
        // {
        //     id:'2',
        //     text:'Meeting',
        //     day:'2nd Feb 2021',
        //     reminder:'false'
        // },
        // {
        //     id:'3',
        //     text:'Food shopping',
        //     day:'3rd Feb 2021',
        //     reminder:'true'
        // }
    
    ]);

    // fetch to get data 

    useEffect(() => {
        const getTasks = async ()=> {
            const tasksFromServer = await fetchTasks()
            setTask(tasksFromServer)
        }
        getTasks()
    }, [] )
   
    const fetchTasks = async () => {
        const res = await fetch('api/tasks')  
        const data = await res.json() 

        return data
    }

    // fetch single task
    // const fetchTask = async (id) => {
    //     const res = await fetch(`api/tasks/${id}`)  
    //     const data = await res.json() 

    //     return data

    // }

    // Adding a random id to add a task 
    const addTask= async (task)=>{
        // const id = Math.floor(Math.random()*10000) +1
        // const newTask = {id, ...task}
        // setTask([...tasks, newTask])
        const res = await fetch('api/tasks',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"},
            body: JSON.stringify(task),    
        })
            const data = await res.json()
            setTask([...tasks, data])
    }


    // delete task
    const deleteTask= async (id)=>{
        await fetch(`api/tasks/${id}`,{method: 'DELETE'})
        setTask(tasks.filter((task)=>task.id !== id))
    }

    // update task

    const toggleReminder= async (id, task)=>{
        // const taskToToggle = await fetchTask(id)
        // const updTask = {taskToToggle, reminder: !taskToToggle.reminder}
        const updTask = {...task, reminder: !task.reminder}

        const res = await fetch(`api/tasks/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',           
            },
                body: JSON.stringify(updTask),
            })

        const data = await res.json()
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
                    <h4>In yellow you have the todo tasks, double click when the one task get done! </h4>
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
