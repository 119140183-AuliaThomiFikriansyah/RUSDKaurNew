import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Dimensions} from 'react-native';

import {Colors} from '../../Assets';

const Waktu = () => {
  const [tanggal, setTanggal] = useState(new Date());
  const [jam, setJam] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      const now = new Date();
      setTanggal(now);
      setJam(now);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const getFormattedDate = date => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const getFormattedTime = date => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.View}>
        <Text style={styles.Text}>{getFormattedDate(tanggal)}</Text>
        <Text style={styles.Text}>{getFormattedTime(jam)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Waktu;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Container: {
    width: windowWidth * 0.9,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.BiruDefault,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  Text: {
    fontSize: 15,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
});
