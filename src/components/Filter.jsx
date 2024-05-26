import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { colors } from '../constants/colors';
import FilterModal from './FilterModal';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterLost } from '../features/pets/petsSlice';
import { setLocationUser } from '../features/auth/authSlice';

const Filter = () => {

    const dispatch = useDispatch();
    const {filterLost, breedSelected, sizeSelected, petSelected, necklaceSelected, dateLostSelected, countrySelected, stateSelected} = useSelector(state => state.pets.value)

    const [showModalFilter, setShowModalFilter] = useState(false);

    const handleShowFilter = () => {
        setShowModalFilter(!showModalFilter);
    }

    useEffect(() => {
        dispatch(setFilterLost(
            {...filterLost, 
                breed: breedSelected, 
                size: sizeSelected,
                petType: petSelected,
                necklace: necklaceSelected,
                dateLost: dateLostSelected,
                country: countrySelected,
                state: stateSelected.value
            }
        ));
    }, [breedSelected, sizeSelected, petSelected, necklaceSelected, dateLostSelected, countrySelected, stateSelected]);

    return (
        <View style={styles.filterContainer}>
            <Text style={styles.titleFilter}>Mascotas cerca de ti</Text>
            <TouchableOpacity onPress={handleShowFilter} style={styles.filterButton}>
                <FontAwesome6 name="filter" size={24} color="black" />
            </TouchableOpacity>
            {
                showModalFilter && (
                    <FilterModal 
                        setShowModalFilter={setShowModalFilter} 
                    />
                )
            }
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    filterContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titleFilter: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "left",
        color: colors.blue,
    },
    filterButton: {
        backgroundColor: colors.grayLight,
        padding: 10,
        borderRadius: 10,
        textAlign: "center"
    }
})