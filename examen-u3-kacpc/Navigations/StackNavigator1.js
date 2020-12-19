import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Productos1 from '../Screens/Productos1';
import Carrito1 from '../Screens/Carrito1';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="Carrito1"
                component={Carrito1}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Productos1"
                component={Productos1}
            />

        </Stack.Navigator>
    )
}