import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InitialPage from '../pages/InitalPage';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator 
    screenOptions={{ 
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' }
     }}
  >  
    <App.Screen name="InitialPage" component={InitialPage} />
  </App.Navigator>
);

export default AppRoutes;