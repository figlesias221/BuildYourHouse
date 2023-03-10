import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOME} from '../../utils/route';
import openingsScreens from '../screens/openingsScreens';

const Stack = createStackNavigator();

const OpeningsStack = () => (
  <Stack.Navigator initialRouteName={HOME}>
    {openingsScreens.map(({name, component: Component, options}: any) => (
      <Stack.Screen
        name={name}
        key={name}
        options={{
          ...(options || {}),
        }}>
        {props => <Component {...props} />}
      </Stack.Screen>
    ))}
  </Stack.Navigator>
);

export default OpeningsStack;
