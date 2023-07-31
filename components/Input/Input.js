import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        autoCapitalize={'none'}
        placeholder={props.placeholder ? props.placeholder : null}
        style={style.input}
        keyboardType={props.keyboardType}
        value={value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};
Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};
export default Input;
