import {View, Text} from 'react-native';
import React from 'react';
import {generalStyles} from 'UI/generalStyles';

const Home = () => {
  const {centeredWrapper} = generalStyles();
  return (
    <View style={centeredWrapper}>
      <Text>Some home page here. Such us banner, news etc.</Text>
    </View>
  );
};

export default Home;
