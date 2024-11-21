import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Header from '../header';

export interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  title?: string;
  rightHeader?: React.ReactNode;
  sticky?: number[];
  middleHeader?: React.ReactNode;
}

const Screen = ({
  children,
  style,
  title,
  rightHeader,
  sticky,
  middleHeader,
}: Props) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar translucent backgroundColor="#FFFFFF" animated />
      <Header title={title} right={rightHeader} middle={middleHeader} />
      <ScrollView
        nestedScrollEnabled
        stickyHeaderIndices={sticky}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[style]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
