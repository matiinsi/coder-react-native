import React from 'react'
import { StyleSheet, Text} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useGetBreedsByPetTypeQuery } from '../services/petsServices';
import { useSelector, useDispatch } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';

const DropdownBreeds = ({filter = false, isFocus, setIsFocus, handleFilterSubmit = () => {}}) => {

    const dispatch = useDispatch();
    const {petSelected, breedSelected, sizeSelected, necklaceSelected, dateLostSelected} = useSelector(state => state.pets.value);

    const addPet = useSelector(state => state.pets.value.addPet);

    const {data: breeds, error, isLoading} = useGetBreedsByPetTypeQuery((filter) ? petSelected : addPet.petType );

    const handleAddPet = (item) => {
        dispatch(setAddPet({...addPet, breed: item}));
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
                        data={breeds}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Selecciona' : '...'}
                        searchPlaceholder="Buscar..."
                        value={(filter) ? breedSelected : addPet.breed}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setIsFocus(false);
                            (filter) ? handleFilterSubmit(item.value, sizeSelected, petSelected, necklaceSelected, dateLostSelected) : handleAddPet(item.value)
                        }}
                    /> 
                ) : <Text>Loading...</Text>
            }
        </>

    )
}

export default DropdownBreeds

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