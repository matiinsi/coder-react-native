import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import uuid from 'react-native-uuid';
import { colors } from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { useSelector, useDispatch } from 'react-redux';
import { setAddPet } from '../features/pets/petsSlice';
import AddButton from '../components/AddButton'

const PetAddPhoto = ({navigation}) => {

  const dispatch = useDispatch();

  const {localId} = useSelector(state => state.auth.value);
  const {addPet} = useSelector(state => state.pets.value);

  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const verifyCameraPermissions = async () => {
      try {
          const {status} = await ImagePicker.requestCameraPermissionsAsync();
          if (status !== 'granted') {
              alert('Necesitamos permisos para acceder a la cámara');
              return false;
          }
          return true;
      } catch (error) {
          console.log(error);
      }
  };

  const verifyMediaLibraryPermissions = async () => {
      try {
          const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
              alert('Necesitamos permisos para acceder a la galería');
              return false;
          }
          return true;
      } catch (error) {
          console.log(error);
      }
  }

  const pickImage = async () => {
      try {
          const permission = await verifyCameraPermissions();

          if (!permission) {
              return;
          }

          let result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [1,1],
              base64: true,
              quality: 0.2,
          });

          if (!result.canceled) {
              const image = `data:image/jpg;base64,${result.assets[0].base64}`;
              setImage(image);
          }
      } catch (error) {
          console.log(error);
      }
  };

  const selectImage = async () => {
      try {
          const permission = await verifyMediaLibraryPermissions();

          if (!permission) {
              return;
          }

          let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [1,1],
              quality: 0.2,
              base64: true,
          });

          if (!result.canceled) {
              const image = `data:image/jpg;base64,${result.assets[0].base64}`;
              setImage(image);
          }
      } catch (error) {
        console.log(error);
      }
  };

  const confirmImage = () => {
      try {
          if (!image && !addPet?.profileImage) {
              setError("Debes seleccionar una imagen");
              return;
          }

          setError("");
          dispatch(setAddPet(
            {
              ...addPet, 
              profileImage: image, 
              userId: localId, 
              id: uuid.v4()
            }
          ))

          navigation.navigate("PetAddFinal");
      } catch (error) {
          setError(error.message);
      }
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
              <Text style={styles.title}>Foto de la Mascota</Text>
          </View>
          <View style={styles.row}>
              {image || addPet?.profileImage ? (
                <>
                    <Image source={{ uri: (image) ? image :addPet?.profileImage }} style={styles.image} />
                    <AddButton title={"Tomar otra foto"} action={pickImage} />
                    <AddButton title={"Elegir otra foto"} action={selectImage} />
                    <AddButton title={"Confirmar Imagen"} action={confirmImage} bgColor={colors.green} />
                </>
              ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>Sin foto...</Text>
                    </View>
                    <AddButton title={"Tomar foto"} action={pickImage} />
                    <AddButton title={"Elegir foto"} action={selectImage} />
                </>
              )}
          </View>
          {error && <Text style={styles.inputError}>{error}</Text>}
      </ScrollView>
    </View>
  )
}

export default PetAddPhoto

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
  container: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
      margin: 20,
  },
  row: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
  },
  image: {
      width: 200,
      height: 200,
      borderRadius: 20,
      marginBottom: 20,
  },
  noPhotoContainer: {
      width: 200,
      height: 200,
      borderWidth: 2,
      borderColor: colors.grayDark,
      borderRadius: 20,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
  },
})