import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../app/index";
import Stages from "../app/stages";

export default function Navigators() {

    const Stack = createStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown:false,
                    }}
                />
                <Stack.Screen
                    name="Stages"
                    component={Stages}
                    options={{
                        headerShown:false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}