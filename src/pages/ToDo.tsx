import axios from 'axios';
import { useEffect, useState } from 'react'
import { AddTask } from '../components/AddTask';
import { TaskModel } from '../models/task.model';
import { Task } from './../components/Task'

export function ToDo() {
    const [ tasks, setTasks ] = useState([] as TaskModel[]);

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get('http://localhost:3004/tasks');
            setTasks(data);
        }

        fetchTasks();
    }, []);

    const addTask = async (newTask: TaskModel) => {
        await axios.post('http://localhost:3004/tasks', newTask)
        .then(({ data }) => {
            setTasks([ ...tasks, data ]);
        })
        .catch((error)  => console.log(error));
    }

    const toggleDone = async (i: number) => {
        const task = tasks[i];
        const taskId = task.id;
        task.done = !task.done;
        await axios.put(`http://localhost:3004/tasks/${taskId}`, task)
        .then(() => {
            const newTasks = [ ...tasks ];
            newTasks[i] = task;
            setTasks(newTasks);
        })
        .catch((error)  => console.log(error));
    }

    const removeTask = async (i: number) => {
        const taskId = tasks[i].id;
        await axios.delete(`http://localhost:3004/tasks/${taskId}`)
        .then(() => {
            const newTasks = [ ...tasks ];
            newTasks.splice(i,1);
            setTasks(newTasks);
        })
        .catch((error)  => console.log(error));
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
