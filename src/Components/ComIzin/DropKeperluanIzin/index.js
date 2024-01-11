import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';
import {Colors} from '../../../Assets';

const data = [
  {label: 'Izin', value: '1'},
  {label: 'Sakit', value: '2'},
];

const DropKeperluanIzin = ({onInputChange}) => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.Item}>
        <Text style={styles.TextItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.Dropdown}
      placeholderStyle={styles.PlaceholderStyle}
      selectedTextStyle={styles.SelectedTextStyle}
      data={data}
      labelField="label"
      valueField="value"
      placeholder="Pilih Keperluan"
      value={value}
      onChange={item => {
        setValue(item.value);
        const pilihan = `${item.label}`;
        console.log(`${pilihan}`);
        onInputChange(pilihan);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropKeperluanIzin;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Dropdown: {
    width: windowWidth * 0.9,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderColor: Colors.BiruDefault,
    borderWidth: 1,
  },
  Item: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextItem: {
    fontSize: 16,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
  PlaceholderStyle: {
    fontSize: 16,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
  SelectedTextStyle: {
    fontSize: 16,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
});
