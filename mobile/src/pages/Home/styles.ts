import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Ecoleta = styled.Image``;

export const Title = styled.Text`
  color: #322154;
  font-size: 32px;
  font-family: Ubuntu_700Bold;
  max-width: 260px;
  margin-top: 64px;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  line-height: 24px;
  font-family: Roboto_400Regular;
  margin-top: 16px;
  max-width: 260px;
`;

export const Footer = styled.View``;

export const Input = styled.View`
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #fcfcfc;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 0 24px;
  font-size: 18px;
`;

export const HomeButton = styled(RectButton)`
  background-color: #34cb79;
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;

export const HomeButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const HomeButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #fcfcfc;
  font-family: Roboto_500Medium;
  font-size: 16px;
`;
