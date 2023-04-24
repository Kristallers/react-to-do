import React from 'react'
import { useState } from 'react';
import './singleTask.css';
export const SingleTask = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/tasks/${props.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description }),
            });
            if (response.ok) {
                setIsEditing(false);
            } else {
                console.error(`Failed to update task ${props.id}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (taskID) => {
        try {
            const response = await fetch(`/tasks/${taskID}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                props.setTasks(props.tasks.filter((task) => task.id !== taskID)); // Remove the deleted task from the state
            } else {
                console.error('Failed to delete task:', response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="task" >
            {isEditing ? (
                <form onSubmit={handleEdit}>
                    <input
                        type="text"
                        placeholder="Task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Task description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <h2 className="task-title">{props.title}</h2>
                    <p className="task-description">{props.description}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => handleDelete(props.id)}>Delete</button>
                </>
            )}
        </div>
    )
}
