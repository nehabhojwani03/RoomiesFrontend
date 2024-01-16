import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FindScreen from '../screens/FindScreen';
// import DashboardScreen from '../screens/DashboardScreen';
// import SettingScreen from '../screens/SettingScreen';


const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="Find" options={{ headerShown: false }} component={FindScreen} />
        {/* <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Drawer.Navigator>
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Settings" component={SettingScreen} />
            </Drawer.Navigator>
          )}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}