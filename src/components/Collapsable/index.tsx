import React, {Component, useState} from 'react';

import {
  Image,
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DropdownArrow} from '../../assets';
import {gray, white} from '../../styles/theme';

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
                  style={{width: 70, height: 70, alignSelf: 'center'}}
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

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: '90%',
    overflow: 'hidden',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: white,
    marginBottom: 20,
  },
  itemWrapper: {
    width: '100%',
    overflow: 'hidden',
    padding: 10,
  },
  title: {
    color: gray,
  },
  description: {
    color: gray,
    alignSelf: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    transform: [{rotateZ: '90deg'}],
  },
});
