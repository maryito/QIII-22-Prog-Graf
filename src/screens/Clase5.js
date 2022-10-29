import React from 'react';
import {Text, View} from 'react-native';
import Cumple from '../components/cumple';


const Clase5 = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text> Clase de App #5 </Text>
      <Cumple title="Mi cumpleaños Feliz" name="Maryon" />
      <Cumple name="Camila" />
      <Cumple title="Otro cumpleaños Feliz" name="Jose Perez" />
    </View>
  );
};

export default Clase5;
