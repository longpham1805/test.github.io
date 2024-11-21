import {
  Image,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/header';
import CloseIcon from '../../../assets/icons/clear.svg';
import VerifyIcon from '../../../assets/icons/verified.svg';
import SelectDropdown from 'react-native-select-dropdown';
import GlobalIcon from '../../../assets/icons/global.svg';
import DownIcon from '../../../assets/icons/chevron-down.svg';
import ImageIcon from '../../../assets/icons/image.svg';
import PostCamera from '../../../assets/icons/post-camera.svg';
import CalendarIcon from '../../../assets/icons/calendar.svg';
import LocationIcon from '../../../assets/icons/location.svg';
import AddUserIcon from '../../../assets/icons/user-add.svg';
import SmileIcon from '../../../assets/icons/smile-ellipse.svg';
import VideoIcon from '../../../assets/icons/video.svg';
export interface Props {
  visible: boolean;
  onClose: () => void;
}

const ModalStatus = ({visible, onClose}: Props) => {
  const emojisWithIcons = [
    {title: 'Công khai'},
    {title: 'Bạn bè'},
    {title: 'Chỉ mình tôi'},
  ];
  const [selectValue, setSelectValue] = useState({title: 'Công khai'});
  return (
    <Modal
      style={styles.modalContainer}
      animationType="slide"
      visible={visible}>
      <Header
        styleContainer={styles.header}
        title="Tạo bài viết"
        left={
          <TouchableOpacity onPress={onClose}>
            <CloseIcon />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity disabled={true} style={styles.postButton}>
            <Text>Đăng</Text>
          </TouchableOpacity>
        }
      />
      <View style={styles.accountPost}>
        <Image
          style={styles.avatar}
          resizeMode="contain"
          source={require('../../../assets/images/Avatar.png')}
        />
        <View style={styles.wrapName}>
          <View style={styles.accountWrap}>
            <Text style={styles.nameAccount}>Phạm Hải Long</Text>
            <VerifyIcon />
          </View>
          <SelectDropdown
            data={emojisWithIcons}
            defaultValue={selectValue}
            onSelect={(selectedItem, index) => {
              setSelectValue(selectedItem);
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  {selectedItem && <GlobalIcon />}
                  <Text style={styles.dropdownItemTxtStyle}>
                    {selectedItem && selectedItem.title}
                  </Text>
                  {isOpened ? <DownIcon /> : <DownIcon />}
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && {backgroundColor: '#D2D9DF'}),
                  }}>
                  <GlobalIcon />
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.textinput}
          multiline
          numberOfLines={99}
          placeholder="Hãy viết gì đó cho hôm nay"
        />
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
          <CalendarIcon />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalStatus;

const styles = StyleSheet.create({
  modalContainer: {flex: 1},
  header: {
    height: 44,
    marginTop: Platform.OS === 'ios' ? 60 : 25,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  postButton: {
    height: 28,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
  },
  textinput: {},
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
  accountPost: {flexDirection: 'row', paddingHorizontal: 15},
  dropdownButtonStyle: {flexDirection: 'row', alignItems: 'center'},
  dropdownItemStyle: {flexDirection: 'row', alignItems: 'center', padding: 5},
  dropdownItemTxtStyle: {fontSize: 14, fontWeight: '500', marginLeft: 5},
  input: {paddingHorizontal: 10, marginTop: 10, flex: 1},
  postButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  iconButtons: {},
});
