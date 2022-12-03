import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ItemAnimal from '../components/ItemAnimal';

const URL_API = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

const Clase6 = () => {
  const [dataApi, setDataApi] = useState();

  const getApiAnimal = async () => {
    const result = await fetch(URL_API);
    const json = await result.json();
    setDataApi(json);
  };

  // Consumir API REST de Animales
  useEffect(() => {
    getApiAnimal();
  }, []);

  // Se renderiza cada Item usando el componente de ItemAnimal
  const renderItemApi = listItem => {
    const item = listItem.item;
    return <ItemAnimal infoItem={item} />;
  };

  return (
    <View style={clStyle.container}>
      <FlatList
        data={dataApi}
        keyExtractor={item => item.id}
        renderItem={renderItemApi}
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
