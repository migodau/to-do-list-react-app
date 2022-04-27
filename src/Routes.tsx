import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToDo } from './pages/ToDo';

export function AppRoutes() {
    return (
        
        <Router>
            <Routes>
                <Route path='/' element={<ToDo />} />
            </Routes>
        </Router>
    );
}