import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { ToDo } from './pages/ToDo';

export function AppRoutes() {
    return (
        
        <Router>
            <Routes>
                <Route path='/' element={<ToDo />} />
                <Route path="*"  element={<NotFound />} />
            </Routes>
        </Router>
    );
}