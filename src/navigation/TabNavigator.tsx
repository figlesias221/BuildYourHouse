import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabBar from '../components/TabBar';
import tabScreens from '../navigation/tabScreens';
import {COLLECTION} from '../utils/route';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={COLLECTION}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      {tabScreens.map(({name, component, options}: any) => (
        <Tab.Screen
          component={component}
          key={name}
          name={name}
          options={options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
