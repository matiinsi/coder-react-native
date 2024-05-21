import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { useSelector } from 'react-redux';
import { colors } from '../constants/colors'
import AddButton from '../components/AddButton'
import { useGetImageProfileAccountQuery } from '../services/userServices';

const MyProfile = ({navigation}) => {

    const defaultImageProfile = "../../assets/images/defaultProfile.png"
    const {imageCamera, localId} = useSelector(state => state.auth.value);

    const {data: imageFromBase} = useGetImageProfileAccountQuery(localId);

    const lounchCamera = () => {
        navigation.navigate('LaunchCamera');
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {(
                    imageCamera || imageFromBase ? 
                        <Image style={styles.imageProfile} source={{uri: imageFromBase?.image || imageCamera}} resizeMode='cover' /> 
                    : 
                        <Image style={styles.imageProfile} source={require(defaultImageProfile)} resizeMode='cover' />
                )}
                <Text style={styles.profileTextName}>Hola @user!</Text>
                <AddButton title={"Cambiar Imágen"} action={lounchCamera} bgColor={colors.green} />
            </View>
        </View>
    )
}

export default MyProfile

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
    imageProfile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileTextName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: 10,
    },
    button: {
        backgroundColor: colors.blue,
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    textButton: {
        color: colors.white,
        fontSize: 16,
    }
})