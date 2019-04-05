import React from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from './Components/SplashScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import login from './Components/Login';


const AppNavigator = createStackNavigator({

    Home:{
      screen: SplashScreen,
    },
    login:{
      screen: login,
    }


},{headerMode: 'none'});




export default createAppContainer(AppNavigator);

