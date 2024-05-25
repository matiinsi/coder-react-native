import React from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import { colors } from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';
import { addPetValues } from '../constants/addPetValues';
import { usePostPetMutation } from '../services/petsServices'
import AddButton from '../components/AddButton';
import ViewPetDetail from './ViewPetDetail';

const PetAddFinal = ({navigation}) => {
    const dispatch = useDispatch();

    const [triggerPost, result] = usePostPetMutation();
    
    const {addPet} = useSelector(state => state.pets.value);

    const handleSubmit = () => {
        triggerPost(addPet);
        dispatch(setAddPet(addPetValues));
        navigation.navigate("PetLost")
    }

    return (
        <View style={styles.petContainer}>
            <ScrollView style={styles.petContentContainer}>
                <View style={styles.petContentTopContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={{marginBottom: 20}}>
                    <Text style={styles.title}>Confirmación de Datos</Text>
                </View>
                <ViewPetDetail pet={addPet} />
                <View>
                    <AddButton title={"Publicar Mascota"} action={handleSubmit} bgColor={colors.green} />
                </View>
            </ScrollView>
        </View>
    )
}

export default PetAddFinal

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
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.blue,
        marginBottom: 0
    },
    
})