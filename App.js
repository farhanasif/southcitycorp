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
          let iconSize;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
            iconSize = focused ? 32 : 24;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person';
            iconSize = focused ? 32 : 24;
          }else if (route.name === 'Query') {
            iconName = focused ? 'ios-list-box' : 'ios-list-box';
            iconSize = focused ? 32 : 24;
          }else if (route.name === 'Inbox') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
            iconSize = focused ? 32 : 24;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#f6ffad',
        style: {
          backgroundColor: '#609513',
          height: 55,
          paddingBottom: 2
        },
        
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}  options={{tabBarLabel: 'হোম'}}/>
      <Tab.Screen name="Query" component={DetailScreen} options={{tabBarLabel: 'অভিযোগ'}}/>
      <Tab.Screen name="Profile" component={DetailScreen} options={{tabBarLabel: 'একাউন্ট'}}/>
      <Tab.Screen name="Inbox" component={DetailScreen} options={{tabBarLabel: 'হেল্প'}}/>
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
