import React from 'react'
import { StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';

const Navigation = () => {

    return (
        <NavigationContainer>
            <BottomTabNavigation />
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})