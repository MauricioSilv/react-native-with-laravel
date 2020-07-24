import styled from 'styled-components/native';
import { Form } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;


export const ContainerTitle = styled.View`
  margin: 64px 0 24px;
  align-items: center;
  flex-direction: row;
`;

export const TitleLaravel = styled.Text`
  font-size: 30px;
  color: #F05340;
`;

export const TitleReact = styled.Text`
  color:#61dafb;
  font-size: 30px;

`;

export const FormInput = styled(Form)`
  width: 100%;
`;