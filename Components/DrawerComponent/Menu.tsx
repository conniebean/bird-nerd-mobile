import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Screens/Profile.tsx';
import MyBirds from '../Screens/MyBirds.tsx';
import HomeScreen from '../Screens/Home.tsx';

const Drawer = createDrawerNavigator();
const Menu: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#c6cbef',
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="My Birds" component={MyBirds} />
    </Drawer.Navigator>
  );
};
export default Menu;
