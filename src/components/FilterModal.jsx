import React, {useState} from 'react'
import { StyleSheet, Modal, View, TouchableOpacity, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../constants/colors';
import { sizes } from '../data/sizes';
import { useDispatch } from 'react-redux';
import { setCleanFilterLost } from '../features/pets/petsSlice';
import { useGetBreedsByPetTypeQuery } from '../services/petsServices';
import DropdownPetsType from './DropdownPetsType';
import DropdownBreeds from './DropdownBreeds';

const FilterModal = ({
        setShowModalFilter, 
        setBreedSelected, 
        breedSelected, 
        setSizeSelected, 
        sizeSelected,
        petSelected,
        setPetSelected
    }) => {

    const [isFocus, setIsFocus] = useState(false);

    const dispatch = useDispatch();

    const handleFilterSubmit = (breed = '', size = '', petType = '') => {
        setBreedSelected(breed);
        setSizeSelected(size);
        setShowModalFilter(false);
        setPetSelected(petType);
    }

    const handleCleanFilter = () => {
        dispatch(setCleanFilterLost());
        setBreedSelected('');
        setSizeSelected('');
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
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                            handleFilterSubmit={handleFilterSubmit} 
                            breedSelected={breedSelected} 
                            sizeSelected={sizeSelected} 
                            petSelected={petSelected}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>Raza</Text>
                        <DropdownBreeds 
                            isFocus={isFocus}
                            setIsFocus={setIsFocus} 
                            handleFilterSubmit={handleFilterSubmit} 
                            breedSelected={breedSelected} 
                            sizeSelected={sizeSelected} 
                            petSelected={petSelected}
                        />

                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.titleFormGroup}>Tamaño</Text>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={sizes}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Selecciona' : '...'}
                            searchPlaceholder="Buscar..."
                            value={sizeSelected}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                handleFilterSubmit(breedSelected, item.value, petSelected)
                                setIsFocus(false);
                            }}
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