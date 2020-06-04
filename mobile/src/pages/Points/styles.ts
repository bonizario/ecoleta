import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  padding-top: ${20 + Constants.statusBarHeight}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: Ubuntu_700Bold;
  margin-top: 24px;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  font-family: Roboto_400Regular;
  margin-top: 4px;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapMarkerContainer = styled.View`
  width: 90px;
  height: 70px;
  background-color: #34cb79;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
`;

export const MapMarker = styled(Marker)`
  width: 90px;
  height: 80px;
`;

export const MapMarkerImage = styled.Image`
  width: 90px;
  height: 45px;
  resize-mode: cover;
`;

export const MapMarkerTitle = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 13px;
  font-family: Roboto_400Regular;
  line-height: 23px;
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  margin: 16px 0 32px;
`;

export const Item = styled.TouchableOpacity`
  background-color: #fcfcfc;
  border: 2px solid #eee;
  border-radius: 8px;

  height: 120px;
  width: 120px;
  padding: 20px 16px 16px;
  margin-right: 8px;

  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const ItemTitle = styled.Text`
  font-size: 13px;
  font-family: Roboto_400Regular;
  text-align: center;
`;

export const SelectedItem = styled.TouchableOpacity`
  border: 2px solid #34cb79;
`;