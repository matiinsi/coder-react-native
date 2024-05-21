import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import DateTimePicker from 'react-native-ui-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

const InputDate = ({filter = false, handleFilterSubmit = () => {}}) => {
  const [date, setDate] = useState(dayjs());

  const dispatch = useDispatch();
  const petSelected = useSelector(state => state.pets.value.petSelected);
  const breedSelected = useSelector(state => state.pets.value.breedSelected);
  const sizeSelected = useSelector(state => state.pets.value.sizeSelected);
  const addPet = useSelector(state => state.pets.value.addPet);

  return (
    <View style={styles.pickerContainer}>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
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