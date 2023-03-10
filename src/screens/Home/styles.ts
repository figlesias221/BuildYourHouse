import {StyleSheet} from 'react-native';

import {gray, primary, secondary, white} from '../../styles/theme';

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: gray,
  },
  row: {
    flexDirection: 'row',
  },
  addItemWrapper: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: secondary,
  },
  screenWrapper: {
    flex: 1,
    backgroundColor: primary,
    justifyContent: 'space-between',
    padding: 20,
  },
  textButtonContainer: {
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: white,
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  plusButtonContainer: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    justifyContent: 'center',
    backgroundColor: white,
    width: 30,
    height: 35,
    alignItems: 'center',
    borderBottomColor: primary,
    borderBottomWidth: 1,
  },
  minusButtonContainer: {
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    justifyContent: 'center',
    backgroundColor: white,
    width: 30,
    height: 35,
    alignItems: 'center',
  },
  arrowsContainer: {
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: white,
    width: 70,
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: 70,
  },
  magnifierContainer: {
    flexDirection: 'column',
    marginRight: 20,
    borderRadius: 4,
  },
  actionsContainer: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 15,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginRight: 15,
  },
  topArrow: {width: 25, height: 20},
  bottomArrow: {
    transform: [{rotateX: '180deg'}],
    width: 25,
    height: 20,
  },
  leftArrow: {
    width: 25,
    height: 20,
    alignSelf: 'flex-start',
    transform: [{rotateZ: '-90deg'}],
  },
  rightArrow: {
    width: 25,
    height: 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    transform: [{rotateZ: '90deg'}],
  },
});

export default styles;
