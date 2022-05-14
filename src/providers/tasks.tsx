import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { TaskModel } from '../models/task.model';

const API_URL = 'http://localhost:3004';

export const TasksContext = createContext({});

export function TasksProvider({ children }: any) {
    const [ tasks, setTasks ] = useState([] as TaskModel[]);
    
    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get(`${API_URL}/tasks`);
            setTasks(data);
        }

        fetchTasks();
    }, []);

    const addTask = async (newTask: TaskModel) => {
        await axios.post(`${API_URL}/tasks`, newTask)
        .then(({ data }) => {
            setTasks([ ...tasks, data ]);
        })
        .catch((error)  => console.log(error));
    }

    const toggleDone = async (i: number) => {
        const task = tasks[i];
        const taskId = task.id;
        task.done = !task.done;
        await axios.put(`${API_URL}/tasks/${taskId}`, task)
        .then(() => {
            const newTasks = [ ...tasks ];
            newTasks[i] = task;
            setTasks(newTasks);
        })
        .catch((error)  => console.log(error));
    }

    const removeTask = async (i: number) => {
        const taskId = tasks[i].id;
        await axios.delete(`${API_URL}/tasks/${taskId}`)
        .then(() => {
            const newTasks = [ ...tasks ];
            newTasks.splice(i,1);
            setTasks(newTasks);
        })
        .catch((error)  => console.log(error));
    }

    return (
        <TasksContext.Provider value={{tasks, addTask, toggleDone, removeTask }}>
            {children}
        </TasksContext.Provider>
    );
}

// type TasksContextModel = {
//     tasks: TaskModel[];
//     addTask: Function;
//     toggleDone: Function;
//     removeTask: Function;
// };
