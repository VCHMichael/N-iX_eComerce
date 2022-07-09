import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from 'navigation/model';
import Products from 'screens/Products';
import Product from 'screens/Product';

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Products}>
      <Stack.Screen name={Routes.Products} component={Products} />
      <Stack.Screen name={Routes.Product} component={Product} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
