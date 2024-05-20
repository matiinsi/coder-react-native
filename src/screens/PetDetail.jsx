import { StyleSheet, Text, View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import React from 'react'
import { useGetPetByIdQuery } from '../services/petsServices';

const PetDetail = ({route, navigation}) => {

    const { id } = route.params;

    const {data: pet, error, isLoading} =  useGetPetByIdQuery(id);
    
    return (
        <>
            {(!isLoading && pet) && (
                <View style={styles.petContainer}>
                    <View style={styles.petContentContainer}>
                        <View style={styles.petContentTopContainer}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <AntDesign name="arrowleft" size={24} color="black" />
                            </Pressable>
                        </View>
                        <Text>{pet.breed}</Text>
                    </View>
                </View>
            )}
        </>

    )
}

export default PetDetail

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