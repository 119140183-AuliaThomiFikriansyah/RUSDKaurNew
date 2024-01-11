import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {Colors} from '../../../Assets';

const Sukses = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.ViewContainer}>
        <View>
          <Text
            style={{
              color: Colors.HitamDefault,
              fontSize: 16,
              fontFamily: 'FiraSansSemiBold',
            }}>
            ABSENSI PAGI
          </Text>
          <Text
            style={{
              color: Colors.HitamDefault,
              fontSize: 16,
              fontFamily: 'FiraSansRegular',
            }}>
            1 Okt 2023 07:48
          </Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: Colors.HijauDefault,
              borderRadius: 5,
              width: 100,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.PutihDefault,
                fontSize: 16,
                fontFamily: 'FiraSansRegular',
              }}>
              Sukses
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sukses;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  ViewContainer: {
    marginTop: 10,
    height: 80,
    width: windowWidth * 0.9,
    borderColor: Colors.BiruDefault,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
