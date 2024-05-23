import React, {useState} from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native'
import { colors } from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import AddButton from '../components/AddButton';
import { addPetInfoSchema } from '../validations/addPetInfoSchema';
import DropdownCountry from '../components/DropdownCountry';

const PetAddLocation = ({navigation}) => {

    const {addPet} = useSelector(state => state.pets.value);

    const [error, setError] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    
    const handleSubmit = () => {
        try {
            addPetInfoSchema.validate(addPet)
                .then(() => {
                    setError("");
                    //navigation.navigate("PetAddLocation");
                })
                .catch((error) => {
                    setError(error.message);
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.petContainer}>
            <ScrollView style={styles.petContentContainer}>
                <View style={styles.petContentTopContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.title}>Ubicación de la Mascota</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>País</Text>
                        <DropdownCountry 
                          isFocus={isFocus} 
                          setIsFocus={setIsFocus} 
                        />
                    </View>
                    {error && <Text style={styles.inputError}>{error}</Text>}
                    <View style={styles.formGroupInputs}>
                        <AddButton title={"Atrás"} action={goBack} bgColor={colors.red} size={"50%"} />
                        <AddButton title={"Siguiente"} action={handleSubmit} bgColor={colors.green} size={"50%"} />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default PetAddLocation

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
    formGroupInputs: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
        columnGap: 10
    },
    inputError: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        textAlign: 'center',
        color: colors.white,
    },
})