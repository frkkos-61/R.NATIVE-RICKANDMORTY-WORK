import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleCharacter, resetData} from '../../store/actions/characterActions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/characterCard';
import {CharacterStyle} from '../../styles/charactersStyle';
import {statusTypes} from '../../utils/constant';

const CharacterDetail = ({route}) => {
  const {characterID} = route?.params;
  const {pendingSingleCharacter, sinleCharacter} = useSelector(
    state => state.character,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCharacter(characterID));
    return () => {
      dispatch(resetData())
    };
  }, []);
  return (
    <View style={screenStyle.container}>
      {pendingSingleCharacter ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={CharacterStyle.imgcontainer}>
            <Image
              style={[
                CharacterStyle.imgOne,
                sinleCharacter.status == statusTypes.ALIVE
                  ? CharacterStyle.statusAliveContainer
                  : CharacterStyle.statusDeadContainer,
              ]}
              source={{
                uri: sinleCharacter.image,
              }}
            />
            <View
              style={
                sinleCharacter.status == statusTypes.ALIVE
                  ? CharacterStyle.alivesStatusContainer
                  : CharacterStyle.deadStatusContainer
              }>
              <Text style={CharacterStyle.status}>{sinleCharacter.status}</Text>
            </View>
          </View>
          <View style={CharacterStyle.nameContainer}>
            <Text style={CharacterStyle.nameOne}>{sinleCharacter.name}</Text>
          </View>
          <View style={CharacterStyle.sectionContainer}>
            <Text style={CharacterStyle.sectionTitle}>PROPERTIES</Text>
            <View style={CharacterStyle.rowContainer}>
              <View style={CharacterStyle.infContainer}>
                <Text style={{fontWeight: 'bold'}}>Gender</Text>
              </View>
              <View style={CharacterStyle.infoBox}>
                <Text style={{fontWeight: 'bold'}}>
                  {sinleCharacter.gender}
                </Text>
              </View>
            </View>
            <View style={CharacterStyle.rowContainer}>
              <View style={{backgroundColor: '#e5ded1', padding: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>Species</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#e5ded1',
                  padding: 10,
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 2,
                }}>
                <Text style={{fontWeight: 'bold'}}>
                  {sinleCharacter.species}
                </Text>
              </View>
            </View>
            <View style={CharacterStyle.rowContainer}>
              <View style={CharacterStyle.infContainer}>
                <Text style={{fontWeight: 'bold'}}>Status</Text>
              </View>
              <View style={CharacterStyle.infoBox}>
                <Text style={{fontWeight: 'bold'}}>
                  {sinleCharacter.status}
                </Text>
              </View>
            </View>
          </View>
          <View style={CharacterStyle.sectionContainer}>
            <Text style={CharacterStyle.sectionTitle}>WHERE ABOUTS</Text>
          </View>
          <View style={CharacterStyle.rowContainer}>
            <View style={CharacterStyle.infContainer}>
              <Text style={{fontWeight: 'bold'}}>Origin</Text>
            </View>
            <View style={CharacterStyle.infoBox}>
              <Text style={{fontWeight: 'bold'}}>
                {sinleCharacter?.origin?.name}
              </Text>
            </View>
          </View>
          <View style={CharacterStyle.rowContainer}>
            <View style={CharacterStyle.infContainer}>
              <Text style={{fontWeight: 'bold'}}>Location</Text>
            </View>
            <View style={CharacterStyle.infoBox}>
              <Text style={{fontWeight: 'bold'}}>
                {sinleCharacter?.location?.name}
              </Text>
            </View>
          </View>
          <View style={CharacterStyle.sectionContainer}>
            <Text style={CharacterStyle.sectionTitle}>FEATURE CHAPTERS</Text>
          </View>
          <View style={CharacterStyle.rowContainer}>
            <View style={CharacterStyle.infContainer}>
              <Text style={{fontWeight: 'bold'}}>Created</Text>
            </View>
            <View style={CharacterStyle.infoBox}>
              <Text style={{fontWeight: 'bold'}}>{sinleCharacter.created}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({});
