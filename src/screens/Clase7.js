import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ItemAnimal from '../components/ItemAnimal';
import ItemParcial from '../components/ItemParcial';

const URL_API = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
const URL_API_PARCIAL = 'https://fakerapi.it/api/v1/persons';

const Clase6 = () => {
  const [dataApi, setDataApi] = useState();
  const [dataParcial, setDataParcial] = useState();

  const getApiAnimal = async () => {
    const result = await fetch(URL_API);
    const json = await result.json();
    setDataApi(json);
  };

  const getApiParcial = async () => {
    const result = await fetch(URL_API_PARCIAL);
    const json = await result.json();
    setDataParcial(json.data);
  };

  // Consumir API REST de Animales
  useEffect(() => {
    getApiAnimal();
  }, []);

  // Consumir API REST de Parcial
  useEffect(() => {
    getApiParcial();
  }, []);

  // Se renderiza cada Item usando el componente de ItemAnimal
  const renderItemApi = listItem => {
    const item = listItem.item;
    return <ItemAnimal infoItem={item} />;
  };

  // Se renderiza cada Item usando el componente de ItemAnimal
  const renderItemParcial = listItem => {
    const item = listItem.item;
    console.log(' Parcial ==> ', item)
    return <ItemParcial infoItem={item} />;
  };

  return (
    <View style={clStyle.container}>
      <FlatList
        data={dataParcial}
        keyExtractor={item => item.id}
        renderItem={renderItemParcial}
      />
    </View>
  );
};

const clStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 50,
  },
});

export default Clase6;
