import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Arrow, Minus, Plus} from '../../assets';
import styles from './styles';

const Home = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.screenWrapper}>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.textButtonContainer}
          onPress={() => console.log('Fijar')}>
          <Text style={styles.buttonText}>Fijar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textButtonContainer}
          onPress={() => console.log('Borrar')}>
          <Text style={styles.buttonText}>Borrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.magnifierContainer}>
          <TouchableOpacity style={styles.plusButtonContainer}>
            <Image style={{width: 20, height: 20}} source={Plus} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.minusButtonContainer}>
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

      {/* <Text onPress={() => navigate('un_auth_stack' as never)}>Home</Text> */}
    </View>
  );
};

export default Home;
