import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../Assets';
import {Kamera, Waktu} from '../../Components';

const AbsenMasuk = () => {
  const navigation = useNavigation();

  const [selectedKamera, setSelectedKamera] = useState('');

  const HandleAbsensi = screen => {
    console.log(selectedKamera);
    navigation.navigate('Menu');
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.View}>
          <Text
            style={{
              fontFamily: 'FiraSansRegular',
              fontSize: 18,
              color: Colors.PutihDefault,
            }}>
            Absen Masuk
          </Text>
        </View>
      </View>
      <View style={styles.Footer}>
        <View style={styles.ViewFooter}>
          <Waktu />
        </View>
        <View style={styles.ViewFooter}>
          <Kamera
            onInputChange={value => {
              setSelectedKamera(value);
            }}
          />
          <TouchableOpacity
            style={styles.ButtonAbsensi}
            onPress={HandleAbsensi}>
            <Text style={styles.ButtonText}>Absensi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AbsenMasuk;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.PutihDefault,
  },
  Header: {
    width: windowWidth,
    height: windowheight * 0.1,
    backgroundColor: Colors.BiruDefault,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  View: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Footer: {
    alignItems: 'center',
  },
  ButtonAbsensi: {
    backgroundColor: Colors.BiruDefault,
    width: windowWidth * 0.9,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 20,
  },
  ButtonText: {
    fontSize: 14,
    color: Colors.PutihDefault,
    textAlign: 'center',
    fontFamily: 'FiraSansSemiBold',
    textTransform: 'uppercase',
  },
  ViewFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
