import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../Assets';

const SetProfil = () => {
  const [profil, setProfil] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user")
      .then((res) => res.json())
      .then((result) => {
        setProfil(result);
      });
  }, []);
  const navigation = useNavigation();

  const HandleGoTo = screen => {
    navigation.navigate(screen);
  };

  const HandlLogout = () => {
    navigation.navigate('Login');
  };
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.TextInformasi}>
        <Text
          style={{
            color: Colors.HitamDefault,
            fontFamily: 'FiraSansSemiBold',
            fontSize: 16,
          }}>
          Informasi Akun
        </Text>
      </View>
    {news.map((item, index) => (
      <View style={{marginTop: windowWidth * 0.025}}>
        <View style={styles.view}>
          <Text style={styles.TextTetap}>Nama</Text>
          <Text style={styles.TextDinamis}>{item.nama}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.TextTetap}>Nomer Telephon</Text>
          <Text style={styles.TextDinamis}>{item.no_hp}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.TextTetap}>Email</Text>
          <Text style={styles.TextDinamis}>{item.email}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.TextTetap}>Alamat</Text>
          <Text style={styles.TextDinamis}>{item.alamat}</Text>
        </View>
      </View>
    ))}
    </SafeAreaView>
  );
};

export default SetProfil;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PutihDefault,
    marginHorizontal: 50,
    height: windowheight * 0.47,
    borderRadius: 20,
    marginTop: -windowheight * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: 'center',
  },
  TextInformasi: {
    marginTop: windowWidth * 0.025,
    width: 240,
  },
  view: {
    width: 240,
    height: windowheight * 0.069,
  },
  TextTetap: {
    color: Colors.FontAbuABu,
    fontFamily: 'FiraSansSemiBold',
  },
  TextDinamis: {
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
});
