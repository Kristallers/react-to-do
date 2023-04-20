import React from 'react'
import './singleTask.css';
export const SingleTask = (props) => {
    const handleDelete = async (taskID) => {
        try {
            const response = await fetch(`/tasks/${taskID}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Task was deleted successfully
                props.setTasks(props.tasks.filter((task) => task.id !== taskID)); // Remove the deleted task from the state

                console.log("to update ui");
            } else {
                console.error('Failed to delete task:', response.statusText);
            }
        } catch (error) {

        }
    }
    return (
        <div className="task" >
            <h2 className="task-title">{props.title}</h2>
            <p className="task-description">{props.description}</p>
            <button className='task-delete-btn' onClick={() => handleDelete(props.id)}>Delete{props.key}</button>
        </div>
    )
}
