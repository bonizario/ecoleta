import React from 'react';
import { Image } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Main,
  Title,
  Description,
  Footer,
  HomeButton,
  HomeButtonIcon,
  HomeButtonText,
} from './styles';

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points');
  }
  return (
    <Container
      source={require('../../assets/home-background.png')}
      imageStyle={{ width: 274, height: 368 }}
    >
      <Main>
        <Image source={require('../../assets/logo.png')} />
        <Title>Seu marketplace de coleta de resíduos</Title>
        <Description>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
        </Description>
      </Main>

      <Footer>
        <HomeButton onPress={handleNavigateToPoints}>
          <HomeButtonIcon>
            <Icon name="arrow-right" color="#fcfcfc" size={24} />
          </HomeButtonIcon>
          <HomeButtonText>Entrar</HomeButtonText>
        </HomeButton>
      </Footer>
    </Container>
  );
};

export default Home;
