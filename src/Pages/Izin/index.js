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

  const HandleKirim = async (e) => {
        e.preventDefault();

    const formData = new FormData();
    formData.append("keperluan", keperluanIzin);
    formData.append("tanggalawal", tanggalAwal);
    formData.append("tanggalakhir", tanggalAkhir);
    formData.append("foto", uploadfoto);
    formData.append("kategori", "izin");
    formData.append("deskripsi", deskripsi);
    await axios
      .post(`http://127.0.0.1:8000/api/izin`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: "silahkan cek email anda untuk melakukan verifikasi akun anda",
        });
        navigate("/Menu");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);

          console.log("error");
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
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
