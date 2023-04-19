import React from 'react'
import './singleTask.css';
export const SingleTask = (props) => {
    return (
        <div className="task">
            <h2 className="task-title">{props.title}</h2>
            <p className="task-description">{props.description}</p>
            {/* <button onClick={handleDelete}>Delete</button> */}
            <button className='task-delete-btn'>Delete</button>

        </div>
    )
}
