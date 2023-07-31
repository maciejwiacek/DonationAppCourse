import React from 'react';
import {Image, Pressable, View} from 'react-native';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';
import style from './style';
import PropTypes from 'prop-types';

const SingleDonationItem = props => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          source={{uri: props.uri}}
          style={style.image}
          resizeMode={'cover'}
        />
      </View>
      <View style={style.donationInfo}>
        <Header
          title={props.donationTitle}
          type={3}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </Pressable>
  );
};
SingleDonationItem.defaultProps = {
  onPress: () => {},
};
SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};
export default SingleDonationItem;
