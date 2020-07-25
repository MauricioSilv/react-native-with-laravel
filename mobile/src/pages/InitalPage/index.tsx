import React from 'react';
import { View, Button } from 'react-native';

import { useAuth  } from '../../hooks/auth';

const IntialPage: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ 
     flex: 1, 
     justifyContent: 'center', 
     paddingLeft: 20, 
     paddingRight: 20 
  }}>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
}

export default IntialPage;