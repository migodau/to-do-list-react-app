import { useState } from 'react';
import './AddTask.css';

type AddTaskProps = {
    onAdd: any
}
export function AddTask({ onAdd }: AddTaskProps) {
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
        onAdd(task);
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