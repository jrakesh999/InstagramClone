import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [isLiked, setIsLiked] = useState(true);
  return (
    <ScrollView>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }}
            style={styles.userAvatar}
          />
          <Text style={styles.userName}>JaneDoe</Text>
          <Entypo
            name="dots-three-vertical"
            size={16}
            style={styles.threeDots}
          />
        </View>
        {/* Content */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1673790120341-ed7b95af95e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
          }}
          style={styles.image}
        />
        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Ionicons
              name="chatbubble-outline"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="send"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="bookmark"
              size={24}
              style={{marginLeft: 'auto'}}
              color={colors.black}
            />
          </View>
          {/* Likes */}
          <Text style={styles.text}>
            Liked by <Text style={styles.bold}>Rakesh</Text> and{' '}
            <Text style={styles.bold}>99 others</Text>
          </Text>

          {/* Post description */}
          <Text style={styles.text}>
            <Text style={styles.bold}>RakeshJangid</Text> Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Hic ipsum quod quibusdam, ea
            consectetur voluptatum molestias necessitatibus, doloremque ducimus
            cupiditate soluta ullam sequi commodi a velit nam rem quos? Et.
          </Text>

          {/* Comments */}
          <Text>View all 20 comments</Text>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              <Text style={styles.bold}>RakeshJangid</Text> Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Hic ipsum quod quibusdam,
            </Text>
            <AntDesign
              name={'hearto'}
              style={styles.icon}
              color={colors.black}
            />
          </View>
          {/* Posted date */}
          <Text>18 January, 2023</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {padding: 10},
  iconContainer: {flexDirection: 'row', marginBottom: 5},
  icon: {
    marginHorizontal: 5,
  },
  text: {color: colors.black, lineHeight: 18},
  bold: {fontWeight: fonts.weight.bold},
  comment: {flexDirection: 'row', alignItems: 'center'},
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
});
