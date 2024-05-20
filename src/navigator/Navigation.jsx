import React, {useState} from 'react'
import { StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import AuthStackNavigator from '../stacks/AuthStackNavigator';
import { useSelector } from 'react-redux';

const Navigation = () => {

    const {idToken} = useSelector(state => state.auth.value);

    return (
        <NavigationContainer>
            {idToken ? <BottomTabNavigation /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})