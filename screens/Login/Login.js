import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Input from '../../components/Input/Input';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import {logIn, resetToInitialState} from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundWhite]}>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 8}
          />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header type={3} title={"Don't have an account?"} color={'#156CF7'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
