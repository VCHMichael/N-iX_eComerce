import {FlatList, Text, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {PostsActions} from 'store/posts/actions';
import Loader from 'components/Loader';
import {Divider, List} from 'react-native-paper';
import {generalStyles} from 'UI/generalStyles';

const Posts = () => {
  const dispatch = useAppDispatch();
  const {wrapper, dividerWithMargin} = generalStyles();
  const fetchData = useCallback(() => {
    dispatch(PostsActions.getAllPosts());
  }, [dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const posts = useAppSelector(state => state.posts.posts);
  const isLoading = useAppSelector(state => state.loader.getAllPosts);
  const renderItem = ({item}: {item: any}) => (
    <List.Accordion title={item.type}>
      <Text>{item.data}</Text>
    </List.Accordion>
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
            data={posts}
            renderItem={renderItem}
            ItemSeparatorComponent={separator}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
};

export default Posts;
