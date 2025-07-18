import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/index-routes.tsx'
import StackRoutes from './src/routes/unlogged-stack-routes';

export function App() {
    return(
            <Routes/>
    )
}

export default App 