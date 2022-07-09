import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from 'navigation/model';
import {TabStackParamList} from './model';

import ProductsStack from 'navigation/ProductsStack';
import Home from 'screens/Home';
import Posts from 'screens/Posts';
import Basket from 'screens/Basket';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabStack = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.Home}>
      <Tab.Screen name={Routes.Home} component={Home} />
      <Tab.Screen
        name={Routes.ProductsStack}
        component={ProductsStack}
        options={{headerShown: false, tabBarLabel: 'Products'}}
      />
      <Tab.Screen name={Routes.Posts} component={Posts} />
      <Tab.Screen name={Routes.Basket} component={Basket} />
    </Tab.Navigator>
  );
};

export default TabStack;
