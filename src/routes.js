import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Create from './pages/Create';
import Products from './pages/Products';
 
export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown:false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Create" component={Create} />
                <AppStack.Screen name="Products" component={Products} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
};