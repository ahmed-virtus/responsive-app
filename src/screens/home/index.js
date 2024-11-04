import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
const StyledText = styled.Text`
  font-size: 18px;
  color: red;
`;
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}
    >
      {/* <Text>Home screen</Text>
      <StyledText>
        nter Black
      </StyledText>
      <Text style={styles.blackText}>Inter Black</Text>
      <Text style={styles.boldText}>Inter Bold</Text>
      <Text style={styles.extraBoldText}>Inter Extra Bold</Text>
      <Text style={styles.regularText}>Inter Regular</Text> */}
      <Button title='Go to profile' onPress={() => navigation.navigate('Profile')} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  blackText: {
    fontFamily: 'Inter-Black',
    fontSize: 40,
  },
  boldText: {
    fontFamily: 'Inter-Bold',
    fontSize: 40,
  },
  extraBoldText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 40,
  },
  regularText: {
    fontFamily: 'Inter-Regular',
    fontSize: 40,
  },
});

export default HomeScreen