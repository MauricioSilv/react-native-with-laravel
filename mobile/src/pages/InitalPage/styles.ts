import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  flex: 1; 
  justify-content: center; 
  padding: 0 20px; 
`;

export const ButtonLogout = styled(RectButton)`
   width: 100%;
  flex-direction: row;
  height: 60px;
  background: #ff5722;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonLogoutText = styled.Text`
  color: #eeeeee;
  font-size: 20px;
  font-weight: bold;

`;