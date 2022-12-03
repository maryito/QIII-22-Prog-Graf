import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, ActivityIndicator} from 'react-native';

const data = {
  name: 'Southern Rockhopper Penguin',
  latin_name: 'Eudyptes chrysocome',
  animal_type: 'Bird',
  active_time: 'Diurnal',
  length_min: '1.75',
  length_max: '1.8',
  weight_min: '4.5',
  weight_max: '9.5',
  lifespan: '23',
  habitat: 'Ocean, rocky cliffs, grassland and coastal shores',
  diet: 'Krill, crustaceans, fish, and squid',
  geo_range: 'Sub-Antarctic islands and southern South America',
  image_link:
    'https://upload.wikimedia.org/wikipedia/commons/e/ee/Gorfou_sauteur_-_Rockhopper_Penguin.jpg',
  id: 167,
};

const ItemAnimal = ({infoItem}) => {
  const [hidden, setHidden] = useState(true);
  const [item, setItem] = useState({});

  useEffect(() => {
    if (infoItem.id) {
      setHidden(false);
      setItem(infoItem);
    }
    console.log('Item ==> ', infoItem);
  }, []);

  return (
    <View>
      {hidden ? (
        <ActivityIndicator />
      ) : (
        <View style={clStyle.containerHorizontal}>
          <View>
            <Image source={{uri: item.image_link}} style={clStyle.img} />
          </View>

          <View>
            <Text style={clStyle.text}> Nombre: {item.name} </Text>
            <Text style={clStyle.text}> Latin_name: {item.latin_name} </Text>
            {/* <Text style={clStyle.text}> Latin_name: { data.latin_name } </Text>
            <Text style={clStyle.text}> Animal_type: { data.animal_type } </Text>
            <Text style={clStyle.text}> Active_time: { data.active_time } </Text>
            <Text style={clStyle.text}> Habitat: { data.habitat } </Text>
            <Text style={clStyle.text}> Diet: { data.diet } </Text> */}
          </View>
        </View>
      )}
    </View>
  );
};

const clStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    paddingVertical: 5,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginRight: 25,
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default ItemAnimal;
