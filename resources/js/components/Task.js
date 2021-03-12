import React from 'react'
import { FaTrash } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        
            <div onDoubleClick={() => onToggle(task.id)} className={`${task.reminder ? 'alert alert-warning ': 'alert alert-success' } `}>
                <h5>{task.text}<FaTrash onClick={() => onDelete(task.id)} style={{color:'red', cursor:'pointer', marginLeft:'95%', marginRight:'5px'}}/></h5>
                <span>{task.day}</span>    
             </div>
       
    )
}

export default Task
