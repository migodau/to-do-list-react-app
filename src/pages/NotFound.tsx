import { useLocation } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    const location = useLocation();
    let path = location.pathname ;
    path = path.length > 12 ? path.substring(0, 12) + '...' : path;
    return (
        <main className='not-found-page'>
            <h1>
                Sorry 😢
            </h1>
            <p className='not-found-text'>
                <span className='not-found-path'>{ path }</span> not found
            </p>
            <img className='not-found-image' src='https://httpstatusdogs.com/img/404.jpg'/>
        </main>
    );
}