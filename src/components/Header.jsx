import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';

const Header = ({title}) => {
    const { headerContainer, headerTitle } = styles;

    return (
        <View style={headerContainer}>
            <Text style={headerTitle}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        width: "100%",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        backgroundColor: colors.blue,
    },
    headerTitle: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "900",
    }
})