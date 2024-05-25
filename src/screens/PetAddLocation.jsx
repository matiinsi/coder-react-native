import React, {useState} from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native'
import { colors } from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';
import { addPetLocationSchema } from '../validations/addPetLocationSchema';
import AddButton from '../components/AddButton';
import DropdownCountry from '../components/DropdownCountry';
import DropdownState from '../components/DropdownState';

const PetAddLocation = ({navigation}) => {

  const dispatch = useDispatch();
  const {addPet} = useSelector(state => state.pets.value);

  const [error, setError] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = () => {
      try {
        addPetLocationSchema.validate(addPet.location)
              .then(() => {
                    setError("");
                    navigation.navigate("PetAddPhoto");
              })
              .catch((error) => {
                  setError(error.message);
          });
      } catch (error) {
          setError(error.message);
      }
  };

  const handleAddPetCity = (item) => {
      dispatch(setAddPet({ 
          ...addPet,
              location: {
              ...addPet.location,
                  city: item
              }
          }
      ));
  }

  const handleAddPetAddress = (item) => {
    dispatch(setAddPet({ 
        ...addPet,
            location: {
            ...addPet.location,
                address: item
            }
        }
    ));
  }

  const handleAddPetPostalCode = (item) => {
    dispatch(setAddPet({ 
        ...addPet,
            location: {
            ...addPet.location,
              postalCode: item
            }
        }
    ));
  }

  const goBack = () => {
      navigation.goBack();
  }

  return (
      <View style={styles.petContainer}>
          <ScrollView style={styles.petContentContainer}>
              <View style={styles.petContentTopContainer}>
                  <Pressable onPress={() => navigation.goBack()}>
                      <AntDesign name="arrowleft" size={24} color="black" />
                  </Pressable>
              </View>
              <View>
                  <Text style={styles.title}>Ubicación de la Mascota</Text>
              </View>
              <View style={styles.formContainer}>
                  <View style={styles.formGroup}>
                      <Text style={styles.titleFormGroup}>País</Text>
                      <DropdownCountry 
                        isFocus={isFocus} 
                        setIsFocus={setIsFocus} 
                      />
                  </View>
                  <View style={styles.formGroup}>
                      <Text style={styles.titleFormGroup}>Provincia</Text>
                      <DropdownState 
                        isFocus={isFocus} 
                        setIsFocus={setIsFocus} 
                      />
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.titleFormGroup}>Localidad</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => handleAddPetCity(text)}
                      value={addPet?.location?.city}
                    />
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.titleFormGroup}>Dirección</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => handleAddPetAddress(text)}
                      value={addPet?.location?.address}
                    />
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.titleFormGroup}>Código Postal</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => handleAddPetPostalCode(text)}
                      value={addPet?.location?.postalCode}
                    />
                  </View>
                  {error && <Text style={styles.inputError}>{error}</Text>}
                  <View style={styles.formGroupInputs}>
                      <AddButton title={"Atrás"} action={goBack} bgColor={colors.red} size={"50%"} />
                      <AddButton title={"Siguiente"} action={handleSubmit} bgColor={colors.green} size={"50%"} />
                  </View>

              </View>
          </ScrollView>
      </View>
  )
}

export default PetAddLocation

const styles = StyleSheet.create({
    petContainer: {
        padding: 10
    },
    petContentContainer: {
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
        margin: 20,
    },
    petContentTopContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.blue,
        marginBottom: 0
    },
    titleFormGroup: {
        fontSize: 20,
        textAlign: "left",
        color: colors.blue,
        marginTop: 10,
        marginBottom: 5
    },
    formContainer: {
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
    },
    formGroup: {
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: colors.grayLight,
        zIndex: 1,
        position: "relative"
    },
    formGroupInputs: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 20,
        columnGap: 10
    },
    input: {
      borderRadius: 10,
      height: 40,
      borderColor: colors.grayDark,
      borderWidth: 1,
      width: '100%',
      padding: 10,
    },
    inputError: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        textAlign: 'center',
        color: colors.white,
    },
})