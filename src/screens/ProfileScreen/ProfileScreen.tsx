import {Image, FlatList} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const {userId} = routes.params;

  // Query the user with userID

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
