import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SplashPage from './app/components/SplashPage/index';
import SignUp from './app/components/Signup/index';
import Login from './app/components/Login/index';
import Home from './app/components/Home/index';
import Main from './app/components/Main';


const App = createStackNavigator(
  {
    SplashPage: {
      screen: SplashPage,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SplashPage',
  },
);

export default createAppContainer(App);
