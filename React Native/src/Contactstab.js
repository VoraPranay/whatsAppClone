import React, { Component } from 'react';
import { Header, Container, Content, Icon, Left, Right, View, Body, Text, Button, Thumbnail, Card, Form, Label, Item, Input } from 'native-base';

const imageurl = 'https://filestore.alluvial22.hasura-app.io/v1/file/';
export default class Contactstab extends Component {

    state = {
        contact: this.props.navigation.state.params.friend
    }
   
    render() {
        const contact = this.state.contact;
        return (
    <Container >

    <Header style={{ backgroundColor: '#045e54' }}>
    <Left>
        <Button transparent onPress={() => this.props.navigation.goBack()}>
        <Icon name="arrow-back" style={{ color: '#fbebb0' }} />
        </Button>
    </Left>
    <Body />

    <Right />
    </Header>
    <Content style={{ backgroundColor: '#fbebb0' }} contentContainerStyle={{ justifyContent: 'center', margin: 40 }}>       
        <Card >
            
            <Body style={{ padding: 20 }}>
            <Button
            transparent
            style={{ height: 150, width: 150 }}
            onPress={() => this.props.navigation.navigate('DP', { dp: imageurl + contact.displaypic })}
            >      
                <Thumbnail style={{ height: 150, width: 150 }} large source={{ uri: imageurl + contact.displaypic }} />
            </Button>    
            </Body>
            
            </Card>
            <Form>
                <Item stackedLabel>
                    <Label>Username</Label>
                    <Text>{contact.displayname}</Text>  
                </Item>
                <Item stackedLabel>
                    <Label>Status</Label>
                    <Text>{contact.status}</Text>  
                </Item>
                <Item stackedLabel>
                    <Label>email id</Label>
                    <Text>{contact.emailid}</Text>  
                </Item>
            </Form>
            <View style={{ height: 10 }} />       
            </Content>
        </Container>
        );
    }
}