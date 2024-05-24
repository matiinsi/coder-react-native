import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PetLost from '../screens/PetLost';
import PetDetail from '../screens/PetDetail';
import PetAddInfo from '../screens/PetAddInfo';
import PetAddLocation from '../screens/PetAddLocation';
import PetAddPhoto from '../screens/PetAddPhoto';
import PetAddFinal from '../screens/PetAddFinal';

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
                name="PetAddInfo" 
                component={PetAddInfo} 
            />

            <Stack.Screen 
                name="PetAddLocation" 
                component={PetAddLocation} 
            />

            <Stack.Screen 
                name="PetAddPhoto" 
                component={PetAddPhoto} 
            />

            <Stack.Screen 
                name="PetAddFinal" 
                component={PetAddFinal} 
            />

        </Stack.Navigator>
    )
}

export default PetStackNavigator

const styles = StyleSheet.create({})