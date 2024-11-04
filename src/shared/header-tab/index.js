import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import BackIcon from '../../assets/icons/back-icon.svg'
import LogoTextIcon from '../../assets/icons/logotext.svg'
import AvatarIcon from '../../assets/icons/avatar.svg'
import SearchIcon from '../../assets/icons/Search.svg'
import ArrowIcon from '../../assets/icons/arrow.svg'
import { SearchInputWrapper } from '..';
// import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderTeb = ({ title, showBack, searchFilter }) => {
  const navigation = useNavigation()
  const [searchedText, setSearchText] = useState('')
  return (
    <SafeAreaView backgroundColor={'#fff'}>
      <View style={styles.headerContainer}>
        <View style={{ marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '93%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          {
            searchFilter ? (
              <>
                <View style={{ width: '46%' }}>
                <SearchInputWrapper value={searchedText} placeholder={'After Glow'} onChangeText={({value})=> setSearchText(value)} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }} >
                  <Text style={{ marginRight: 10, color: '#9D9DAA' }}>
                    Scenario
                  </Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#676E7E', marginRight: 6 }}>Default</Text>
                    <ArrowIcon />
                  </View>
                </View>
              </>
            ) : null
          }
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <SearchIcon />
            <AvatarIcon style={{ width: 40, marginLeft: 15 }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 4,
    flexDirection: 'row',
    // paddingHorizontal: 16,
    borderBottomWidth: 1,
    width: '100%',
    borderColor: 'rgba(27, 29, 33, 0.1)'
    // borderWidth:2
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    // fontWeight: 'bold',
    // fontFamily:'Inter-Black'
  },
});

export default HeaderTeb;
