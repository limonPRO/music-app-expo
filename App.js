import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpUser from './screens/SignUpScreen';
import SignInUser from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';
import SettingsScreen from './screens/SettingsScreen';
import MusicScreen from './screens/MusicScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {/* <Stack.Screen name="SignUp" component={SignUpUser} options={{ headerShown: true }}/> */}
        <Stack.Screen name="SignIn" component={SignInUser} options={{ headerShown: true }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: true }} />
        <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: true }} />
          <Stack.Screen
            name="Home"
            component={HomeTabNavigator}
            options={{ headerShown: true }}
          />
           <Stack.Screen name="Music" component={MusicScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => (
  <Tab.Navigator 
      // initialRouteName='SplashScreen'
      screenOptions={
        ({}) => ({
          tabBarStyle: {
            backgroundColor: "#1A1C31",
            borderTopColor: "#01020B",
          }
        })
      }>
    <Tab.Screen
      name="musiclist"
      component={HomeScreen} // Replace with your desired component for Tab1
      options={{
        headerShown: false,
        tabBarLabel: 'MusicList',
        tabBarIcon: ({ color }) => <Ionicons name="list-circle-outline" size={24} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen} // Replace with your desired component for Tab2
      options={{
        headerShown: false,
        tabBarLabel: 'profile',
        tabBarIcon: ({ color }) => <Ionicons name="man-outline" size={24} color={color} />,
      }}
    />
     <Tab.Screen
      name="playmusic"
      component={SettingsScreen} // Replace with your desired component for Tab2
      options={{
        headerShown: false,
        tabBarLabel: 'settings',
        tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
      }}
    />
  </Tab.Navigator>
);

