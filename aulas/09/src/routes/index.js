import React from 'react'
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler' 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Stack from './stack';
import About from '../screens/About';

export default function Routes(){
    const Drawer = createDrawerNavigator();

    return(
       <NavigationContainer>
           <Drawer.Navigator>
               <Drawer.Screen name = "Inicio" component = {Stack} />
               <Drawer.Screen name = "Sobre" component = {About}/>
           </Drawer.Navigator>
       </NavigationContainer>
    );
}