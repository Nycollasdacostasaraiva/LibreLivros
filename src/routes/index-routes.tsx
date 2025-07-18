import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./unlogged-stack-routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function Routes() {
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}