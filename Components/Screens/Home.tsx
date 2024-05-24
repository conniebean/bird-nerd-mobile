import {Text, View} from 'react-native';
import React from 'react';

const HomeScreen: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Your birbs are here</Text>
    </View>
  );
};

export default HomeScreen;
