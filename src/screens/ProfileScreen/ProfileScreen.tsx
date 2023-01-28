import {Image, FlatList} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileNavigationProp,
  MyProfileRouteProp,
} from '../../types/navigation';

const ProfileScreen = () => {
  const navigation = useNavigation<
    MyProfileNavigationProp | UserProfileNavigationProp
  >();
  const routes = useRoute<MyProfileRouteProp | UserProfileRouteProp>();
  const userId = routes.params?.userId;
  // Query the user with userID

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
