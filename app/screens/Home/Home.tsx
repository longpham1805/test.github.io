import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import Screen from '../../components/screen';
import CameraIcon from '../../assets/icons/camera.svg';
import SearchIcon from '../../assets/icons/search.svg';
import LockIcon from '../../assets/icons/lock.svg';
import ShieldIcon from '../../assets/icons/shield.svg';
import UserAddIcon from '../../assets/icons/addUser.svg';
import ImageIcon from '../../assets/icons/image.svg';
import PostCamera from '../../assets/icons/post-camera.svg';
import FlagIcon from '../../assets/icons/flag.svg';
import LocationIcon from '../../assets/icons/location.svg';
import AddUserIcon from '../../assets/icons/user-add.svg';
import SmileIcon from '../../assets/icons/smile-ellipse.svg';
import VideoIcon from '../../assets/icons/video.svg';
import ImagePage from './ImagePage';
import SocicalPage from '../Social';
import ModalStatus from './ModalStatus';
import VideoPage from './VideoPage';
import Album from './AlbumPage';
const HomeScreen = () => {
  const Features = [
    {
      id: 1,
      title: 'Thảo luận',
      active: true,
    },
    {
      id: 2,
      title: 'Ảnh',
      active: false,
    },
    {
      id: 3,
      title: 'Video',
      active: false,
    },
    {
      id: 4,
      title: 'Album',
      active: false,
    },
    {
      id: 5,
      title: 'File',
      active: false,
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [features, setFeatures] = useState(Features);
  const activeId = useMemo(
    () => features?.find(item => item.active)?.id,
    [features],
  );

  const onSelect = (selectedID: number) => {
    setFeatures(
      features.map(feature => {
        if (feature.id === selectedID) {
          return {...feature, active: true};
        } else {
          return {...feature, active: false};
        }
      }),
    );
  };

  return (
    <Screen
      title="UI/UX Graphic Designers in VietNam"
      rightHeader={
        <TouchableOpacity>
          <SearchIcon />
        </TouchableOpacity>
      }
      sticky={[3]}>
      <View style={styles.imageWall}>
        <TouchableOpacity style={styles.imageButton}>
          <CameraIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titlePage}>UI/UX Graphic Designers in VietNam</Text>
        <View style={styles.infoPage}>
          <LockIcon style={styles.lockIcon} />
          <Text style={styles.textInfo}>Nhóm riêng tư· 36,9k thành viên </Text>
        </View>
        <View style={styles.groupButton}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#3864FF'}]}>
            <ShieldIcon />
            <Text style={[styles.textButton, {color: '#FFFFFF'}]}>Quản lý</Text>
          </TouchableOpacity>
          <View style={{width: 10}} />
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#F3F4F6'}]}>
            <UserAddIcon />
            <Text style={[styles.textButton, {color: '#4D5761'}]}>Mời</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.postStatus}>
        <View style={styles.status}>
          <Image
            style={styles.avatar}
            resizeMode="contain"
            source={require('../../assets/images/Avatar.png')}
          />
          <TouchableOpacity
            style={styles.writeStatus}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStatus}>Hãy viết gì đó cho hôm nay</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.postButtonGroup}>
          <TouchableOpacity style={styles.iconButtons}>
            <PostCamera />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButtons}>
            <ImageIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButtons}>
            <VideoIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButtons}>
            <LocationIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButtons}>
            <AddUserIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButtons}>
            <SmileIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButtons}>
            <FlagIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.tabView}>
          {features.map(feature => {
            return (
              <TouchableOpacity
                key={feature.id}
                onPress={() => {
                  onSelect(feature.id);
                }}
                style={[
                  feature.active
                    ? {backgroundColor: '#3864FF'}
                    : {backgroundColor: '#F9FAFB'},
                  styles.tabButton,
                ]}>
                <Text
                  style={[
                    styles.textTab,
                    {
                      color: feature.active ? '#FFFFFF' : '#4D5761',
                    },
                  ]}>
                  {feature.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.contentView}>
        <SocicalPage display={activeId === 1} />
        <ImagePage display={activeId === 2} />
        <VideoPage display={activeId === 3} />
        <Album display={activeId === 4} />
      </View>

      <ModalStatus
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWall: {
    height: 190,
  },
  imageButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  titlePage: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
  },
  infoPage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  lockIcon: {
    marginRight: 5,
  },
  textInfo: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  groupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  textButton: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    marginLeft: 5,
  },
  postStatus: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
  },
  writeStatus: {
    flex: 1,
    marginLeft: 15,
  },
  textStatus: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#D2D6DB',
  },
  postButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },
  iconButtons: {},
  tabView: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  tabButton: {
    height: 32,
    alignItems: 'center',
    borderRadius: 999,
    padding: 6,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  textTab: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    textAlign: 'center',
  },
  contentView: {
    marginTop: 5,
    flex: 1,
    // backgroundColor: '#FFFFFF',
  },
});
