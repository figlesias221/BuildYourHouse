import React, {useState} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import {gray} from '../../styles/theme';
import i18n from '../../translations';
import styles from './styles';

const data = [
  {label: i18n.t('home.exitAndSave'), value: '1'},
  {label: i18n.t('home.exitNoSave'), value: '2'},
  {label: i18n.t('home.exitAndContinue'), value: '3'},
];

const DropdownComponent = () => {
  const [value] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemTextStyle={{
          fontSize: 12,
          color: gray,
        }}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={() => {
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;
