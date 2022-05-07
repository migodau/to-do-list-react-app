import { useContext, useState } from 'react';
import { TasksContext } from '../providers/tasks';
import './AddTask.css';

export function AddTask() {
    
    const { addTask }: any = useContext(TasksContext);
    
    const [text, setText] = useState('');
    const [emoji, setEmoji] = useState('💡');
    
    const handleTextChange = (e: any) => {
        setText(e.target.value);
    }
    const handleEmojiChange = (e: any) => {
        setEmoji(e.target.value);
    }

    const handleAddClick = () => {
        const task = {
            emoji,
            text,
            done: false
        };
        addTask(task);
        setText('');
    }

    const emojis = [
        '💡', '🎗️', '🚀', '🚕', '✈️', '☎️', '😄',
        '🐱', '🐶', '🦄', '🦨', '🐸', '🦋', '🌿', '🌴',
        '👋', '🦠', '🎅', '❤️', '✨', '🧘', '🎨' 
    ]

    return (
        <div className="add-task-container">
            <select value={emoji} onChange={handleEmojiChange}>
                { emojis.map((emoj, i) => 
                    <option value={emoj} key={i}>{emoj}</option>)
                }
            </select>
            <input type="text" value={text} onChange={handleTextChange} />
            <button className="primary-btn" onClick={handleAddClick}>add task</button>
            
        </div>
    );

}