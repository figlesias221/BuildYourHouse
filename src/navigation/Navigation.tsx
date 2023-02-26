import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Image,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {UNAUTH_STACK} from '../utils/route';
import TabNavigator from './TabNavigator';
import Home from '../screens/Home';
import {Plus} from '../assets';
import DropdownComponent from '../components/Dropdown';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
      <Image style={{width: 50, height: 20}} source={Plus} />
      <DropdownComponent />
    </View>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#333333',
            shadowColor: 'transparent',
          },
        }}
        initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{headerTitle: props => <LogoTitle />}}
        />
        <Stack.Screen name={UNAUTH_STACK} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
