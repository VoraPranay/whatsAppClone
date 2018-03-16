import React, { Component } from 'react';
import { AsyncStorage, Alert, ActivityIndicator, ScrollView, View, YellowBox } from 'react-native';

import { Container, Header, Title, Content, List, Body, Right, Tabs, Tab } from 'native-base';
import { getUserFromId, getLastMessages, getUnreadMessages } from './Codeapi';
import ChatDetails from './ChatsDetails';
import Contactapi from './Contactapi';


let show = true;
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    this.state = {
      userMessages: [],
      isLoading: true,
      user: null,
      fabActive: true,
      emailid: '',
    };
    
    this.onReceivedUserMessages = this.onReceivedUserMessages.bind(this);
  }
  

  componentWillMount() {
    //this.setUserInfo();
    this.onReceivedUserMessages();
  }

    onReceivedUserMessages = async () => {
      const messages = [];
      console.log("start");
    const user_id = await AsyncStorage.getItem('user_id');
    console.log('user_id', user_id);
    const lastmessages = await getLastMessages(user_id);
    console.log('lastmessages', lastmessages);
    
    //skipping first row 
    console.log('lastmessages', lastmessages);
    console.log('lastmessages-result', lastmessages.result);
    console.log('lastmessages-result-length', lastmessages.result.length);
    for (let i = 1; i < lastmessages.result.length; i++) {
      const friend_id = lastmessages.result[i][2];
       let unreadcount = 0;
       const unreadmessages = await getUnreadMessages(user_id, friend_id);
       console.log('unreadmessages', unreadmessages);
       unreadcount = unreadmessages.result[1][2];
       //console.log(unreadmessages.result[j][0] + unreadcount);
      
      const friends = await getUserFromId(friend_id);
      const friend = friends[0];
     
      console.log(friend);
      messages.push({
        user_id,
        friend,
        msg_id: lastmessages.result[i][1],
        msg_text: lastmessages.result[i][3],
        sent_time: lastmessages.result[i][4],
        recd_time: lastmessages.result[i][5],
        unreadcount
      });
    }
    console.log('messages', messages);
    if (messages.length === 0 && show) {
      Alert.alert('Welcome!', 'No current chats available... chose your friends from Contacts tab');
      show = false;
    }
    this.setState({ user_id, isLoading: false, userMessages: messages });
 }

 renderContacts() {
  console.log('inside renderContacts, state ');
  return (
    <Contactapi user_id={this.state.user_id} navigation={this.props.navigation} />
  );
  }
renderChats() {
  console.log('inside renderChats, state ', this.state.userMessages);
  return this.state.userMessages.map(userMessages =>
      <ChatDetails key={userMessages.msg_id} userMessages={userMessages} navigation={this.props.navigation} />);
}

render() { 
      if (this.state.isLoading) {
      return (

        <View style={{ flex: 1, paddingTop: 20 }} >
          <ActivityIndicator />
        </View>
      );
    }
    const { navigate } = this.props.navigation;
    return (
      <Container>
      <Header style={{ backgroundColor: '#045e54' }}>
         <Body>
         <Title>Wh*tsApp</Title>
       </Body>
      
      </Header>
      <Content style={{ backgroundColor: 'white' }}>
      <Tabs initialPage={0} tabBarUnderlineStyle={{ borderBottomWidth: 1 }} onChangeTab={({i, ref, from }) => this.onReceivedUserMessages()}>
          <Tab heading="Chatscreen" tabStyle={{ backgroundColor: '#045e54' }} activeTabStyle={{ backgroundColor: '#045e54' }}>
            <List >
            {this.renderChats()}
            </List>
          </Tab>
          <Tab heading="Contactapi" tabStyle={{ backgroundColor: '#045e54' }} activeTabStyle={{ backgroundColor: '#045e54' }}>
          <List style={{ backgroundColor: 'white' }}>
            {this.renderContacts()}
            </List>
          </Tab>
        </Tabs>
     
          
      </Content>
      
    </Container>
    );
  } 
}