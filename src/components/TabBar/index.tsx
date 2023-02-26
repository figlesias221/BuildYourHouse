import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Pressable, View} from 'react-native';

import tabScreens, {ITabScreens} from '../../navigation/tabScreens';
import TabBarIcon from '../TabBarIcon';
import styles from './styles';

const shouldResetTabNavigator = (index: number, activeIndex: number) =>
  index === activeIndex;

const TabBar = ({state, navigation: {navigate}}: BottomTabBarProps) => {
  const {index: activeIndex} = state;

  const onPress = (tab: ITabScreens, index: number) =>
    navigate(
      tab.name,
      shouldResetTabNavigator(index, activeIndex) ? {screen: tab.default} : {},
    );

  return (
    <View style={styles.container}>
      {tabScreens.map((tab: any, index: any) => (
        <Pressable key={tab.name} onPress={() => onPress(tab, index)}>
          <TabBarIcon isActive={index === activeIndex} tab={tab} />
        </Pressable>
      ))}
    </View>
  );
};

export default TabBar;
