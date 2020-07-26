import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button'

import { useAuth } from '../../hooks/auth';

import { Container, TitleLaravel, TitleReact, ContainerTitle, FormInput } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}


const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const handleSignIn = useCallback(async(data: SignInFormData) => {
    
    await signIn({
      email: data.email,
      password: data.password,
    });

  },[signIn]);


  return ( 
    <Container>
      <ContainerTitle>
        <TitleLaravel>Laravel</TitleLaravel>
        <TitleReact>React Native</TitleReact>
      </ContainerTitle>

      <FormInput ref={formRef} onSubmit={handleSignIn}>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" secureTextEntry icon="lock" placeholder="Your password"/>

      <Button onPress={() => {
        formRef.current?.submitForm();
      }}>Log in</Button>
      </FormInput>
    </Container>
  )};

export default SignIn;