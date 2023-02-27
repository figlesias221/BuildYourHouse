import {StyleSheet} from 'react-native';

import {gray} from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 10,
    marginBottom: 10,
    width: 150,
    borderRadius: 5,
  },
  dropdown: {
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 11,
    color: gray,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
});

export default styles;
