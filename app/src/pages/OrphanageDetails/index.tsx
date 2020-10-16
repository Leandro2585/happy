import React, { useEffect, useState } from 'react';
import { Linking, ScrollView } from 'react-native';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import mapMarkerImg from '../images/map-marker.png';
import { 
  Container, 
  ImagesContainer, 
  Image,
  DetailsContainer, 
  Title, 
  Description,
  MapContainer,
  MapView,
  RoutesContainer, 
  RoutesText,
  Separator,
  ScheduleContainer, 
  ScheduleItem, 
  ScheduleText,
  ContactButton,
  ContactButtonText
} from './style';
import api from '../../services/api';

interface OrphanageRouteParams {
  id: number;
}

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>
}

const OrphanageDetails: React.FC = () => {
  const route = useRoute();

  const params = route.params as OrphanageRouteParams;
  
  const [orphanage, setOrphanage] = useState<Orphanage>();

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    })
  }, [params.id]);

  if(!orphanage){
    return (
      <Container>
        <Description>Carregando...</Description>
      </Container>
    );
  }

  function handleOpenGoogleMapsRoutes(){
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`);
  }
  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images.map(img => {
            return (
              <Image 
                key={img.id}
                resizeMode="cover" 
                source={{ uri: img.url }} 
              />
            );
          })}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>
      
        <MapContainer>
          <MapView 
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: orphanage.latitude,
                longitude: orphanage.longitude
              }}
            />
          </MapView>

          <RoutesContainer onPress={handleOpenGoogleMapsRoutes}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>
      
        <Separator/>

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItem isColor="blue">
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText isColor="blue">Segunda à Sexta {orphanage.opening_hours}</ScheduleText>
          </ScheduleItem>
          {orphanage.open_on_weekends ? (
            <ScheduleItem isColor="green">
            <Feather name="info" size={40} color="#39CC83" />
            <ScheduleText isColor="green">Atendemos fim de semana</ScheduleText>
          </ScheduleItem>
          ): (
            <ScheduleItem isColor="red">
              <Feather name="info" size={40} color="#FF6690" />
              <ScheduleText isColor="red">Não atendemos fim de semana</ScheduleText>
            </ScheduleItem>
          )}
        </ScheduleContainer>

        <ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
}

export default OrphanageDetails;