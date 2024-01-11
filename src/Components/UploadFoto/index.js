import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

import {launchImageLibrary} from 'react-native-image-picker';
import {Colors, IconUploadImage} from '../../Assets';

const UploadFoto = ({onInputChange}) => {
  const windowWidth = Dimensions.get('window').width;
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState(null);

  const handleImageUpload = () => {
    const options = {
      mediaType: 'photo', // Hanya foto yang akan diizinkan
    };

    launchImageLibrary(options, response => {
      if (response.assets) {
        setSelectedImage(response.assets[0].uri);
        setImageName(response.assets[0].fileName);
        console.log(response.assets[0].fileName); // Menampilkan nama file di konsol
        onInputChange(response.assets[0].fileName);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Icon}>
        {selectedImage ? (
          <Image
            source={{uri: selectedImage}}
            style={{width: windowWidth * 0.9, height: 200, borderRadius: 10}}
          />
        ) : (
          <IconUploadImage />
        )}
      </View>
      <TouchableOpacity
        style={styles.ButtonUploadFoto}
        onPress={handleImageUpload}>
        <Text style={styles.ButtonText}>Upload Foto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UploadFoto;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.9,
    height: 200,
    borderWidth: 1,
    borderColor: Colors.BiruDefault,
    borderRadius: 10,
  },
  ButtonUploadFoto: {
    marginTop: 5,
    backgroundColor: Colors.BiruDefault,
    width: windowWidth * 0.9,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 14,
    color: Colors.PutihDefault,
    textAlign: 'center',
    fontFamily: 'FiraSansSemiBold',
    textTransform: 'uppercase',
  },
});
