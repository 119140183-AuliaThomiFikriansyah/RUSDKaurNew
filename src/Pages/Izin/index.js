import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../Assets';

import {
  Deskripsi,
  DropKeperluanIzin,
  TanggalIzin,
  UploadFoto,
} from '../../Components';

const Izin = () => {
  const navigation = useNavigation();

  const [keperluanIzin, setKeperluanIzin] = useState('');
  const [tanggalAwal, setTanggalAwal] = useState('');
  const [tanggalAkhir, setTanggalAkhir] = useState('');
  const [uploadfoto, setUploadFoto] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  // Fungsi untuk menangani perubahan tanggal
  const handleTanggalChange = ({startDate, endDate}) => {
    setTanggalAwal(startDate);
    setTanggalAkhir(endDate);
  };

  const HandleKirim = screen => {
    console.log(keperluanIzin);
    console.log(tanggalAwal);
    console.log(tanggalAkhir);
    console.log(uploadfoto);
    console.log(deskripsi);
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
            Pengajuan Izin
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.Footer}>
          <View style={styles.ViewFooter}>
            <DropKeperluanIzin
              onInputChange={value => {
                setKeperluanIzin(value);
              }}
            />
          </View>
          <View style={styles.ViewFooter}>
            <TanggalIzin onInputChange={handleTanggalChange} />
          </View>
          <View style={styles.ViewFooter}>
            <UploadFoto
              onInputChange={value => {
                setUploadFoto(value);
              }}
            />
          </View>
          <View style={styles.ViewFooter}>
            <Deskripsi
              placeholder="Deskripsi"
              value={deskripsi}
              onChangeText={text => setDeskripsi(text)}
            />
          </View>
          <TouchableOpacity style={styles.ButtonKirim} onPress={HandleKirim}>
            <Text style={styles.ButtonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Izin;

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
  },
  View: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  ViewFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  ButtonKirim: {
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
});
