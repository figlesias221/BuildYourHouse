import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOME} from '../../utils/route';
import endingsScreens from '../screens/endingsScreens';

const Stack = createStackNavigator();

const EndingsStack = () => (
  <Stack.Navigator initialRouteName={HOME}>
    {endingsScreens.map(({name, component: Component, options}: any) => (
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

export default EndingsStack;
