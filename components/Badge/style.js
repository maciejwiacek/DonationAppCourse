import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    color: '#FFF',
    textAlign: 'center',
  },
});

export default style;
