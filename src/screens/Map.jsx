import React, {useEffect, useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useGetPetsQuery } from '../services/petsServices'
import { useSelector } from 'react-redux';
import markerIconDog from '../../assets/images/icon-dog.png';
import markerIconCat from '../../assets/images/icon-cat.png';

const Map = ({navigation}) => {

  const mapRef = useRef(null);

  const {breedSelected, sizeSelected, petSelected, necklaceSelected, dateLostSelected, countrySelected, stateSelected} = useSelector(state => state.pets.value);
  const {location } = useSelector(state => state.auth.value);

  const {data: pets, error, isLoading } = useGetPetsQuery(
    {
        breedSelected, 
        sizeSelected, 
        petSelected, 
        necklaceSelected, 
        dateLostSelected,
        countrySelected: (countrySelected) ? countrySelected : location.country,
        stateSelected: (stateSelected) ? stateSelected : location.state
    }
  );


  const handleMarkerPress = (id) => {
    navigation.navigate('PetScreen', { screen: 'PetDetail', params: { id } });
  };

  useEffect(() => {
    if (location || stateSelected && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: (stateSelected) ? stateSelected.lat : location.lat,
        longitude: (stateSelected) ? stateSelected.lng : location.lng,
        latitudeDelta: 0.300,
        longitudeDelta: 0.300,
      }, 1000); // 1000ms de animación
    }
  }, [location, stateSelected]);

  return (
    <View style={styles.container}>
      {!isLoading ? 
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: (stateSelected) ? stateSelected.lat : location.lat,
              longitude: (stateSelected) ? stateSelected.lng : location.lng,
              latitudeDelta: 0.300,
              longitudeDelta: 0.300,
            }}
            mapType="standard"
          >
            {pets.map((pet) => (
              <Marker
                key={pet.id}
                coordinate={{ latitude: pet.location.lat, longitude: pet.location.lng }}
                title={pet.breed}
                onPress={ () => handleMarkerPress(pet.id) }
                image={(pet.petType === 'perro') ? markerIconDog : markerIconCat}
                style={{ width: 40, height: 40 }}
              />
            ))}
          </MapView>
        : <Text>Loading...</Text>
    }

    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})