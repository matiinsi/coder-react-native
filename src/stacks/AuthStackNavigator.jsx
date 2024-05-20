import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PetDetail from '../screens/PetDetail';
import Login from '../screens/Login';
import Register from '../screens/Register';
import React from 'react'
import ForgotPassword from '../screens/ForgotPassword';

const AuthStackNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name="Login" 
                component={Login} 
                
            />
            <Stack.Screen 
                name="Register" 
                component={Register} 
            />
            <Stack.Screen 
                name="ForgotPassword" 
                component={ForgotPassword} 
            />

        </Stack.Navigator>
    )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})