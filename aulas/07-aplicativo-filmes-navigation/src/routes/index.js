import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/Home"
import Details from "../screens/Detail"

export default function Routes() {
    const stack = createStackNavigator()

    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name = 'Home' component = {Home} options = {{headerShown:false}}/>
                <stack.Screen name = 'Details' component = {Details} options = {{headerShown:false}}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}