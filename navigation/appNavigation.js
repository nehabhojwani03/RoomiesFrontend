import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeNavigation from './HomeNavigation';
import PreferenceScreen from '../screens/PreferenceScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import ToolsScreen from '../screens/ToolsScreen';
import AppUpdateScreen from '../screens/AppUpdateScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PreferenceTwoScreen from '../screens/PreferenceTwoScreen';
import PreferenceThreeScreen from '../screens/PreferenceThreeScreen';
import PreferenceFourScreen from '../screens/PreferenceFourScreen';
import PreferenceFiveScreen from '../screens/PreferenceFiveScreen';
import PreferenceSixScreen from '../screens/PreferenceSixScreen';
//import LookingForScreen from '../screens/LookingForScreen';
import PropertyListingScreen from '../screens/PropertyListingScreen';
import PropertyListingScreenTwo from '../screens/PropertyListingScreenTwo';
import PropertyScreenListingThree from '../screens/PropertyListingScreenThree';
import PropertyScreenListingFour from '../screens/PropertyListingScreenFour';


const Stack = createNativeStackNavigator(); 


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeNavigation} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="Preference" options={{ headerShown: false }} component={PreferenceScreen} />
        <Stack.Screen name="Privacy" options={{ headerShown: false }} component={PrivacyScreen} />
        <Stack.Screen name="Tools" options={{ headerShown: false }} component={ToolsScreen} />
        <Stack.Screen name="AppUpdate" options={{ headerShown: false }} component={AppUpdateScreen} />
        <Stack.Screen name="EditProfile" options={{ headerShown: false }} component={EditProfileScreen} />
        <Stack.Screen name="PreferenceTwo" options={{ headerShown: false }} component={PreferenceTwoScreen} />
        <Stack.Screen name="PreferenceThree" options={{ headerShown: false }} component={PreferenceThreeScreen} />
        <Stack.Screen name="PreferenceFour" options={{ headerShown: false }} component={PreferenceFourScreen} />
        <Stack.Screen name="PreferenceFive" options={{ headerShown: false }} component={PreferenceFiveScreen} />
        <Stack.Screen name="PreferenceSix" options={{ headerShown: false }} component={PreferenceSixScreen} />
        <Stack.Screen name="PropertyListing" options={{ headerShown: false }} component={PropertyListingScreen} />
        <Stack.Screen name="PropertyListingTwo" options={{ headerShown: false }} component={PropertyListingScreenTwo} />
        <Stack.Screen name="PropertyListingThree" options={{ headerShown: false }} component={PropertyScreenListingThree} />
        <Stack.Screen name="PropertyListingFour" options={{ headerShown: false }} component={PropertyScreenListingFour} />
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}