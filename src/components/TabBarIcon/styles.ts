import {StyleSheet} from 'react-native';

import {gray, primary} from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 20,
    marginLeft: 0,
  },
  textActive: {
    color: primary,
    marginTop: 9,
  },
  textInactive: {
    color: gray,
    marginTop: 9,
  },
  activeIcon: {
    tintColor: '#58DBDB',
  },
  inactiveIcon: {
    tintColor: gray,
  },
});

export default styles;
