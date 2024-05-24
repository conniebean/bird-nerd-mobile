/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Menu from './Components/DrawerComponent/Menu.tsx';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
};

export default App;
