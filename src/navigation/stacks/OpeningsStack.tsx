import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import authScreens from '../../navigation/screens/authScreens';
import {COLLECTION} from '../../utils/route';

const Stack = createStackNavigator();

const OpeningsStack = () => (
  <Stack.Navigator initialRouteName={COLLECTION}>
    {authScreens.map(({name, component: Component, options}: any) => (
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
