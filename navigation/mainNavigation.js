import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/home';
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
                    name="Basscoots"
                    component={TabNavigation}
                />
            </Stack.Navigator>
         );
    }
}
 
export default MainNavigation;






