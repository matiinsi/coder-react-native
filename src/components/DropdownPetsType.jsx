import React, {useState} from 'react'
import { StyleSheet, Text} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useGetPetsTypesQuery } from '../services/petsServices';
import { useSelector, useDispatch } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';

const DropdownPetsType = ({filter = false, isFocus, setIsFocus, handleFilterSubmit = () => {}}) => {
    
    const dispatch = useDispatch();
    const {petSelected, breedSelected, sizeSelected, necklaceSelected, dateLostSelected, countrySelected, stateSelected, addPet} = useSelector(state => state.pets.value);

    const {data: petsType, error, isLoading} = useGetPetsTypesQuery();

    const handleAddPet = (item) => {
        dispatch(setAddPet({...addPet, petType: item}));
    }

    return (
        <>
            {
                !isLoading ? (
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={petsType}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Selecciona' : '...'}
                        searchPlaceholder="Buscar..."
                        value={filter ? petSelected : addPet.petType}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setIsFocus(false);
                            (filter) ? handleFilterSubmit(breedSelected, sizeSelected, item.value, necklaceSelected, dateLostSelected, countrySelected, stateSelected) : handleAddPet(item.value)
                        }}
                    />
                ) : <Text>Loading...</Text>
            }
        </>

    )
}

export default DropdownPetsType

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
})