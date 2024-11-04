import React, { useRef, useState, useEffect } from 'react';
import { Animated, Platform, TextInput, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { FontFamily, FontSize, Padding, Scaling } from '../../enums';
import Arrow from '../../assets/icons/arrow.svg'

function SearchInputWrapper({
    autoCorrect,
    backgroundColor,
    containerStyle,
    defaultValue,
    fontFamily,
    fontSize,
    getTheme,
    iconComponent,
    iconName,
    iconSize,
    inputLabelColor,
    inputLabelFontFamily,
    inputLabelFontSize,
    isEditable,
    isHidden,
    isPassword,
    keyboardType,
    letterSpacing,
    maxLength,
    multiline,
    numberOfLines,
    rightIconName,
    rotateonLang,
    placeholder,
    scaling,
    textColor,
    textAlignVertical,
    validator,
    onChangeText,
    onFocus,
    PaddingRight,
    error,
    activeBorder,
    onBlur,
    onPress,
    textInputWidth,
    autoFocus,
    iconEnabled
}) {
    if (isHidden) {
        return null;
    }
    const inputRef = useRef(null);
    const isIOS = Platform.OS === 'ios';



    const [value, setValue] = useState('');
    const [isEnabledPlaceholder, setIsEnabledPlaceholder] = useState(defaultValue ? true : false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, [fadeAnim, value]);
    const onValueChange = text => {
        if (placeholder === 'Enter Email Address') {
            text = text.trim();
        } else if (placeholder === 'Enter Expiry') {
            if (text.indexOf('.') >= 0 || text.length > 5) {
                return;
            }

            if (text.length === 2 && text.length === 1) {
                text += '/';
            }
            setValue(text);
        }


        setValue(text);
        setIsEnabledPlaceholder(text.length > 0 ? true : false);

        if (!text) {

        } else {

        }

        onChangeText({ value: text });
    };
    const textInputStyle = StyleSheet.flatten([
        {
            color: textColor || '#1B1D21',
            letterSpacing,
            width: textInputWidth ? textInputWidth : '100%',
            paddingHorizontal: 11,
        },
        multiline
            ? {
                height: 40 + numberOfLines * 10,
            }
            : null,
    ]);
    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const inputContainerStyle = StyleSheet.flatten([
        {
            borderWidth: error ? 2 : activeBorder ? 2 : 1,
            borderRadius: 10,
            height: 36,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#9D9DAAAA',
            paddingHorizontal:10,
        },
        letterSpacing,
        isIOS ? null : { alignItems: 'center' },
        { fontSize: inputLabelFontSize },
    ]);

    const styledContainer = StyleSheet.flatten([
        containerStyle, {
            justifyContent: 'center',
            overflow: 'hidden',
            width: '100%',
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#FFF',
            borderRadius: 10,
            backgroundColor: '#FAFAFB'
        }]);

    return (
        <View style={styledContainer}>
            <View style={inputContainerStyle}>
                <View style={[
                    { width: '100%', flexDirection:'row', justifyContent:'center', alignItems: 'center' }]}>
                    <TextInput
                        ref={inputRef}
                        autoCorrect={autoCorrect}
                        defaultValue={defaultValue}
                        editable={isEditable}
                        keyboardType={keyboardType}
                        isPassword={isPassword}
                        maxLength={maxLength}
                        textAlignVertical={textAlignVertical}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                        placeholder={placeholder}
                        placeholderTextColor={'#9D9DAA'}
                        secureTextEntry={isPassword}
                        style={textInputStyle}
                        onChangeText={onValueChange}
                        onFocus={onFocus}
                        returnKeyType='done'
                        onBlur={onBlur}
                    />
                    <TouchableOpacity onPress={onPress}
                        // style={Style.rightIcon}
                        style={{
                            height: 20,
                            // marginHorizontal: 10,
                            width: 20,
                            marginTop:15
                        }}
                    >
                        <Arrow
                            //  style={Style.cardImg}
                            //   height={24} width={24} 
                            resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

SearchInputWrapper.defaultProps = {
    // autoCorrect: false,
    // autoFocus: false,
    // backgroundColor: '#15191F',
    // containerStyle: {},
    // defaultValue: '',
    // fontFamily: FontFamily.MEDIUM,
    fontSize: FontSize.SM,
    // iconComponent: null,
    // iconName: '',
    // iconSize: 24,
    // inputLabelColor: '',
    // inputLabelFontFamily: FontFamily.MEDIUM,
    // inputLabelFontSize: FontSize.SM,
    // isEditable: true,
    // isHidden: false,
    // isPassword: false,a
    // keyboardType: 'default',
    // letterSpacing: 0.5,
    // maxLength: 250,
    // textInputWidth: '100%',
    // multiline: false,
    // numberOfLines: 1,
    // rightIconName: '',
    // rotateonLang: false,
    // scaling: Scaling.PARTIAL_50,
    // textColor: '#E6E7E9',
    // textAlignVertical: 'center',
    // underlineColorAndroid: 'transparent',
    // validator: () => true,
    // PaddingRight: 20,
    // iconEnabled: true
};

const s = t => t.components.inputWrapper;

export default SearchInputWrapper;
