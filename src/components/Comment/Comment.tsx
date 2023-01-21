import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(prev => !prev);
  };

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },
  bold: {fontWeight: fonts.weight.bold},
  comment: {flexDirection: 'row', alignItems: 'center'},
  avatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },
});
