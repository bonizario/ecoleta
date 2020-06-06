import React, { useState, useEffect } from 'react';
import { SafeAreaView, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import api from '../../services/api';
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

interface Params {
  point_id: number;
}

interface Data {
  point: {
    image: string;
    image_url: string;
    name: string;
    whatsapp: string;
    email: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Details: React.FC = () => {
  const [data, setData] = useState<Data>({} as Data);
  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    const getPointDetails = async () => {
      const response = await api.get(`points/${routeParams.point_id}`);

      setData(response.data);
    };

    getPointDetails();
  }, []);

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: [data.point.email],
    });
  }

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}`);
  }

  if (!data.point) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <GoBackButton />

          <PointName>Carregando...</PointName>
        </Container>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBackButton />

        <PointImage source={{ uri: data.point.image_url }} />
        <PointName>{data.point.name}</PointName>
        <PointItems>{data.items.map(item => item.title).join(', ')}</PointItems>

        <Address>
          <AddressTitle>Endereço</AddressTitle>

          <AddressContent>
            {data.point.city}, {data.point.uf}
          </AddressContent>
        </Address>
      </Container>

      <Footer>
        <FooterButton onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={20} color="#fcfcfc" />
          <FooterButtonText>Whatsapp</FooterButtonText>
        </FooterButton>

        <FooterButton onPress={handleComposeMail}>
          <Icon name="mail" size={20} color="#fcfcfc" />
          <FooterButtonText>E-mail</FooterButtonText>
        </FooterButton>
      </Footer>
    </SafeAreaView>
  );
};

export default Details;
