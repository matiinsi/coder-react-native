import React, {useState} from 'react'
import { StyleSheet, Modal, View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setCleanFilterLost, setBreedSelected, setSizeSelected, setPetSelected, setNecklaceSelected, setDateLostSelected, setCountrySelected, setStateSelected } from '../features/pets/petsSlice';
import DropdownPetsType from './DropdownPetsType';
import DropdownBreeds from './DropdownBreeds';
import DropdownSizes from './DropdownSizes';
import DropdownNecklace from './DropdownNecklace';
import DropdownCountry from './DropdownCountry';
import DropdownState from './DropdownState';
import InputDate from './InputDate';

const FilterModal = ({setShowModalFilter}) => {

    const {petSelected} = useSelector(state => state.pets.value);

    const [isFocus, setIsFocus] = useState(false);

    const dispatch = useDispatch();

    const handleFilterSubmit = (breed = '', size = '', petType = '', necklace = '', dateLost = '', country = '', state = '') => {
        dispatch(setPetSelected(petType));
        dispatch(setBreedSelected(breed));
        dispatch(setSizeSelected(size));
        dispatch(setNecklaceSelected(necklace));
        dispatch(setDateLostSelected(dateLost));
        dispatch(setCountrySelected(country));
        dispatch(setStateSelected(state));
        setShowModalFilter(false);
    }

    const handleCleanFilter = () => {
        dispatch(setCleanFilterLost());
        dispatch(setBreedSelected(''));
        dispatch(setSizeSelected(''));
        dispatch(setPetSelected(''));
        dispatch(setNecklaceSelected(''));
        dispatch(setDateLostSelected(''));
        dispatch(setCountrySelected(''));
        dispatch(setStateSelected(''));
        setShowModalFilter(false);
    }

    return (
        <Modal visible={true}>
            <View style={styles.closeContainer}>
                <Text style={styles.titleFiltercontainer}>Filtrado</Text>
                <TouchableOpacity
                    onPress={() => setShowModalFilter(false)}
                >
                    <FontAwesome name="close" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formGroupButtonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonFormGroup}
                        onPress={handleCleanFilter}
                    >
                        <Text style={styles.textButtonFormGroup}>Limpiar Filtros</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>Mascota</Text>
                        <DropdownPetsType
                            filter={true}
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                            handleFilterSubmit={handleFilterSubmit}
                        />
                    </View>
                    {(
                       petSelected && (
                        <View style={styles.formGroup}>
                            <Text style={styles.titleFormGroup}>Raza</Text>
                            <DropdownBreeds 
                                filter={true}
                                isFocus={isFocus}
                                setIsFocus={setIsFocus} 
                                handleFilterSubmit={handleFilterSubmit} 
                            />

                        </View>
                       ) 
                    )}

                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>Tamaño</Text>
                        <DropdownSizes
                            filter={true}
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                            handleFilterSubmit={handleFilterSubmit}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>¿Tiene Collar?</Text>
                        <DropdownNecklace
                            filter={true}
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                            handleFilterSubmit={handleFilterSubmit}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>País</Text>
                        <DropdownCountry
                            filter={true}
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                            handleFilterSubmit={handleFilterSubmit}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>Provincia</Text>
                        <DropdownState
                            filter={true}
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                            handleFilterSubmit={handleFilterSubmit}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>Fecha de extravio</Text>
                        <InputDate 
                            filter={true}
                            handleFilterSubmit={handleFilterSubmit}
                        />
                    </View>
                </ScrollView>

            </View>
        </Modal>
    )
}

export default FilterModal

const styles = StyleSheet.create({
    closeContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 40,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: colors.grayLight,
        borderBottomWidth: 2
    },
    titleFiltercontainer: {
        fontSize: 16
    },
    formContainer: {
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        position: "relative"
    },
    formGroup: {
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: colors.grayLight,
        zIndex: 1,
        position: "relative"
    },
    formGroupButtonContainer: {
        paddingBottom: 15,
    },
    titleFormGroup: {
        fontSize: 20,
        textAlign: "left",
        color: colors.blue,
        marginTop: 10,
        marginBottom: 5
    },
    buttonFormGroup: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 10,

    },
    textButtonFormGroup: {
        color: colors.white,
        textAlign: "center",
        textTransform: "uppercase",
        position: "relative"
    },

})