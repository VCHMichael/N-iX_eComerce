import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/native';

import {TabStackParamList} from './TabStack/model';
import {ProductsStackParamList} from './ProductsStack/model';

export enum Routes {
  TabStack = 'TabStack',
  Home = 'Home',
  ProductsStack = 'ProductsStack',
  Products = 'Products',
  Product = 'Product',
  Posts = 'Posts',
  Basket = 'Basket',
}

export type RootStackParamList = TabStackParamList &
  ProductsStackParamList & {
    [Routes.TabStack]: {screen: Routes};
    [Routes.ProductsStack]: undefined;
  };

export type RootNavigationProp<
  RouteName extends keyof RootStackParamList = Routes,
> = NativeStackNavigationProp<RootStackParamList, RouteName>;

export const useTypedNavigation = () =>
  useNavigation<RootNavigationProp<Routes>>();
export const useTypedRoute = () => useRoute<any>();
