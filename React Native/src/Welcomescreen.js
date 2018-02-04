import React, { Component } from "react";
import {  StyleSheet, View,Image,StatusBar } from "react-native";
import { Body,Container,Content,Header,Footer ,Text, Button,H2,Title } from "native-base";

var backgroundImage = require('./assets/backgroundimage.jpg')


class Welcomescreen extends Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }


static navigationOptions = {
  title: 'Welcome To the Whatsapp',
  header: null,
  headerStyle:{ backgroundColor: 'white'},
  headerTitleStyle:{ color: 'green'},
  }

render(){


return (

<Container>

    <Header style={{backgroundColor:'transparent'}}>
      <Body >
         <Title style={{color: 'green'}}>
           <H2>
            Welcome To Whats App Clone
            </H2>
          </Title>
       </Body>
   </Header>


   <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
      <Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
   </View>
  
     <Content>
    </Content>


    <Text note>
       Tap'Agree and Continue' to accept the
       <Text style={{color: 'blue'}}>whats app Terms Of Services and Policy.</Text>
    </Text>


    <Footer style={{backgroundColor:'transparent'}}>
      <Body style={{alignItems:'center'}}>
        <Button block success
            onPress={() => this.props.navigation.navigate ('Loginscreen') } 
        >
        <Text>
              Agree and Continue 
        </Text>
        </Button>
      </Body>
    </Footer>

</Container>
)
}
}

export default Welcomescreen

 
