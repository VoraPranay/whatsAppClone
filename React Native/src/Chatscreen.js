import React, { Component } from "react";
import {  StyleSheet, View,Image,StatusBar } from "react-native";
import {Item,Input,Icon,Left,Right,Thumbnail, Body,Container,Content,Header,Footer ,Text, Button,H2,Title } from "native-base";

var backgroundImage = require('./assets/wallpaper.jpg')


class Chatscreen extends Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  

  static navigationOptions = {
    title: 'User name',
    header: null,
    headerStyle:{ backgroundColor: 'white'},
    headerTitleStyle:{ color: 'green'},
    }

render(){


return (

<Container>

<Header style={{backgroundColor:'green'}}>
<Left>
<Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: 'blue'}} />
 </Button>
 <Thumbnail source={require('./assets/wallpaper.jpg')} />
 </Left>
<Body>
  <Title style={{color:'white'}}>user name</Title>
</Body>
<Right />
</Header>

   <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
      <Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
   </View>
  
     <Content>
    </Content>
    

    <Footer style={{backgroundColor:'transparent'}}>
      <Body style={{alignItems:'center'}}>
      <Left>
      <Item rounded style={{backgroundColor:'white'}}>
            <Input/>
      </Item>
      </Left>
      <Right>
        <Button block success
            onPress={() => this.props.navigation.navigate ('Homescreen') } 
        >
        </Button>
      </Right>
      </Body>
    </Footer>

</Container>
)
}
}

export default Chatscreen

 
