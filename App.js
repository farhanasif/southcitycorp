import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import Splash from './src/screens/SplashScreen';
import Signin from './src/screens/Signin';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Root() {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person';
          }else if (route.name === 'Live') {
            iconName = focused ? 'ios-videocam' : 'ios-videocam';
          }else if (route.name === 'Inbox') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#F7F7F7',
        showLabel: false,
        style: {
          backgroundColor: '#609513',
          height: 70,
         
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={DetailScreen} />
      <Tab.Screen name="Live" component={DetailScreen} />
      <Tab.Screen name="Inbox" component={DetailScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
