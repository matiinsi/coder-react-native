import React, {useState} from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import { colors } from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import DropdownPetsType from '../components/DropdownPetsType';
import DropdownBreeds from '../components/DropdownBreeds';
import DropdownSizes from '../components/DropdownSizes';
import DropdownNecklace from '../components/DropdownNecklace';
import AddButton from '../components/AddButton';
import InputDate from '../components/InputDate';
import { addPetInfoSchema } from '../validations/addPetInfoSchema';
import InputColor from '../components/InputColor';

const PetAddInfo = ({navigation}) => {

    const {addPet} = useSelector(state => state.pets.value);

    const [error, setError] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    
    const handleSubmit = () => {
        try {
            addPetInfoSchema.validate(addPet)
                .then(() => {
                    setError("");
                    navigation.navigate("PetAddLocation");
                })
                .catch((error) => {
                    setError(error.message);
            });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <View style={styles.petContainer}>
            <ScrollView style={styles.petContentContainer}>
                <View style={styles.petContentTopContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.title}>Información de la Mascota</Text>
                </View>
                <View style={styles.formContainer}>
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
                        <Text style={styles.titleFormGroup}>Color</Text>
                        <InputColor
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
                    {error && <Text style={styles.inputError}>{error}</Text>}
                    <View style={styles.formGroupInputs}>
                        <AddButton title={"Siguiente"} action={handleSubmit} bgColor={colors.green} />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default PetAddInfo

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
        alignItems: "center",
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: colors.grayLight,
        zIndex: 1,
        position: "relative"
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