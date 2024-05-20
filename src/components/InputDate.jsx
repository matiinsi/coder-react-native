import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const InputDate = () => {
  const [date, setDate] = useState(dayjs());

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