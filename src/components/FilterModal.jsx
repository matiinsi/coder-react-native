import React, {useState} from 'react'
import { StyleSheet, Modal, View, TouchableOpacity, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setCleanFilterLost, setBreedSelected, setSizeSelected, setPetSelected, setNecklaceSelected } from '../features/pets/petsSlice';
import DropdownPetsType from './DropdownPetsType';
import DropdownBreeds from './DropdownBreeds';
import DropdownSizes from './DropdownSizes';
import DropdownNecklace from './DropdownNecklace';

const FilterModal = ({setShowModalFilter}) => {

    const petSelected = useSelector(state => state.pets.value.petSelected);

    const [isFocus, setIsFocus] = useState(false);

    const dispatch = useDispatch();

    const handleFilterSubmit = (breed = '', size = '', petType = '', necklace = '') => {
        dispatch(setPetSelected(petType));
        dispatch(setBreedSelected(breed));
        dispatch(setSizeSelected(size));
        dispatch(setNecklaceSelected(necklace));
        setShowModalFilter(false);
    }

    const handleCleanFilter = () => {
        dispatch(setCleanFilterLost());
        dispatch(setBreedSelected(''));
        dispatch(setSizeSelected(''));
        dispatch(setPetSelected(''));
        dispatch(setNecklaceSelected(''));
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
                <View>
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
                </View>
                <View style={styles.formGroupButtonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonFormGroup}
                        onPress={handleCleanFilter}
                    >
                        <Text style={styles.textButtonFormGroup}>Limpiar Filtros</Text>
                    </TouchableOpacity>
                </View>
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
        padding: 10,
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
        position: "relative",
        bottom: 100
    },
    textButtonFormGroup: {
        color: colors.white,
        textAlign: "center",
        textTransform: "uppercase",
        position: "relative"
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
      },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})