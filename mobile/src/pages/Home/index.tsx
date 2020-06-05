import React, { useState } from 'react';
import { Image, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Main,
  Title,
  Description,
  Footer,
  FooterInput,
  HomeButton,
  HomeButtonIcon,
  HomeButtonText,
} from './styles';

const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city,
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
          <View>
            <Image source={require('../../assets/logo.png')} />

            <Title>Seu marketplace de coleta de resíduos</Title>
            <Description>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Description>
          </View>
        </Main>

        <Footer>
          <FooterInput
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            placeholder="Digite a UF"
            value={uf}
            onChangeText={setUf}
          />
          <FooterInput
            autoCorrect={false}
            placeholder="Digite a Cidade"
            value={city}
            onChangeText={setCity}
          />

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
