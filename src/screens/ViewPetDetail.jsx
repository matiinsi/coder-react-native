import { StyleSheet, Text, View, Image } from 'react-native'
import {converSize} from '../helpers/converSize'
import { convertDate } from '../helpers/convertDate'
import React from 'react'

const ViewPetDetail = ({pet}) => {

    const { petType, breed, size, color, dateLost, profileImage } = pet;
    const { country, state, city, address} = pet.location;

    return (
        <>
            <View style={styles.containerImage}>
                <Image source={{ uri: profileImage }} style={styles.image} />
            </View>
            <View>
                <Text style={{marginBottom: 5, fontSize: 16}}><Text style={styles.cardTitleItem}>Mascota:</Text> { petType }</Text>
                <Text style={{marginBottom: 5, fontSize: 16}}><Text style={styles.cardTitleItem}>Raza:</Text> { breed }</Text>
                <Text style={{marginBottom: 5, fontSize: 16}}><Text style={styles.cardTitleItem}>Tamaño:</Text> { converSize(size) }</Text>
                <Text style={{marginBottom: 5, fontSize: 16}}><Text style={styles.cardTitleItem}>Color:</Text> { color }</Text>
                <Text style={{marginBottom: 5, fontSize: 16}}><Text style={styles.cardTitleItem}>Perdido:</Text> {convertDate(dateLost)}</Text>
                <Text style={{marginBottom: 5, fontSize: 16}}><Text style={styles.cardTitleItem}>Ubicación:</Text> {address}, {state}, {city} {country} </Text>
            </View>
        </>
    )
}

export default ViewPetDetail

const styles = StyleSheet.create({
    containerImage: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    cardTitleItem: {
        fontWeight: "600"
    },
})