import { PropTypes } from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { FontFamily, FontSize } from '../../enums';
function ButtonSecondary({
  borderRadius,
  height,
  isHidden,
  disabled,
  label,
  onPress,
  width,
  textColor,
  fontSize,
}) {
  if (isHidden) {
    return null;
  }

  const BtnContainer = styled.TouchableOpacity`
    /* border-width: 2; */
    background-color: #6C5DD3;
    padding-inline: 20;
    padding-block: 8;
    /* shadowColor: 'rgba(28, 78, 197, 0.4)';
    shadowRadius: 12;
    elevation: 12;
    paddingHorizontal: 20;
    shadowOpacity: 1;  */
    /* shadowOffset: {
      width: 0,
      height: 8,
    }, */
    /* paddingVertical: 12; */
  `

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <BtnContainer style={{borderRadius:12}} disabled={disabled}
    //    style={containerStyle} 
       onPress={onPress}>
        <Text
        //   color={textColor}
          style={{color:'#fff', fontFamily: FontFamily.BOLD, fontSize: FontSize.SM}}
        //   size={FontSize.SM}
        //   fontFamily={FontFamily[getFontFamily('BOLD')]}
        //   letterSpacing={-1.24}
        //   style={{ letterSpacing: 1.6, fontSize: fontSize, textAlign: 'center' }}
        //   padding={Padding.BOTTOM_1X}
        >
          {label}
        </Text>
      </BtnContainer>
    </View>
  );
}



export default ButtonSecondary;
