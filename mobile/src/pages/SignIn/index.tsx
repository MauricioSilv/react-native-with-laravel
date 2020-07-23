import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button'

import { Container, TitleLaravel, TitleReact, ContainerTitle } from './styles';

const SignIn: React.FC = () => {
  return ( 
    <Container>
      <ContainerTitle>
        <TitleLaravel>Laravel</TitleLaravel>
        <TitleReact>React Native</TitleReact>
      </ContainerTitle>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Your password"/>


      
      <Button onPress={() => {}}>Entrar</Button>
    </Container>
  )};

export default SignIn;