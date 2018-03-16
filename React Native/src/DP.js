import React, { Component } from 'react';
import { Text } from 'native-base';
 import { StyleSheet, View, Image } from 'react-native';


  export default class DP extends Component {
    render() {
          
      return (
        <Image
        source={{ uri: this.props.navigation.state.params.dp }}
        style={styles.container}
        />
        );
    }

    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          width: undefined,
          height: undefined,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          resizeMode: 'contain'
        },
      });
