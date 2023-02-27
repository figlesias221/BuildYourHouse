import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabBar from '../components/TabBar';
import tabScreens from '../navigation/tabScreens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
      {tabScreens.map(({name, component}: any) => (
        <Tab.Screen
          component={component}
          key={name}
          name={name}
          options={{headerShown: false}}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
