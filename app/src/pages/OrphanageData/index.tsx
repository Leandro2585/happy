import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { 
  Container, 
  Title, 
  Label, 
  Input,
  ImagesInput,
  SwitchContainer, 
  NextButton, 
  NextButtonText, 
  UploadedContainer,
  UploadedImage 
} from './style';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';

interface PositionParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

export default function OrphanageData() {
  const route = useRoute();
  const params = route.params as PositionParams;
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  async function handleCreateOrphanage(){

    const { latitude, longitude } = params.position;
    const data = new FormData();
    data.append('name', name);
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image
      } as any);
    });

    await api.post('orphanages', data);

    navigation.navigate('OrphanagesMap');
  }
  async function handleSelectImages(){
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if(status !== 'granted'){
      alert('Oops... precisamos de acesso ás suas fotos.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if(result.cancelled){
      return;
    }
    const { uri: image } = result;

    setImages([...images, image]);
  }
  return (
    <Container>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input
        value={name}
        onChangeText={setName}
      />

      <Label>Sobre</Label>
      <Input
        style={{ height: 110 }}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      {/* <Label>Whatsapp</Label>
      <Input
      /> */}

      <Label>Fotos</Label>

      <UploadedContainer>
        {images.map(image => {
          return(
            <UploadedImage
              key={image}
              source={{ uri: image }}
            />
          );
        })}
      </UploadedContainer>
      
      <ImagesInput onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input
        style={{ height: 110 }}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Label>Horario de visitas</Label>
      <Input
        value={opening_hours}
        onChangeText={setOpeningHours}
      />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </SwitchContainer>

      <NextButton onPress={handleCreateOrphanage}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  )
}
