import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, ScrollView } from 'react-native';
import { SvgUri } from 'react-native-svg';

import {
  Container,
  Title,
  Description,
  MapContainer,
  Map,
  MapMarkerContainer,
  MapMarker,
  MapMarkerImage,
  MapMarkerTitle,
  ItemsContainer,
  Item,
  ItemTitle,
  SelectedItem,
} from './styles';

const Points = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetails() {
    navigation.navigate('Details');
  }

  return (
    <>
      <Container>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
        <Title>Bem vindo</Title>
        <Description>Encontre no mapa um ponto de coleta</Description>
        <MapContainer>
          <Map
            initialRegion={{
              latitude: -27.20921052,
              longitude: -49.6401092,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            <MapMarker
              onPress={handleNavigateToDetails}
              coordinate={{
                latitude: -27.20921052,
                longitude: -49.6401092,
              }}
            >
              <MapMarkerContainer>
                <MapMarkerImage
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                  }}
                />
                <MapMarkerTitle>Mercado</MapMarkerTitle>
              </MapMarkerContainer>
            </MapMarker>
          </Map>
        </MapContainer>
      </Container>

      <ItemsContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.1.9:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.1.9:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.1.9:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.1.9:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.1.9:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.1.9:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>
        </ScrollView>
      </ItemsContainer>
    </>
  );
};

export default Points;
