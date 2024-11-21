import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Data} from '../../../models/request.model';

export interface Props {
  display: boolean;
}

const Album = ({display}: Props) => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState<Data[]>([]);
  const getData = () => {
    return fetch('https://rickandmortyapi.com/api/character?page=1&limit=10')
      .then(response => response.json())
      .then(json => {
        setData(json.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {display && (
        <View style={styles.container}>
          {data.map(social => (
            <TouchableOpacity
              key={social.id}
              onPress={() => navigation.navigate('Details', {social})}>
              <Image style={styles.imageView} source={{uri: social.image}} />
              <Text style={styles.textTitle}>{social.species}</Text>
              <Text style={styles.textfile}>{social.episode.length} mục</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

export default Album;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: Platform.OS === 'android' ? 10 : 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  imageView: {width: 128, height: 160, borderRadius: 8},
  textTitle: {fontSize: 14, fontWeight: '500', marginTop: 5},
  textfile: {fontSize: 12, fontWeight: 400, color: '#9DA4AE', marginBottom: 10},
});
