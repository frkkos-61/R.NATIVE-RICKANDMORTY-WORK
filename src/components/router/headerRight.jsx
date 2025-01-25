import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import Colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { FILTERCHARACTERS, SEARCHCHARACTERS } from '../../utils/routes';

const HeaderRight = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>navigation.navigate(SEARCHCHARACTERS)} style={styles.button}>
        <SearchNormal size={25} color={Colors.BLACK} />
      </Pressable>
      <Pressable onPress={()=>navigation.navigate(FILTERCHARACTERS)} style={styles.button}>
        <FilterSearch size={25} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 3,
  },
});
