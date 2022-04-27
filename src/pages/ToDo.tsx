import { useState } from 'react'
import { AddTask } from '../components/AddTask';
import { TaskModel } from '../models/task.model';
import { Task } from './../components/Task'

export function ToDo() {
    const [ tasks, setTasks ] = useState(
        initialTasks
    );

    const addTask = (newTask: TaskModel) => {
        setTasks([ ...tasks, newTask ]);
    }

    const toggleDone = (i: number) => {
        const newTasks = [ ...tasks ];
        newTasks[i].done = !newTasks[i].done;
        setTasks(newTasks);
    }

    const removeTask = (i: number) => {
        const newTasks = [ ...tasks ];
        newTasks.splice(i,1);
        setTasks(newTasks);
    }

    return (
        <main>
            <h1>To Do</h1>

            <AddTask onAdd={addTask} />

            {tasks.map((task, i) => {
                return (
                    <Task key={i} 
                        task={task} taskIndex={i} 
                        onDone={toggleDone}
                        onRemove={removeTask}
                    />
                );
            })}
        </main>
    );

}

const initialTasks = [
    {
        emoji: '🐱',
        text: 'feed the cat',
        done: false,
    }

]