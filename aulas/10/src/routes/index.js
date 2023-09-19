import React from 'react'
import 'react-native-gesture-handler' 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Stack from './stack';
import About from '../screens/About';

export default function Routes(){
    const Drawer = createDrawerNavigator();

    return(
       <NavigationContainer>
           <Drawer.Navigator
            screenOptions = {{
                drawerStyle: {
                    backgroundColor: '#141A29',
                },
                headerShown:false,
                drawerLabelStyle: {
                    color: 'white',
                  },
                drawerInactiveTintColor: 'white'
            }}
           >
               <Drawer.Screen name = "Inicio" component = {Stack} />
               <Drawer.Screen name = "Sobre" component = {About}/>
           </Drawer.Navigator>
       </NavigationContainer>
    );
}