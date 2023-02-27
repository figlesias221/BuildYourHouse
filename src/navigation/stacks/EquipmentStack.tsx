import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOME} from '../../utils/route';
import equipmentScreens from '../screens/equipmentScreens';

const Stack = createStackNavigator();

const EquipmentStack = () => (
  <Stack.Navigator initialRouteName={HOME}>
    {equipmentScreens.map(({name, component: Component, options}: any) => (
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

export default EquipmentStack;
