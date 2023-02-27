import {StyleSheet} from 'react-native';
import {white, gray} from '../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  item: {
    width: '90%',
    overflow: 'hidden',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: white,
    marginBottom: 20,
  },
  itemWrapper: {
    width: '100%',
    overflow: 'hidden',
    padding: 10,
  },
  title: {
    color: gray,
  },
  description: {
    color: gray,
    alignSelf: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    transform: [{rotateZ: '90deg'}],
  },
});

export default styles;
