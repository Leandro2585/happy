import React, { useState } from 'react';
import { PROVIDER_GOOGLE, Callout, Marker } from 'react-native-maps';
import { 
  Container, 
  Map,
  CalloutContainer, 
  CalloutText,
  Footer,
  FooterText,
  CreateButton
} from './style';
import { Feather } from '@expo/vector-icons';
import mapMarkerImg from '../../images/map-marker.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {

  const navigation = useNavigation();
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  
  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  });
  function handleNavigateToOrphanageDetails(id: number){
    navigation.navigate('OrphanageDetails', { id });
  }

  function handleNavigateToCreateOrphanage(){
    navigation.navigate('SelectMapPosition');
  }

    return (
        <Container>
          <Map
            provider={PROVIDER_GOOGLE} 
            initialRegion={{
              latitude: -27.2892052,
              longitude: -49.6401092,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008
            }}
          >
            {orphanages.map(orphanage => {

              return (
                <Marker
                  key={orphanage.id}
                  icon={mapMarkerImg}
                  calloutAnchor={{
                    x: 2.7,
                    y: 0.8
                  }}
                  coordinate={{
                    latitude: orphanage.latitude,
                    longitude: orphanage.longitude
                  }}
                >
                <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                  <CalloutContainer>
                    <CalloutText>
                      {orphanage.name}
                    </CalloutText>
                  </CalloutContainer>
                </Callout>
              </Marker>
              );
            })}
              
          </Map>
    
          <Footer>
            <FooterText>
              {orphanages.length} orfanatos encontrados
            </FooterText>
            <CreateButton onPress={handleNavigateToCreateOrphanage}>
              <Feather name="plus" size={20} color="#FFF"/>
            </CreateButton>
          </Footer>
        </Container>
      );
}

export default OrphanagesMap;