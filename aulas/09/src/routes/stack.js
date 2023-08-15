import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import DetailsFilms from '../screens/DetailsFilms';
import DetailsSerie from '../screens/DetailsSerie';

export default function Stack(){
    const stack = createStackNavigator();
    
    return(
            <stack.Navigator>
                <stack.Screen name ='Home' component ={Home} options = {{
                    headerShown:false, 
                }}/>
                <stack.Screen name ='DetailsFilms' component = {DetailsFilms} options = {{
                     headerTransparent:true,
                     title: '',
                }}/>
                <stack.Screen name ='DetailsSerie' component = {DetailsSerie} options = {{
                     headerTransparent:true,
                     title: ''
                }}/>
            </stack.Navigator>
    );
}