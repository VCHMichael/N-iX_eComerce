import React, {useCallback, useEffect} from 'react';
import {Card, Button, Paragraph, Title} from 'react-native-paper';

import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {ProductsActions} from 'store/products/actions';
import {useTypedRoute} from 'navigation/model';
import Loader from 'components/Loader';
import {BasketActions} from 'store/basket/actions';

const Product = () => {
  const dispatch = useAppDispatch();
  const route = useTypedRoute();
  const id = route.params?.id;
  const fetchData = useCallback(() => {
    dispatch(ProductsActions.getProductById(id));
  }, [dispatch, id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const product = useAppSelector(state => state.products.currentProduct);
  const isLoading = useAppSelector(state => state.loader.getProductById);
  const handleAddToBasket = () => dispatch(BasketActions.addToBasket(product));
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Card>
          <Card.Cover source={{uri: product.img}} />
          <Card.Content>
            <Title>{product.name}</Title>
            <Paragraph>{`PRICE: ${product.price}`}</Paragraph>
            <Paragraph>{`COLOR: ${product.colour}`}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={handleAddToBasket}>Add to basket</Button>
          </Card.Actions>
        </Card>
      )}
    </>
  );
};

export default Product;
