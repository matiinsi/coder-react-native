import React, {useEffect} from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { colors } from '../constants/colors'
import Card from '../components/Card'
import Filter from '../components/Filter'
import { useGetPetsQuery } from '../services/petsServices'
import { setLocationUser } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import ButtonAddPet from '../components/ButtonAddPet'
import { getLocationUser } from '../helpers/getLocationUser'
import * as Location from "expo-location"

const PetLost = ({navigation}) => {

    const dispatch = useDispatch();

    const {breedSelected, sizeSelected, petSelected, necklaceSelected, dateLostSelected, countrySelected, stateSelected} = useSelector(state => state.pets.value);
    const { location } = useSelector(state => state.auth.value);

    const {data: pets, error, isLoading} = useGetPetsQuery(
        {
            breedSelected, 
            sizeSelected, 
            petSelected, 
            necklaceSelected, 
            dateLostSelected,
            countrySelected: (countrySelected) ? countrySelected : location.country,
            stateSelected: (stateSelected) ? stateSelected : location.state
        }
    );

    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
    
                if (status === "granted") {

                    let locationUser = await Location.getCurrentPositionAsync({})
                    let locationData = await getLocationUser({lat: locationUser.coords.latitude, lng: locationUser.coords.longitude})

                    dispatch(setLocationUser({
                        lat: locationUser.coords.latitude,
                        lng: locationUser.coords.longitude,
                        country: locationData.country,
                        state: locationData.state,
                    }))
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <View style={styles.homeContainer}>
            <ButtonAddPet navigation={navigation} />
            <Filter />
            {
                !isLoading ? (
                    <>
                        {
                            (pets && pets.length > 0) ? (
                            <FlatList 
                                data={pets}
                                keyExtractor={(item) => item.id}
                                renderItem={({item}) => {
                                    return (
                                        <Card item={item} navigation={navigation} />
                                    )
                                }}
                                style={styles.listContainer}
                            />
                            ) : <Text style={styles.textError}>No se encontraron mascotas</Text>
                        }
                    </>
                ) : <Text>Loading...</Text>
            }
        </View>
    )
}

export default PetLost

const styles = StyleSheet.create({
    homeContainer: {
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
        margin: 20,
    },
    listContainer: {
        width: "100%",
        height: "90%"
    },
    textError: {
        fontSize: 20,
        color: colors.red,
        textAlign: "center",
        marginTop: 20
    }
})