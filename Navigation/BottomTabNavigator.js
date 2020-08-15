import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Icon,
} from '@ui-kitten/components';
import HomeScreen from "../screen/HomeScreen";
//##  Icon
const MovieIcon = (props) => <Icon {...props} name="video-outline" />;
const SerieIcon = (props) => <Icon {...props} name="film-outline" />;
const HomeIcon = (props) => <Icon {...props} name="home" />;

const {Navigator, Screen} = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">USERS</Text>
  </Layout>
);


const Home = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">USERS</Text>
    </Layout>
);

const OrdersScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);
const AboutScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">About</Text>
  </Layout>
);

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={HomeIcon} title="Home" />
    <BottomNavigationTab icon={MovieIcon} title="Movies" />
    <BottomNavigationTab icon={SerieIcon} title="Series" />
    <BottomNavigationTab icon={SerieIcon} title="About" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Users" component={UsersScreen} />
    <Screen name="Orders" component={OrdersScreen} />
    <Screen name="About" component={AboutScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
