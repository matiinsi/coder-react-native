import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors'
import * as ImagePicker from 'expo-image-picker'
import AddButton from '../components/AddButton'
import { setImageCamera } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import { usePostImageProfileAccountMutation } from '../services/userServices';

const LaunchCamera = ({navigation}) => {

    const dispatch = useDispatch();

    const [image, setImage] = useState(null);

    const {localId} = useSelector(state => state.auth.value);

    const [triggerPost, result] = usePostImageProfileAccountMutation();

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

    const confirmImage = () => {
        try {
            dispatch(setImageCamera(image));
            triggerPost({image, localId});
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.petContentTopContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.row}>
                {image ? (
                    <>
                        <Image source={{ uri: image }} style={styles.image} />
                        <AddButton title={"Tomar otra foto"} action={pickImage} />
                        <AddButton title={"Confirmar Foto"} action={confirmImage} bgColor={colors.green} />
                    </>
                ) : (
                    <>
                        <View style={styles.noPhotoContainer}>
                            <Text>Sin foto...</Text>
                        </View>
                        <AddButton title={"Tomar foto"} action={pickImage} />
                    </>
                )}
            </View>
        </View>
    )
}

export default LaunchCamera

const styles = StyleSheet.create({
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
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.platinum,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
})