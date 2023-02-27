import {StyleSheet} from 'react-native';

import {gray, primary} from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 0,
  },
  textActive: {
    color: '#58DBDB',
    marginTop: 9,
    fontSize: 12,
  },
  textInactive: {
    color: gray,
    fontSize: 12,
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
