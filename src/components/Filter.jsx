import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { colors } from '../constants/colors';
import FilterModal from './FilterModal';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterLost } from '../features/pets/petsSlice';

const Filter = () => {

    const dispatch = useDispatch();
    const filterLost = useSelector(state => state.pets.value.filterLost)
    const breedSelected = useSelector(state => state.pets.value.breedSelected);
    const sizeSelected = useSelector(state => state.pets.value.sizeSelected);
    const petSelected = useSelector(state => state.pets.value.petSelected);
    const necklaceSelected = useSelector(state => state.pets.value.necklaceSelected);

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
                necklace: necklaceSelected
            }
        ));
    }, [breedSelected, sizeSelected, petSelected]);

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