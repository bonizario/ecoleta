import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import PickerSelect from 'react-native-picker-select';

import {
  Container,
  Main,
  Ecoleta,
  Title,
  Description,
  Input,
  Footer,
  HomeButton,
  HomeButtonIcon,
  HomeButtonText,
} from './styles';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface Picker {
  label: string;
  value: string;
}

const Home: React.FC = () => {
  const [ufs, setUfs] = useState<Picker[]>([]);
  const [cities, setCities] = useState<Picker[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const navigation = useNavigation();

  useEffect(() => {
    const loadUfs = async () => {
      const response = await axios.get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
      );

      const UfPickers: Picker[] = response.data.map((uf: IBGEUFResponse) => ({
        label: uf.sigla,
        value: uf.sigla,
      }));

      setUfs(UfPickers);
    };

    loadUfs();
  }, []);

  useEffect(() => {
    if (selectedUf === '0') return;

    const loadCities = async () => {
      const response = await axios.get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderBy=nome`
      );

      const CityPickers: Picker[] = response.data.map((city: IBGECityResponse) => ({
        label: city.nome,
        value: city.nome,
      }));

      setCities(CityPickers);
    };

    loadCities();
  }, [selectedUf]);

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity,
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container
        source={require('../../assets/home-background.png')}
        imageStyle={{ width: 274, height: 368 }}
      >
        <Main>
          <Ecoleta source={require('../../assets/logo.png')} />
          <Title>Seu marketplace de coleta de resíduos</Title>
          <Description>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
          </Description>
        </Main>

        <Footer>
          <Input>
            <PickerSelect
              items={ufs}
              value={selectedUf}
              onValueChange={value => setSelectedUf(value)}
              placeholder={{ label: 'Escolha um estado', value: undefined }}
            />
          </Input>
          <Input>
            <PickerSelect
              disabled={selectedUf === ''}
              items={cities}
              value={selectedCity}
              onValueChange={value => setSelectedCity(value)}
              placeholder={{ label: 'Escolha uma cidade', value: undefined }}
            />
          </Input>
          <HomeButton onPress={handleNavigateToPoints}>
            <HomeButtonText>Entrar</HomeButtonText>
            <HomeButtonIcon>
              <Icon name="arrow-right" color="#fcfcfc" size={24} />
            </HomeButtonIcon>
          </HomeButton>
        </Footer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
