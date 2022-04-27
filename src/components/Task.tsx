import { TaskModel } from '../models/task.model';
import './Task.css';

type TaskProps = {
    task: TaskModel,
    taskIndex: number,
    onDone: any,
    onRemove: any,
}

export function Task({task, taskIndex, onDone, onRemove}: TaskProps) {
    const handleTaskClick = () => {
        onDone(taskIndex);
    }

    const handleRemove = () => {
        onRemove(taskIndex);
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