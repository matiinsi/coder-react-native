import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Map from '../screens/Map'
import React from 'react'

const MapStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator
            initialRouteName='Map'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Map"
                component={Map}
            />
            
        </Stack.Navigator>
    )
}

export default MapStackNavigator

const styles = StyleSheet.create({})