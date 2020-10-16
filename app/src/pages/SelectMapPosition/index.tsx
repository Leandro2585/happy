import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapEvent, Marker } from 'react-native-maps';
import mapMarkerImg from '../../images/map-marker.png';
import { Container, Map } from '../OrphanagesMap/style';
import { NextButton, NextButtonText } from './style';

export default function SelectMapPosition() {
  const navigation = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  function handleNextStep() {
    navigation.navigate('OrphanageData', { position });
  }
  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }
  return (
    <Container>
      <Map 
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectMapPosition}
      >
        { position.latitude !== 0 && (
          <Marker 
            icon={mapMarkerImg}
            coordinate={{ 
              latitude: position.latitude, 
              longitude: position.latitude 
            }}
          />
        )}
      </Map>

      { position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  )
}

