import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { colors } from '../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import PetStackNavigator from '../stacks/PetStackNavigator';
import MapStackNavigator from '../stacks/MapStackNavigator';
import AccountStackNavigator from '../stacks/AccountStackNavigator';
import React from 'react'

const BottomTabNavigation = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => {
                    return <Header route={route} title="PetFinder" />
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen
                name="PetScreen"
                component={PetStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons 
                                    name="pets" 
                                    size={28} 
                                    color={focused ? colors.blue : colors.grayDark} 
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="MapScreen"
                component={MapStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons 
                                    name="map" 
                                    size={28} 
                                    color={focused ? colors.blue : colors.grayDark}
                                />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="AccountScreen"
                component={AccountStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons 
                                    name="account-circle" 
                                    size={28}
                                    color={focused ? colors.blue : colors.grayDark}
                                />
                            </View>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.grayLight,
        shadowColor: "black",
        elevation: 4,
        borderRadius: 15,
        height: 60,
    },
})