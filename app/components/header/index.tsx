import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/icons/backIcon.svg';

export interface Props {
  title?: string;
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
  leftStyle?: StyleProp<ViewStyle>;
  rightStyle?: StyleProp<ViewStyle>;
  middleStyle?: StyleProp<ViewStyle>;
  styleContainer?: StyleProp<ViewStyle>;
}

const Header = ({
  title,
  left,
  leftStyle,
  middle,
  middleStyle,
  right,
  rightStyle,
  styleContainer,
}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, styleContainer]}>
      {middle ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={leftStyle}>
            {left ? (
              left
            ) : (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <BackIcon />
              </TouchableOpacity>
            )}
          </View>
          <View style={[styles.middle, middleStyle]}>
            {middle ? middle : <Text style={styles.titleStyle}>{title}</Text>}
          </View>
        </View>
      ) : (
        <>
          {left ? (
            left
          ) : (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
          )}
          <View style={[styles.middle, middleStyle]}>
            {middle ? middle : <Text style={styles.titleStyle}>{title}</Text>}
          </View>
        </>
      )}

      <View style={[styles.right, rightStyle]}>{right}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 90,
    marginTop: Platform.OS === 'ios' ? 0 : 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  titleStyle: {fontSize: 16, fontWeight: '600', textAlign: 'center'},
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {width: 170},
  right: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
