import React, {useState} from 'react';
import {
  Image,
  LayoutAnimation,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {DropdownArrow} from '../../assets';
import styles from './styles';

const Collapsable = ({title, items}: any) => {
  const [open, setOpen] = useState(false);

  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <TouchableOpacity
      style={[styles.item, !open && {height: 40}]}
      onPress={onPress}
      activeOpacity={1}>
      <ScrollView>
        <View style={[styles.headerContainer]}>
          <Text style={styles.title}>{title}</Text>
          <Image
            style={[styles.icon, !open && {transform: [{rotateZ: '-90deg'}]}]}
            source={DropdownArrow}
          />
        </View>
        {open && (
          <ScrollView
            style={styles.wrapper}
            contentContainerStyle={{flexGrow: 1}}>
            {items.map((item: any, index: number) => (
              <View style={styles.itemWrapper} key={index}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.img,
                  }}
                />
                <Text style={styles.description} key={index}>
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </ScrollView>
    </TouchableOpacity>
  );
};

export default Collapsable;
