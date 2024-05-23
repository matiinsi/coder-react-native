import React from 'react'
import { StyleSheet, Text} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useGetSizesQuery } from '../services/petsServices';
import { useDispatch, useSelector } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';

const DropdownSizes = ({filter = false, isFocus, setIsFocus, handleFilterSubmit}) => {

    const dispatch = useDispatch();
    const {petSelected, breedSelected, sizeSelected, necklaceSelected, dateLostSelected, countrySelected, addPet} = useSelector(state => state.pets.value);

    const {data: sizes, error, isLoading} = useGetSizesQuery();

    const handleAddPet = (item) => {
        dispatch(setAddPet({...addPet, size: item}));
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
                        data={sizes}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Selecciona' : '...'}
                        searchPlaceholder="Buscar..."
                        value={filter ? sizeSelected : addPet.size}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setIsFocus(false);
                            (filter) ? handleFilterSubmit(breedSelected, item.value, petSelected, necklaceSelected, dateLostSelected, countrySelected) : 
                            handleAddPet(item.value)
                        }}
                    />
                ) : <Text>Loading...</Text>
            }
        </>

    )
}

export default DropdownSizes

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