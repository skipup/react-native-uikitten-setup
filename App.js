import React from 'react';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
  Card,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './Navigation/BottomTabNavigator';
import {default as theme} from './theme/custom-theme.json';
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

const HeartIcon = (props) => <Icon {...props} name="heart" />;

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      <AppNavigator />
      <StackNavigator/>
    </ApplicationProvider>
  </>
);
