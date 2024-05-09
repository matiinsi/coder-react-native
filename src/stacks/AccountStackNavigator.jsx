import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Account from '../screens/Account'
import React from 'react'

const AccountStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator
            initialRouteName='Account'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Account"
                component={Account}
            />
            
        </Stack.Navigator>
    )
}

export default AccountStackNavigator

const styles = StyleSheet.create({})