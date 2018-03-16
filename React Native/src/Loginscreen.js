import React, { Component } from "react";
import { StyleSheet, View,Image } from "react-native";
import {H2, Container,Content,Header,Footer ,Text, Button,Body,Item,Input,Icon,Left,Right} from "native-base";
import Homescreen from './Homescreen';

var backgroundImage = require('./assets/wallpaper.jpg')

class Loginscreen extends Component {
    static navigationOptions = {
        header: null
    }

    static navigationOptions = {
        title: 'Verify your phone number',
        header: null,
        headerStyle:{ backgroundColor: 'white'},
        headerTitleStyle:{ color: 'green'},
        }

render(){

return (
    

<Container>
    
<Header style={{backgroundColor:'green'}}>

   <Body>
      <Title style={{color:'white'}}>Verify your phone number</Title>
   </Body>
   <Right />
</Header>

<View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
      <Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
 </View>
  
  
  
   <Content>
       <Text >
           whats app will send an sms message to verify your phone number.
       </Text>
       <Body>

      <Item success>
            <Input placeholder='Country'/>

       </Item>
       
       <Item success>
            <Input placeholder='code'/>
       </Item>
    
       <Right>
       <Item success>
            <Input placeholder='phone number'/>
       </Item>
       </Right>
       </Body>
   </Content>  


   <Footer >   
        <Button success style={{alignItems:'center'}}
           onPress={() => this.props.navigation.navigate ('Homescreen') } >
           <Text>
              Next 
            </Text>
        </Button>
        <Text note>
        Carrier SMS charges may apply
        </Text>
   </Footer>

</Container>
);
}
}


 
 export default Loginscreen;


 
