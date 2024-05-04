import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import { perdidos } from '../data/perdidos'
import Card from '../components/Card'

const Home = () => {

    console.log(perdidos);
    return (
        <View style={styles.homeContainer}>
        <Text style={styles.titleHome}>Mascotas cerca de ti</Text>
        <FlatList 
            data={perdidos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
                return (
                    <Card item={item} />
                )
            }}
        />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
        margin: 20,
    },
    titleHome: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        color: colors.blue,
        marginBottom: 40
    }
})