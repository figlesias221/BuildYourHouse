import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Collapsable from '../../components/Collapsable';
import i18n from '../../translations';
import styles from '../styles';

const Endings = () => {
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    return await fetch(
      'https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones',
    )
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text style={styles.title}>{i18n.t('items.endings')}</Text>
      <ScrollView style={styles.wrapper}>
        {data &&
          data.map((item: any, index: number) => (
            <Collapsable key={index} title={item.name} items={item.items} />
          ))}
      </ScrollView>
    </View>
  );
};

export default Endings;
