import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharacters,
} from '../../store/actions/characterActions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/characterCard';
import SearchItem from '../../components/characters/searchItem';
import Colors from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';

const SearchCharacters = () => {
  const {charactersList, pending, params} = useSelector(
    state => state.character,
  );



  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]);

  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}));
  };

  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
        
          value={searchText}
          returnKeyType="search"
          placeholder="Search Character"
          onSubmitEditing={handleSubmit}
          style={{
            backgroundColor: Colors.BACKTITLE,
            width: '95%',
            height: 40,
            padding: 10,
            borderWidth: 0.5,
            borderRadius: 100,
            borderColor: Colors.BROWN,
          }}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
        <CustomButton
          onPress={() => handleSubmit()}
          title="Search"
          backColor={Colors.GREEN}
          titleColor={Colors.BLACK}
        />
      </View>
    );
  };

  return (
    <View style={screenStyle.container}>
      <FlatList
        data={charactersList}
        renderItem={({item}) => <SearchItem item={item} />}
        ListHeaderComponent={ListHeaderComponent}
        //onEndReachedThreshold={0.5}
        //ListFooterComponent={<Spinner />}
      />
    </View>
  );
};

export default SearchCharacters;

