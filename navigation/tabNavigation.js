import * as React from 'react';
import { Text, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/home';
import ProfileScreen from '../src/profile';
import Icon from 'react-native-vector-icons/Ionicons';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createBottomTabNavigator();


export default (props) => {
    return (
        
            <Tab.Navigator initialRouteName="Home"
            screenOptions={({ route })=>({
             tabBarIcon: ({color}) =>{
               let iconName;

                 if(route.name === "Home"){
                     iconName = "home"
                 }
                 else if(route.name === "Profile"){
                     iconName = "list"
                 }
                 return <Icon type="ionicon" name={iconName} size={22} color={color} />;
             },   
            })}
              tabBarOptions={{
                  activeTintColor: '#075080',
                  inactiveTintColor: 'gray',
                  showLabel: false,
                  showIcon: true,
                  

              }}  

            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        
    );
}