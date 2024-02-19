import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import DetailsFilms from '../screens/DetailsFilms';
import DetailsSerie from '../screens/DetailsSerie';

export default function Routes(){
    const stack = createStackNavigator();
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name ='Home' component ={Home} options = {
                   {headerShown:false} 
                }/>
                <stack.Screen name ='DetailsFilms' component = {DetailsFilms} options = {{
                    title:'',
                    headerTransparent:true
                }}/>
                <stack.Screen name ='DetailsSerie' component = {DetailsSerie} options = {{
                    title:'',
                    headerTransparent:true
                }}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}