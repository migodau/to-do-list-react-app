import { useContext } from 'react'
import { AddTask } from '../components/AddTask';
import { TaskModel } from '../models/task.model';
import { TasksContext } from '../providers/tasks';
import { Task } from './../components/Task'

export function ToDo() {
    const { tasks }: any = useContext(TasksContext);

    return (
        <main>
            <h1>To Do</h1>

            <AddTask />

            {tasks.map((task: TaskModel, i: number) => {
                return (
                    <Task key={i} 
                        task={task} taskIndex={i}
                    />
                );
            })}
        </main>
    );

}
