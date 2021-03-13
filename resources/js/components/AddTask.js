import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState ('')
    const [day, setDay] = useState ('')
    const [reminder, setReminder] = useState (false)

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!text) {
          alert('Please add a task')
          return
        }
    
        onAdd({ text, day, reminder })
    
        setText('')
        setDay('')
        setReminder(false)
      }


    return (
        <div className="mb-5">
            <form onSubmit={onSubmit}>
                <label type="text" className="form-label">Add Task</label>
                <input className="form-control" value={text} onChange={(e)=> setText(e.target.value)}></input>

                <label type="text" className="form-label">Add day & time</label>
                <input className="form-control" value={day} onChange={(e)=> setDay(e.target.value)}></input>

                <div className="form-check mt-2">
                    <input className="form-check-input" checked={reminder} type="checkbox" id="disabledFieldsetCheck" value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}></input>
                    <label className="form-check-label">
                    Set Reminder
                    </label>
                </div>

                <button className="btn btn-dark mt-2" type="submit">Submit</button>
            </form>
        </div>

    )
}

export default AddTask
