import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

const Cumple = props => {
  const name = 'Maryon Torres Interno';
  const photo = '';
  const user_year = 0;
  const age = 0;
  const year = 2022;

  const handledAlert = () => {
    console.log('Evento desde App');
    alert('Feliz cumpleaños ' + props.nayibjme);
  };

  return (
    <View
      style={{
        flex: 1,
        marginVertical: 50,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: 'blue',
          backgroundColor: 'yellow',
        }}>
        {props.title || 'Componente Sin nombre'}
      </Text>
      <View
        style={{
          padding: 20,
        }}>
        <Text> {name} </Text>
        <TextInput
          defaultValue="Input nombre"
          style={{
            height: 40,
            borderColor: 'red',
            borderWidth: 1,
          }}
        />
      </View>
      <Button title="Mostrar" onPress={handledAlert} />
    </View>
  );
};

export default Cumple;
