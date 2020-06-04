import React from 'react';
import { SafeAreaView } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';

import GoBackButton from '../../components/GoBackButton';
import {
  Container,
  PointImage,
  PointName,
  PointItems,
  Address,
  AddressTitle,
  AddressContent,
  Footer,
  FooterButton,
  FooterButtonText,
} from './styles';

const Details: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBackButton />

        <PointImage
          source={{
            uri:
              'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          }}
        />
        <PointName>Mercadão do Jão</PointName>
        <PointItems>Lâmpadas, Óleo de Cozinha</PointItems>

        <Address>
          <AddressTitle>Endereço</AddressTitle>

          <AddressContent>Rio do Sul, SC</AddressContent>
        </Address>
      </Container>

      <Footer>
        <FooterButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#fcfcfc" />
          <FooterButtonText>Whatsapp</FooterButtonText>
        </FooterButton>

        <FooterButton onPress={() => {}}>
          <Icon name="mail" size={20} color="#fcfcfc" />
          <FooterButtonText>E-mail</FooterButtonText>
        </FooterButton>
      </Footer>
    </SafeAreaView>
  );
};

export default Details;
