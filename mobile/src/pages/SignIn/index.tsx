import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button'

import { Container, TitleLaravel, TitleReact, ContainerTitle, FormInput } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  },[]);


  return ( 
    <Container>
      <ContainerTitle>
        <TitleLaravel>Laravel</TitleLaravel>
        <TitleReact>React Native</TitleReact>
      </ContainerTitle>

      <FormInput ref={formRef} onSubmit={handleSignIn}>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Your password"/>

      <Button onPress={() => {
        formRef.current?.submitForm();
      }}>Entrar</Button>
      </FormInput>
    </Container>
  )};

export default SignIn;