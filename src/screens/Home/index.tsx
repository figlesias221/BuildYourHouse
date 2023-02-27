import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {Arrow, Minus, Plus} from '../../assets';
import i18n from '../../translations';
import {ADD_ITEM} from '../../utils/route';
import styles from './styles';

const Home = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.screenWrapper}>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.textButtonContainer}
          onPress={() => console.log(i18n.t('home.fix'))}>
          <Text style={styles.buttonText}>{i18n.t('home.fix')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textButtonContainer}
          onPress={() => console.log(i18n.t('home.delete'))}>
          <Text style={styles.buttonText}>{i18n.t('home.delete')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.textButtonContainer}
          onPress={() => navigate(ADD_ITEM as never)}>
          <Text style={styles.buttonText}>{i18n.t('home.addItem')}</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <View style={styles.magnifierContainer}>
            <TouchableOpacity
              style={styles.plusButtonContainer}
              onPress={() => console.log(i18n.t('home.plus'))}>
              <Image style={{width: 20, height: 20}} source={Plus} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.minusButtonContainer}
              onPress={() => console.log(i18n.t('home.minus'))}>
              <Image style={{width: 20, height: 20}} source={Minus} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.arrowsContainer}>
            <Image style={styles.topArrow} source={Arrow} />
            <Image style={styles.rightArrow} source={Arrow} />
            <Image style={styles.leftArrow} source={Arrow} />
            <Image style={styles.bottomArrow} source={Arrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
