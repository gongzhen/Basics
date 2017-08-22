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
  TextInput,
  Image,
  Alert,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Platform
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

  constructor(props) {
    super(props);    
    this.state = {text:''};
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }  

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }  

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
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40, width: 200, textAlign:'center'}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42, textAlign:'center'}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View> 
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.alternativeLayoutButtonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
              />          
              <Button
                onPress={this._onPressButton}
                title="Press Me"
                color="#841584"
              />       
            </View> 
          </View>        
          <View style={styles.highLightContainer}>
            <View style={styles.buttonContainer}>
              <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableHighlight</Text>
              </View>
              </TouchableHighlight>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
              </TouchableOpacity>
              <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableWithoutFeedback
                onPress={this._onPressButton}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
              </TouchableHighlight>              
            </View>
          </View>
        </ScrollView>
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
  buttonContainer:{
    margin: 20
  },
  alternativeLayoutButtonContainer:{
    margin:0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  highLightContainer: {
    paddingTop: 20,
    alignItems: 'center'
  },  
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }  
});

AppRegistry.registerComponent('Basics', () => Basics);
