import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, SafeAreaView, Alert } from 'react-native';
import { SvgUri } from 'react-native-svg';
import * as Location from 'expo-location';

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

interface Point {
  id: number;
  name: string;
  image: string;
  image_url: string;
  latitude: number;
  longitude: number;
}

interface Params {
  uf: string;
  city: string;
}

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const navigation = useNavigation();
  const routes = useRoute();

  const routeParams = routes.params as Params;

  useEffect(() => {
    const loadPosition = async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Ooops...',
          'Precisamos de sua permissão para obter a localização.'
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    };

    loadPosition();
  }, []);

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

  useEffect(() => {
    const loadPoints = async () => {
      try {
        const response = await api.get('points', {
          params: {
            city: routeParams.city,
            uf: routeParams.uf,
            items: selectedItems,
          },
        });

        setPoints(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    loadPoints();
  }, [selectedItems]);

  function handleNavigateToDetails(id: number) {
    navigation.navigate('Details', { point_id: id });
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
          {initialPosition[0] !== 0 && (
            <Map
              loadingEnabled={initialPosition[0] === 0}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map(point => (
                <MapMarker
                  key={String(point.id)}
                  onPress={() => handleNavigateToDetails(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                >
                  <MapMarkerContainer>
                    <MapMarkerImage source={{ uri: point.image_url }} />
                    <MapMarkerTitle>{point.name}</MapMarkerTitle>
                  </MapMarkerContainer>
                </MapMarker>
              ))}
            </Map>
          )}
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
