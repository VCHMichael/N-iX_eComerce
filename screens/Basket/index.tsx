import {View, FlatList} from 'react-native';
import React from 'react';
import {generalStyles} from 'UI/generalStyles';
import {Button, Card, Divider, Paragraph} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {BasketActions} from 'store/basket/actions';

const Basket = () => {
  const {wrapper, dividerWithMargin} = generalStyles();
  const products = useAppSelector(state => state.basket.products);
  const dispatch = useAppDispatch();
  const handleRemoveFromBasket = (id: string) =>
    dispatch(BasketActions.removeFromBasket(id));
  const renderItem = ({item}: {item: any}) => (
    <Card>
      <Card.Title title={item.name} />
      <Card.Cover source={{uri: item.img}} />
      <Card.Content>
        <Paragraph>{`PRICE: ${item.price}`}</Paragraph>
        <Paragraph>{`COLOR: ${item.colour}`}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => handleRemoveFromBasket(item.id)}>Remove</Button>
        <Button>Buy</Button>
      </Card.Actions>
    </Card>
  );
  const separator = () => <Divider style={dividerWithMargin} />;
  return (
    <View style={wrapper}>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={products}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Basket;
