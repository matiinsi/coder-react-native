
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {converSize} from '../helpers/converSize'
import { convertDate } from '../helpers/convertDate'
import { colors } from '../constants/colors'

const Card = ({item, navigation}) => {

    const {breed, size, color, dateLost, id} = item;
    
    return (
        <>
            <View style={styles.cardContainer}>
                <Image source={{uri: "https://placehold.co/100x100"}} style={{width: 100, height: 100}} />
                <View style={styles.cardContainerText}>
                    <Text><Text style={styles.cardTitleItem}>Raza:</Text> { breed }</Text>
                    <Text><Text style={styles.cardTitleItem}>Tamaño:</Text> { converSize(size) }</Text>
                    <Text><Text style={styles.cardTitleItem}>Color:</Text> { color }</Text>
                    <Text><Text style={styles.cardTitleItem}>Perdido:</Text> {convertDate(dateLost)}</Text>
                    <View>
                        <TouchableOpacity 
                            style={styles.cardButton}
                            onPress={() => {
                                navigation.navigate("PetDetail", {id})
                            }}
                        >
                            <Text style={styles.cardButtonText}>Ver ficha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        columnGap: 10,
        alignItems: "center",
        marginBottom: 30,
    },
    cardContainerText: {
        flex: 1
    },
    cardImageItem: {
        width: 100,
        height: 100,
        borderRadius: 10,
        objectFit: "cover"
    },
    cardTitleItem: {
        fontWeight: "600"
    },
    cardButton: {
        backgroundColor: colors.blue,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 10,
        textAlign: "center",
        marginTop: 10
    },
    cardButtonText: {
        color: colors.white,
        textAlign: "center",
        textTransform: "uppercase",
    }
})