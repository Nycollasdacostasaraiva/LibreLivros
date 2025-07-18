import {createNativeStackNavigator} from '@react-navigation/native-stack'

/* Separa esses dois elementos do createNativeStackNavigator */
const { Screen, Navigator } = createNativeStackNavigator()

import Welcome from '../screens/Welcome.tsx'
import Login from '../screens/Login.tsx'

export function StackRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='welcomeScreen' component={Welcome}/>
            <Screen name='LogInScreen' component={Login}/>
        </Navigator>
    )
}

export default StackRoutes;