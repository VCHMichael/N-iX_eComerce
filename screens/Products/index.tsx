import {View, FlatList} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {ProductsActions} from 'store/products/actions';
import {generalStyles} from 'UI/generalStyles';
import Loader from 'components/Loader';
import {Card, Button, Divider, Paragraph} from 'react-native-paper';
import {Routes, useTypedNavigation} from 'navigation/model';
import {BasketActions} from 'store/basket/actions';

const Products = () => {
  const {wrapper, dividerWithMargin} = generalStyles();
  const dispatch = useAppDispatch();
  const navigation = useTypedNavigation();
  const fetchData = useCallback(() => {
    dispatch(ProductsActions.getAllProducts());
  }, [dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const products = useAppSelector(state => state.products.products);
  const isLoading = useAppSelector(state => state.loader.getAllProducts);
  const handleDetailsNavigate = (id: string) =>
    navigation.navigate(Routes.Product, {id});
  const handleAddToBasket = (product: any) =>
    dispatch(BasketActions.addToBasket(product));
  const renderItem = ({item}: {item: any}) => (
    <Card>
      <Card.Title title={item.name} />
      <Card.Cover source={{uri: item.img}} />
      <Card.Content>
        <Paragraph>{`PRICE: ${item.price}`}</Paragraph>
        <Paragraph>{`COLOR: ${item.colour}`}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => handleDetailsNavigate(item.id)}>Details</Button>
        <Button onPress={() => handleAddToBasket(item)}>Add to basket</Button>
      </Card.Actions>
    </Card>
  );
  const separator = () => <Divider style={dividerWithMargin} />;
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={wrapper}>
          <FlatList
            keyExtractor={(_, i) => i.toString()}
            data={products}
            renderItem={renderItem}
            ItemSeparatorComponent={separator}
            showsVerticalScrollIndicator={false}
            refreshing={isLoading}
            onRefresh={fetchData}
          />
        </View>
      )}
    </>
  );
};

export default Products;
