import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Icon1 from '../../assets/icons/icon1.svg';
import Icon2 from '../../assets/icons/icon2.svg';
import Icon3 from '../../assets/icons/icon3.svg';
import Icon4 from '../../assets/icons/icon4.svg';
import Icon5 from '../../assets/icons/icon5.svg';
import Icon6 from '../../assets/icons/icon6.svg';
import Calender from '../../assets/icons/calender.svg';
import { ButtonPrimary, ButtonSecondary } from '../../shared';
import { FontFamily, FontSize } from '../../enums';

const data = [
  {
    header: "Company",
    description: "Non congue dolor pellentesque vitae ac at habitant id justo sodales eleifend ornare lectus sed suspendisse eu aenean...",
    uploaded_date: "2 DAY AGO",
    icon: <Icon1 width={'100%'} height={90} /> // SVG icon with specified size
  },
  {
    header: "Financial Plan",
    description: "Non congue dolor pellentesque vitae ac at habitant id justo sodales eleifend ornare lectus sed suspendisse eu aenean...",
    uploaded_date: "FEBRUARY 28, 2021",
    icon: <Icon2 width={'100%'} height={90} />
  },
  {
    "header": "Execution",
    "description": "Non congue dolor pellentesque vitae ac at habitant id justo sodales eleifend ornare lectus sed suspendisse eu aenean...",
    "uploaded_date": "FEBRUARY 9, 2021",
    icon: <Icon3 width={'100%'} height={90} />
  },
  {
    "header": "Company",
    "description": "Non congue dolor pellentesque vitae ac at habitant id justo sodales eleifend ornare lectus sed suspendisse eu aenean...",
    "uploaded_date": "DECEMBER 19, 2020",
    icon: <Icon4 width={'100%'} height={90} />
  },
  {
    "header": "Company",
    "description": "Non congue dolor pellentesque vitae ac at habitant id justo sodales eleifend ornare lectus sed suspendisse eu aenean...",
    "uploaded_date": "MAY 31, 2015",
    icon: <Icon5 width={'100%'} height={90} />
  },
  {
    "header": "Company",
    "description": "Non congue dolor pellentesque vitae ac at habitant id justo sodales eleifend ornare lectus sed suspendisse eu aenean...",
    "uploaded_date": "MAY 29, 2014",
    icon: <Icon6 width={'100%'} height={90} />
  }
  // Add more items here
];

const Card = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  flex: 1;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 2;
`;

const Header = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #1B1D21;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #9D9DAA;
  margin-bottom: 10px;
`;

const UploadedDate = styled.Text`
  font-size: 12px;
  color: #9D9DAA;
`;

const Container = styled.View`
  flex: 1;
  padding-inline: 10px;
  background-color: #fff;
`;
const ImageContainer = styled.View`
  padding-bottom: 10px;
`;
const BlogsHeaderContainer = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const BlogsButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export default function BlogsScreen() {
  const screenWidth = Dimensions.get('screen').width;
  const numColumns = screenWidth > 768 ? 4 : screenWidth > 700 ? 3 : 2;
  console.log('@@@FontSize.XL', FontSize.XL)
  return (
    <Container>
      <BlogsHeaderContainer>
        <Text style={{ fontFamily: FontFamily.MEDIUM, fontSize: FontSize.LG.unit }}>Blogs</Text>
        <BlogsButtonContainer>
          <View style={{ marginRight: 10 }}>
            <ButtonPrimary label={'Add'} />
          </View>
          <View>
            <ButtonSecondary label={'Preview'} />
          </View>
        </BlogsButtonContainer>
      </BlogsHeaderContainer>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        key={numColumns?.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card>
            <ImageContainer>
              {item.icon}
            </ImageContainer>
            <Header>{item.header}</Header>
            <Description style={{ fontSize: FontSize.XS.unit }}>{item.description}</Description>
            <View style={{flexDirection:'row'}}>
              <Calender style={{marginRight:5}}/>
              <UploadedDate style={{ fontFamily: FontFamily.SEMIBOLD, }}>{item.uploaded_date}</UploadedDate>
            </View>
          </Card>
        )}
      />
    </Container>
  );
}
