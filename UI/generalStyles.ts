import {StyleSheet} from 'react-native';

export const generalStyles = () =>
  StyleSheet.create({
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      flex: 1,
      paddingHorizontal: 24,
    },
    centeredWrapper: {
      flex: 1,
      paddingHorizontal: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dividerWithMargin: {
      marginVertical: 10,
    },
  });
