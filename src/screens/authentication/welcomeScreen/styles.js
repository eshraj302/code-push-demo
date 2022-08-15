import {StyleSheet} from 'react-native';
import {COLORS} from '@constants/index';

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.BLACK,
    fontSize: 30,
  },
  label: {
    color: COLORS.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: COLORS.RED,
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
