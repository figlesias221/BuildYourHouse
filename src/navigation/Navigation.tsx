import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Image, Platform, StatusBar, StyleSheet, View} from 'react-native';

import TabNavigator from './TabNavigator';
import Home from '../screens/Home';
import {Logo} from '../assets';
import DropdownComponent from '../components/Dropdown';
import {ADD_ITEM, HOME} from '../utils/route';
import {secondary} from '../styles/theme';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.logo}>
      <Image
        style={{marginLeft: 0, width: 150, height: 15, marginBottom: 10}}
        source={Logo}
      />
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
          headerStyle: styles.header,
        }}
        initialRouteName={HOME}>
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{headerTitle: props => <LogoTitle />}}
        />

        <Stack.Screen name={ADD_ITEM} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  header: {
    backgroundColor: secondary,
    shadowColor: 'transparent',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
