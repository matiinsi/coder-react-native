import { StyleSheet, Text, View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import React from 'react'

const Pet = ({route, navigation}) => {

    const {id} = route.params;
    
    return (
        <View style={styles.petContainer}>
            <View style={styles.petContentContainer}>
                <View style={styles.petContentTopContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Pet

const styles = StyleSheet.create({
    petContainer: {
        padding: 10
    },
    petContentContainer: {
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
        margin: 20,
    },
    petContentTopContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
})