import React from 'react'
import { StyleSheet} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';
import { countries } from '../data/countries';

const DropdownCountry = ({filter = false, isFocus, setIsFocus, handleFilterSubmit = () => {}}) => {
    
    const dispatch = useDispatch();
    const {petSelected, breedSelected, sizeSelected, necklaceSelected, dateLostSelected, countrySelected, addPet} = useSelector(state => state.pets.value);

    const handleAddPet = (item) => {
        dispatch(setAddPet({ 
            ...addPet,
                location: {
                ...addPet.location,
                    country: item
                }
            }
        ));
    }

    const setCountries = () => {
        return countries.map((country) => {
            return {label: country.name, value: country.value}
        })
    }

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={setCountries()}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Selecciona' : '...'}
            searchPlaceholder="Buscar..."
            value={filter ? countrySelected : addPet.location?.country}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setIsFocus(false);
                (filter) ? handleFilterSubmit(breedSelected, sizeSelected, petSelected, necklaceSelected, dateLostSelected, item.value) : handleAddPet(item.value)
            }}
        />

    )
}

export default DropdownCountry

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