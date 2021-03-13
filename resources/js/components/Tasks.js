import React from 'react'
import Task from './Task'


const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
            {tasks.map((task, index)=>(
                
                <Task onDelete={onDelete} onToggle={onToggle} key={index} task={task}></Task>))}

        </>
    )
}

export default Tasks
