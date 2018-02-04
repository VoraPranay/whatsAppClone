import React, { Component } from 'react';
import { Button,Container, Header,Icon, Content, List, ListItem, Left, Body, Right, Thumbnail, Text ,Title} from 'native-base';
import Chatscreen from './Chatscreen'
export default class ListAvatarExample extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" style={{color: tintColor}} />
   ),
      }
  render() {
    return (
      <Container>
        
          <Title>
            Chats tab
          </Title>
        
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./assets/wallpaper.jpg')} />
              </Left>
              <Body>
                <Button block onPress={() => this.props.navigation.navigate ('Chatscreen') } >
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
                </Button>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
