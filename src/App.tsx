import { TasksProvider } from './providers/tasks';
import { AppRoutes } from './Routes';

function App() {

  return (
    <TasksProvider>
      <AppRoutes/>
    </TasksProvider>
  );

}

export default App
