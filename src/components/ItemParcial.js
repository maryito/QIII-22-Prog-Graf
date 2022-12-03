import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, ActivityIndicator} from 'react-native';

const data = {
  id: 1,
  'firstname': 'Kyle',
  'lastname': 'Lesch',
  'email': 'viola.larkin@sawayn.biz',
  'phone': '+7168412404264',
  'birthday': '1940-07-26',
  'gender': 'male',
  address: {
    id: 0,
    street: '89106 Kulas Manors Apt. 370',
    streetName: 'Schaefer Port',
    buildingNumber: '72099',
    city: 'Jaceshire',
    zipcode: '71303-6279',
    country: 'Morocco',
    county_code: 'KY',
    latitude: -85.843244,
    longitude: -50.19806,
  },
  'website': 'http://upton.biz',
  'image': 'http://placeimg.com/640/480/people',
};

const ItemParcial = ({infoItem}) => {
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
            <Image source={{uri: item.image}} style={clStyle.img} />
          </View>

          <View>
            <Text style={clStyle.text}> Nombre: {item.firstname} </Text>
            <Text style={clStyle.text}> Apellido: {item.lastname} </Text>
            <Text style={clStyle.text}> Email: {item.email} </Text>
            <Text style={clStyle.text}> Image: {item.image} </Text>
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
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  containerHorizontal: {
    flex: 1,
    marginVertical: 5,
  },
});

export default ItemParcial;
