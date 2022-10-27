import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../app/index";
import Stages from "../app/stages";
import LevelFour from "../app/stages/levelFour";
import LevelOne from "../app/stages/levelOne";
import LevelThree from "../app/stages/levelThree";
import LevelTwo from "../app/stages/levelTwo";

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
                <Stack.Screen
                    name="LevelOne"
                    component={LevelOne}
                    options={{
                        headerShown:false,
                    }}
                />
                <Stack.Screen
                    name="LevelTwo"
                    component={LevelTwo}
                    options={{
                        headerShown:false,
                    }}
                />
                <Stack.Screen
                    name="LevelThree"
                    component={LevelThree}
                    options={{
                        headerShown:false,
                    }}
                />
                <Stack.Screen
                    name="LevelFour"
                    component={LevelFour}
                    options={{
                        headerShown:false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}