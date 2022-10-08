import React from 'react';
import {Text, View} from 'react-native';
import Cumple from './src/components/cumple';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> Clase de App </Text>
      <Cumple title="Mi cumpleaños Feliz" name="Maryon" />
      <Cumple name="Camila" />
      <Cumple title="Otro cumpleaños Feliz" name="Jose Perez" />
    </View>
  );
};

export default App;
