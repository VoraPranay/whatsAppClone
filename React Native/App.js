import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Welcomescreen from './src/Welcomescreen.js'
import Loginscreen from './src/Loginscreen'
import Homescreen from './src/Homescreen'


const App = StackNavigator({

  Welcomescreen: { screen: Welcomescreen },
  Homescreen: { screen: Homescreen },
  Loginscreen: {
    screen: Loginscreen
  }
}, {
    initialRouteName: 'Welcomescreen'
  })


export default App 