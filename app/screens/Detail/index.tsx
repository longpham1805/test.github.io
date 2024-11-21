import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Screen from '../../components/screen';
import {Data} from '../../models/request.model';
import VerifyIcon from '../../assets/icons/verified.svg';
import MoreIcon from '../../assets/icons/more.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import CommentIcon from '../../assets/icons/comment.svg';
import IconReact from '../../assets/icons/icon-comment.svg';
import ImageComment from '../../assets/icons/library.svg';

const PostDetails = ({route}: any) => {
  const dataPost: Data = route.params.social;

  return (
    <Screen
      middleHeader={
        <View style={styles.wrapInfo}>
          <Image style={styles.avatar} source={{uri: dataPost.image}} />
          <View style={styles.wrapName}>
            <View style={styles.accountWrap}>
              <Text style={styles.nameAccount}>{dataPost.name}</Text>
              <VerifyIcon />
            </View>
            <View style={styles.wrapSubAccount}>
              <Text style={styles.subName}>{dataPost.species} </Text>
              <View style={styles.point} />
              <Text style={styles.subName}>2 giờ </Text>
            </View>
          </View>
        </View>
      }
      rightHeader={
        <TouchableOpacity>
          <MoreIcon />
        </TouchableOpacity>
      }>
      <View style={styles.postContent}>
        <Text>{dataPost.episode}</Text>
        <Image style={styles.imagePost} source={{uri: dataPost.image}} />
        <Text style={styles.views}>55k lượt xem</Text>
        <View style={styles.groupReaction}>
          <TouchableOpacity>
            <Text style={styles.views}>11k thích </Text>
          </TouchableOpacity>
          <View style={styles.pointDot} />
          <TouchableOpacity>
            <Text style={styles.views}>6 Bình luận </Text>
          </TouchableOpacity>
          <View style={styles.pointDot} />
          <TouchableOpacity>
            <Text style={styles.views}>2 chia sẻ </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reactionWrap}>
          <View style={styles.likeWrap}>
            <TouchableOpacity>
              <HeartIcon />
            </TouchableOpacity>
            <Text style={styles.reactionText}>11k</Text>
          </View>
          <View style={styles.likeWrap}>
            <TouchableOpacity>
              <CommentIcon />
            </TouchableOpacity>
            <Text style={styles.reactionText}>55k</Text>
          </View>
        </View>
      </View>
      <View style={styles.commentWrap}>
        <Image
          style={styles.avatarComment}
          resizeMode="contain"
          source={require('../../assets/images/Avatar.png')}
        />
        <TextInput placeholder="Nhập bình luận" style={styles.inputComment} />
        <TouchableOpacity style={styles.reactButton}>
          <IconReact />
        </TouchableOpacity>
        <TouchableOpacity style={styles.reactButton}>
          <ImageComment />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 20,
  },
  wrapInfo: {flexDirection: 'row', alignItems: 'center'},
  accountWrap: {flexDirection: 'row', alignItems: 'center'},
  wrapName: {marginLeft: 5},
  nameAccount: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    marginRight: 5,
  },
  subName: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#A3A3A3',
  },
  point: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#A3A3A3',
    marginHorizontal: 2,
  },
  wrapSubAccount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  imagePost: {
    height: 418,
    borderRadius: 10,
    marginTop: 10,
  },
  views: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 16,
    color: '#71717A',
    marginTop: 10,
  },
  groupReaction: {flexDirection: 'row', alignItems: 'center'},
  pointDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#A3A3A3',
    marginHorizontal: 2,
    marginTop: 10,
  },
  reactionWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  likeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  reactionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#4D5761',
    marginLeft: 5,
  },
  commentWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
   paddingBottom: 30
  },
  avatarComment: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  inputComment: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  reactButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
});
