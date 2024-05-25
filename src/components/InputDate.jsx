import React, {useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import DateTimePicker from 'react-native-ui-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setAddPet } from '../features/pets/petsSlice';

const InputDate = ({filter = false, handleFilterSubmit = () => {}}) => {

  const dispatch = useDispatch();
  const {petSelected, breedSelected, sizeSelected, necklaceSelected, addPet} = useSelector(state => state.pets.value);

  return (
    <View style={styles.pickerContainer}>
      <DateTimePicker
        mode="single"
        date={dayjs(addPet.dateLost)}
        onChange={(params) => {
          filter ? handleFilterSubmit(breedSelected, sizeSelected, petSelected, necklaceSelected, params.date.format('YYYY-MM-DD')) :
          dispatch(setAddPet({...addPet, dateLost: params.date.format('YYYY-MM-DD')}));
        }}
        maxDate={dayjs()}
      />
    </View>
  )
}

export default InputDate

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 10,
  },
})