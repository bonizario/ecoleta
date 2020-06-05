import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, SafeAreaView } from 'react-native';
import { SvgUri } from 'react-native-svg';

import api from '../../services/api';
import GoBackButton from '../../components/GoBackButton';
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
} from './styles';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await api.get('items');

        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadItems();
  }, []);

  function handleNavigateToDetails() {
    navigation.navigate('Details');
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.indexOf(id);

    if (alreadySelected === -1) setSelectedItems([...selectedItems, id]);
    else {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBackButton />
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
          {items.map(item => (
            <Item
              key={String(item.id)}
              onPress={() => handleSelectItem(item.id)}
              activeOpacity={1}
              isSelected={selectedItems.includes(item.id)}
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ScrollView>
      </ItemsContainer>
    </SafeAreaView>
  );
};

export default Points;
