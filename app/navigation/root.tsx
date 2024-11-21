import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import PostDetails from '../screens/Detail';
import { Data } from '../models/request.model';

export type RootStackParamList = {
  Home: undefined;
  Details: Data | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={PostDetails} />
    </Stack.Navigator>
  );
};

export default RootStack;
