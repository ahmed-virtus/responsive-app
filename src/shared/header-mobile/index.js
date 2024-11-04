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

const HeaderMobile = ({ title, showBack, searchFilter }) => {
    const [searchedText, setSearchText] = useState('')
    const navigation = useNavigation()
    return (
        <SafeAreaView backgroundColor={'#fff'}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => showBack ? null: navigation.goBack() } style={{ width: 70, }}>
                    {
                        showBack ?  null: <BackIcon />
                    }
                </TouchableOpacity>
                <View>
                    <LogoTextIcon />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <SearchIcon />
                    <AvatarIcon style={{ width: 40, marginLeft: 15 }} />
                </View>
            </View>
            {
                searchFilter ? (
                    <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                        <View style={{ width: '46%' }}>
                            <SearchInputWrapper value={searchedText} placeholder={'After Glow'} onChangeText={({value})=> setSearchText(value)} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ marginRight: 10, color: '#9D9DAA' }}>
                                Scenario
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#676E7E', marginRight: 6 }}>Default</Text>
                                <ArrowIcon />
                            </View>
                        </View>
                    </View>
                ) : null
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 55,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
    },
});

export default HeaderMobile;
