/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
        <Text style={styles.instructions}>
          Hello {this.props.name}
        </Text>
      );    
    }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText:true};

    setInterval(() => {
      this.setState(previouState => {
        return {showText:!previouState.showText};
      });
    }, 1000);    
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={{width:100, height:50, backgroundColor:'#F5FCFF'}}>{display}</Text>
    );
  }
}

export default class Basics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          <Blink text='Welcome to React Native!' />
        </Text>
        <Greeting name="gongzhen" />        
        <Image source={require('./img/image.jpg')} style={{width: 193, height: 110}}/>  
        <View style={{
          flex:0, flexDirection:'row'
        }} >
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />  
        </View>
      <View style={{ 
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>        
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Basics', () => Basics);
