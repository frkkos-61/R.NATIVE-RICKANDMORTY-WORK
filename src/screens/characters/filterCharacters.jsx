import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../components/ui/customButton';
import {screenStyle} from '../../styles/screenStyle';
import Colors from '../../theme/colors';
import {genders, status} from '../../utils/constant';
import {useDispatch, useSelector} from 'react-redux';
import {changeParams} from '../../store/actions/characterActions';
import {useNavigation} from '@react-navigation/native';

const FilterCharacters = () => {
  const {params} = useSelector(state => state.character);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const filterCharacters = () => {
    navigation.goBack();
  };

  const clearCharacters = () => {
    dispatch(changeParams({gender: null, status: null}));
    navigation.goBack();
  };
  console.log(params);
  return (
    <View style={screenStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: 'red',
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Gender
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({gender: item.value}))}
                style={{
                  backgroundColor:
                    params.gender == item.value ? Colors.GREEN : Colors.BROWN,
                  width: 98,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 5,
                }}
                key={item.id}>
                <Text style={{color: Colors.WHITE}}> {item.name} </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 18,
              color: 'red',
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Status
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({status: item.value}))}
                style={{
                  backgroundColor:
                    params.status == item.value ? Colors.GREEN : Colors.BROWN,
                  flex: 1,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 5,
                }}
                key={item.id}>
                <Text style={{color: Colors.WHITE}}> {item.name} </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <CustomButton
          onPress={filterCharacters}
          title="Filter"
          backColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
        <CustomButton
          onPress={clearCharacters}
          title="Clear"
          backColor={Colors.BACKTITLE}
        />
      </View>
    </View>
  );
};

export default FilterCharacters;

const styles = StyleSheet.create({});
