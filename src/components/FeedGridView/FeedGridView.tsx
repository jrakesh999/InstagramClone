import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import ProfileHeader from '../../screens/ProfileScreen/ProfileHeader';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      // style={{backgroundColor: 'red'}}
      data={data}
      renderItem={({item}) => <FeedGridItem post={item} />}
      keyExtractor={item => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      style={{marginHorizontal: -1}}
    />
  );
};

export default FeedGridView;
