import React from 'react';
import { View } from 'react-native';
import {H2, Container,Content,Header,Footer ,Text, Button,Body,Item,Input,Icon,Left,Right,Tabs} from "native-base";
import Chatstab from './Chatstab';
import Contactstab from './Contactstab';
import Chatscreen from './Chatscreen';
import { TabNavigator,StackNavigator } from 'react-navigation';

const Homescreen = TabNavigator({
  Chat: {screen: Chatstab},
  Contacts: { screen: Contactstab},
	},{
		
		tabBarPosition: 'top',
    animationEnabled: true,
		tabBarOptions: {
		activeTintColor: 'white',
		inactiveTintColor: 'grey',
		activeBackgroundColor: "#fff",
		inactiveBackgroundColor: "#fff",
		showIcon: true,
		showLabel: false,
		},
 
} );
// export default Homescreen

const App = StackNavigator({

  Homescreen: { screen: Homescreen },
  Chatscreen: { screen: Chatscreen },
  
  })


export default App 