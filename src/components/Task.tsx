import { useContext } from 'react';
import { TaskModel } from '../models/task.model';
import { TasksContext } from '../providers/tasks';
import './Task.css';

type TaskProps = {
    task: TaskModel,
    taskIndex: number,
}

export function Task({task, taskIndex}: TaskProps) {
    const { toggleDone, removeTask }: any = useContext(TasksContext);
    
    const handleTaskClick = () => {
        toggleDone(taskIndex);
    }

    const handleRemove = () => {
        removeTask(taskIndex);
    }
    
    return (
        <div className="task-container">
            <p onClick={handleTaskClick} style={{
                textDecoration: task.done ? 'line-through' : 'none'
            }}>
                {task.emoji} {task.text}
            </p>
            <span className="remove-btn" onClick={handleRemove}>🗑️</span>
        </div>
    );
}