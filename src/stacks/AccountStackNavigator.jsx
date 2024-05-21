import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyProfile from '../screens/MyProfile'
import LaunchCamera from '../screens/LaunchCamera'
import React from 'react'

const AccountStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator
            initialRouteName='MyProfile'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="MyProfile"
                component={MyProfile}
            />
            <Stack.Screen
                name="LaunchCamera"
                component={LaunchCamera}
            />
        </Stack.Navigator>
    )
}

export default AccountStackNavigator

const styles = StyleSheet.create({})