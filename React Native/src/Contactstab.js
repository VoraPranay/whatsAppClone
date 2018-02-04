import React, { Component } from 'react';
import { Title,Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail,Icon, Text } from 'native-base';
export default class Contactstab extends Component {
  
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="people" style={{color: tintColor}} />
   ),
      }

      static navigationOptions = {
        title: 'Contacts Tab',
        header: null,
        headerStyle:{ backgroundColor: 'white'},
        headerTitleStyle:{ color: 'green'},
        }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'green'}}>

            <Body>
               <Title style={{color:'white'}}> Contacts tab</Title>
            </Body>
            <Right />
        </Header>
          
        
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./assets/wallpaper.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>Mobile</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
