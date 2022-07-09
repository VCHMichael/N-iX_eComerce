import {View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';

import {generalStyles} from 'UI/generalStyles';
const Loader = () => {
  const {loaderContainer} = generalStyles();
  return (
    <View style={loaderContainer}>
      <ActivityIndicator animating={true} />
    </View>
  );
};

export default Loader;
