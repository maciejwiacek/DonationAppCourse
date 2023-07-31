import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#FFF',
    textAlign: 'center',
  },
});

export default style;
