import React from 'react'
import { StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/Header';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Pet from '../screens/Pet';

const Navigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={
                    ({route}) => ({
                        header: () => {
                            return <Header title="Petfinder" />
                        }
                    })
                }
            >
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                />
                <Stack.Screen
                    name="Pet"
                    component={Pet}
                />
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})