import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabBar from '../components/TabBar';
import tabScreens from '../navigation/tabScreens';
import {HOME} from '../utils/route';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      //initialRouteName={HOME}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      {tabScreens.map(({name, component, options}: any) => (
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
