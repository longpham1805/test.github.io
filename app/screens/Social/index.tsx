import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Data} from '../../models/request.model';
import VerifyIcon from '../../assets/icons/verified.svg';
import MoreIcon from '../../assets/icons/more.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import CommentIcon from '../../assets/icons/comment.svg';
import IconReact from '../../assets/icons/icon-comment.svg';
import ImageComment from '../../assets/icons/library.svg';
import { useNavigation } from '@react-navigation/native';

export interface Props {
  display: boolean;
}

const SocicalPage = ({display}: Props) => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState<Data[]>([]);
  const getData = () => {
    return fetch('https://rickandmortyapi.com/api/character?page=1&limit=10')
      .then(response => response.json())
      .then(json => {
        setData(json.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {display && (
        <View style={styles.container}>
          {data.map(social => (
            <View style={styles.wrapPost} key={social.id}>
              <View style={styles.userPost}>
                <View style={styles.wrapInfo}>
                  <Image style={styles.avatar} source={{uri: social.image}} />
                  <View style={styles.wrapName}>
                    <View style={styles.accountWrap}>
                      <Text style={styles.nameAccount}>{social.name}</Text>
                      <VerifyIcon />
                    </View>
                    <View style={styles.wrapSubAccount}>
                      <Text style={styles.subName}>{social.species} </Text>
                      <View style={styles.point} />
                      <Text style={styles.subName}>2 giờ </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity>
                  <MoreIcon />
                </TouchableOpacity>
              </View>
              <Text style={styles.textStatus}>{social.episode}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', {social})}>
                <Image style={styles.imagePost} source={{uri: social.image}} />
              </TouchableOpacity>
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
              <View style={styles.commentWrap}>
                <Image
                  style={styles.avatarComment}
                  resizeMode="contain"
                  source={require('../../assets/images/Avatar.png')}
                />
                <TextInput
                  placeholder="Nhập bình luận"
                  style={styles.inputComment}
                />
                <TouchableOpacity style={styles.reactButton}>
                  <IconReact />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactButton}>
                  <ImageComment />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </>
  );
};

export default SocicalPage;

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapPost: {marginBottom: 5, backgroundColor: '#FFFFFF', padding: 10},
  userPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  wrapInfo: {flexDirection: 'row', alignItems: 'center'},
  accountWrap: {flexDirection: 'row', alignItems: 'center'},
  wrapName: {marginLeft: 5},
  nameAccount: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    marginRight: 5,
  },
  subName: {
    fontSize: 12,
    fontWeight: '400',
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
  textStatus: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
  },
  imagePost: {
    height: 418,
    borderRadius: 10,
    marginTop: 10,
  },
  reactionWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  likeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingHorizontal: 5,
    marginVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 5,
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
