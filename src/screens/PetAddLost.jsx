import React, {useState} from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import { colors } from '../constants/colors';
import { usePostPetMutation } from '../services/petsServices'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import DropdownPetsType from '../components/DropdownPetsType';
import DropdownBreeds from '../components/DropdownBreeds';
import DropdownSizes from '../components/DropdownSizes';
import DropdownNecklace from '../components/DropdownNecklace';
import uuid from 'react-native-uuid';
import InputDate from '../components/InputDate';

const PetAddLost = ({navigation}) => {

    const addPet = useSelector(state => state.pets.value.addPet);

    const [triggerPost, result] = usePostPetMutation();
    const [error, setError] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    
    const handleSubmit = () => {
        triggerPost({
            breed: "Bulldog",
            pet_type: "dog",
            size: "medium",
            pet_event: true,
            id: uuid.v4(),
        });
    };

    return (
        <View style={styles.petContainer}>
            <ScrollView style={styles.petContentContainer}>
                <View style={styles.petContentTopContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={styles.formContainer}>
                    {error && <Text style={styles.inputError}>{error}</Text>}
                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>Mascota</Text>
                        <DropdownPetsType
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                        />
                    </View>
                    {
                        (addPet?.petType) && (
                            <View style={styles.formGroup}>
                                <Text style={styles.titleFormGroup}>Raza</Text>
                                <DropdownBreeds 
                                    isFocus={isFocus}
                                    setIsFocus={setIsFocus} 
                                />
                            </View>
                        )
                    }
                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>Tamaño</Text>
                        <DropdownSizes 
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>¿Tiene Collar?</Text>
                        <DropdownNecklace
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>Fecha de extravio</Text>
                        <InputDate />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default PetAddLost

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
    titleFormGroup: {
        fontSize: 20,
        textAlign: "left",
        color: colors.blue,
        marginTop: 10,
        marginBottom: 5
    },
    formContainer: {
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
    },
    formGroup: {
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: colors.grayLight,
        zIndex: 1,
        position: "relative"
    },
})