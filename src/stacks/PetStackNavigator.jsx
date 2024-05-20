import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PetLost from '../screens/PetLost';
import PetDetail from '../screens/PetDetail';
import PetAddLost from '../screens/PetAddLost';

const PetStackNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='PetLost'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name="PetLost" 
                component={PetLost} 
                
            />
            <Stack.Screen 
                name="PetDetail" 
                component={PetDetail} 
            />

            <Stack.Screen 
                name="PetAddLost" 
                component={PetAddLost} 
            />

        </Stack.Navigator>
    )
}

export default PetStackNavigator

const styles = StyleSheet.create({})