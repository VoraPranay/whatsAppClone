import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import Prompt from 'react-native-prompt';
import { Keyboard, AsyncStorage, Alert } from 'react-native';
import { Container, Item, Input, Header, Title, Content, Card, Button, CardItem, Body, View, Text } from 'native-base';
import { trySignupAndInsert, sendEmailUser, getUser, insertUser, updateUser } from './Codeapi';
import HomeScreen from './Homescreen';
  
export default class LoginScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {
        emailid: '',
        password: '',
        promptShow: false,
        user: null,
        auth: null
      };
    }
    async componentWillMount() {     
      console.log('getting');
      AsyncStorage.getItem('HASURA_AUTH_TOKEN').then((value) => {
        console.log(value);
        this.setState({ auth: value });
      }).done();
      console.log('mounting');
     }

     
  
      async onPressPasswordButton(value) {
        console.log(value);
      if (value === '') {
          Alert.alert('Register', 'Please enter valid password');
      } else {
        const { navigate } = this.props.navigation;
        this.setState({ promptShow: false, password: value });
        const response = await trySignupAndInsert(this.state.emailid, value);
        console.log('going to home, response', response);
        navigate('Home');
      }
    }


    handleSignupPressed = async () => {     
        const responseSendPassword = await sendpasswordUser(this.state.emailid);
        console.log(responseSendPassword);
        if (responseSendPassword.status !== 200) {
          if (responseSendPassword.status === 504) {
            Alert.alert('Network Error', 'Check your internet connection');
          } else {
            Alert.alert('Error', `Unable to send Password ${responseSendPassword.status}`);      
          }
        } else {
          this.setState({ promptShow: true });
        }
      }
  
    
      signUpUser() {
        if (this.state.emailid === '') {
            Alert.alert('Register', 'Please enter your email id  to register');
        } 
       
        if (this.state.emailid !== '' ) {
          console.log('log in');
          Keyboard.dismiss();
          this.handleSignupPressed();
        }
      }

      logInUser = async () => {
        
        const insertResponse = await getUser(9880175579);
        if (insertResponse.status !== 200) {
          if (insertResponse.status === 504) {
            Alert.alert('Network Error', 'Check your internet connection');
          } else {
            Alert.alert('Error', `Unable to insert ${insertResponse.status}`);   
            console.log(insertResponse.statusText);   
          }
        } else {
          //AsyncStorage.setItem('userid', 3);
        }
      }
  
      saveData = emailid => {
        this.setState({ emailid });
      }

      render() {
       

      return (
        (this.state.auth !== null) 
        ?
        <HomeScreen navigation={this.props.navigation} />
        :       
      <Container>
        <Header style={{ backgroundColor: '#045e54' }}>
            <Body>
            <Title>Verify Your Email Id</Title>
          </Body>
        </Header>
        <Content>
        <Prompt
            title="Please enter PASSWORD below to verify your phone number"
            visible={this.state.promptShow}
            onCancel={() => this.setState({ promptShow: false, password: '' })}
            onSubmit={(otp) => this.onPresspasswordButton(password)}   
        />
       
          <Card>
            <CardItem>
              <Body>
                <Text>
                 ChatsApp Messenger will send a one time SMS message to verify your phone number.
                 Carrier SMS charges may apply.
                </Text>
              </Body>
            </CardItem>
            </Card>
            <Card>
            <CardItem>
              
           
           
            <Item style={{ flex: 1 }}>
           
            
            
            <Input 
            placeholder='Email Id' 
            style={{ textAlign: 'left', flex: 6 }}
            value={this.state.emailid} 
            onChangeText={(emailid) => this.saveData(emailid)}
            />
          
            <Button bordered dark onPress={this.signUpUser.bind(this)}>
                <Text>OK</Text>
            </Button>
            </Item>
            </CardItem>
            
          </Card>
        </Content>
      </Container>
    );
  }
}