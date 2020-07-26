import React from 'react';

import { useAuth  } from '../../hooks/auth';

import { Container, ButtonLogout, ButtonLogoutText } from './styles';

const IntialPage: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <>
      <Container>
        <ButtonLogout onPress={signOut}>
          <ButtonLogoutText>Go out</ButtonLogoutText>  
        </ButtonLogout>
      </Container>
    </>
  );
}

export default IntialPage;