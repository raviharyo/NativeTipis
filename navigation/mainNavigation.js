import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/home';
import DetailsScreen from '../src/details'
import LoginScreen from '../src/login'
import ProfileScreen from '../src/profile';
import TabNavigation from './tabNavigation';
const Stack = createStackNavigator();
class MainNavigation extends Component {
    

    render() { 
        return ( 
            <Stack.Navigator initialRouteName="TabNav" headerMode="none">
                {/* <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options ={{title:'welcome'}}
                />
                <Stack.Screen
                    name='Profile'
                    component={ProfileScreen}
                    
                /> */}
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Basscoots"
                    component={TabNavigation}
                />
                <Stack.Screen
                    name="detailScreen"
                    component={DetailsScreen}
                />
            </Stack.Navigator>
         );
    }
}
 
export default MainNavigation;






