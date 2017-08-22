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
  Platform,
  FlatList,
  SectionList,
  ActivityIndicator,
  ListView
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

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

class ScrollViewScreen extends Component {
  static navigationOptions = {
    title: "ScrollViewScreen"
  };

  render() {
    return (
      <ScrollView 
        contentContainerStyle={{flexGrow: 1}}
      >
        <Image 
          style={{ 
            width: 200, 
            height: 200           
          }}
          source={require('./img/favicon.png')}
        />
        <Image 
          style={{ 
            width: 200, 
            height: 200,           
          }}
          source={require('./img/favicon.png')} />
        <Image 
          style={{ 
            width: 200, 
            height: 200,           
          }}
          source={require('./img/favicon.png')} />
        <Image 
          style={{ 
            width: 200, 
            height: 200,           
          }}
          source={require('./img/favicon.png')} />
        <Image 
          style={{ 
            width: 200, 
            height: 200,           
          }}
          source={require('./img/favicon.png')} />        
      </ScrollView>
    );
  }
}

class MovieListViewScreen extends Component {

  static navigationOptions = {
    title: "MovieListViewScreen"
  };

  constructor(props) {
    super(props);  
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response)=>response.json())
      .then((responseJson)=>{
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});        
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),        
        }, function(){          

        }); 
      })
      .catch((error)=>{
        console.error(error);
    });
  }

  render(){
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );    
    }
    return(
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
      </View>
    );
  }
}

class ListViewScreen extends Component {
  static navigationOptions = {
    title: "ListViewScreen"
  };

  render() {
    return (
      <ScrollView>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={{
            padding: 10,
            fontSize: 18,
            height: 44}}
            >{item.key}</Text>}
          keyExtractor={(item, index)=>index}
        />    
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={{
            padding: 10,
            fontSize: 18,
            height: 44,            
          }}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={{
            paddingTop: 2,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 2,
            fontSize: 14,
            fontWeight: 'bold',
            backgroundColor: 'rgba(247,247,247,1.0)'
          }}>{section.title}</Text>}
          keyExtractor={(item, index)=>index}
        />
      </ScrollView>
    );
  }
}

export default class Basics extends Component {
  constructor(props) {
    super(props);    
    this.state = {text:''};
    this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton() {
    Alert.alert('You tapped the button!');
    this.props.navigation.navigate('ScrollViewScreen');
  }  

  _onPressListViewButton() {
    this.props.navigation.navigate('ListViewScreen');
  }

  _onPressMoviewListViewButton() {
    this.props.navigation.navigate('MovieListViewScreen');
  }  

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }  

  static navigationOptions = {
    title: 'Welcome Basics',
  };  

  render() {
    const { navigate } = this.props.navigation;

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
                onPress={this._onPressButton.bind(this)}
                title="Press Me"
              />          
              <Button
                onPress={this._onPressListViewButton.bind(this)}
                title="Press Me"
                color="#841584"
              />       
            </View> 
          </View>        
          <View style={styles.highLightContainer}>
            <View style={styles.buttonContainer}>
              <TouchableHighlight onPress={this._onPressMoviewListViewButton.bind(this)} underlayColor="white">
                <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableHighlight</Text>
              </View>
              </TouchableHighlight>
              <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
              </TouchableOpacity>
              <TouchableNativeFeedback
                onPress={this._onPressButton.bind(this)}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableWithoutFeedback
                onPress={this._onPressButton.bind(this)}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableHighlight onPress={this._onPressButton.bind(this)} onLongPress={this._onLongPressButton} underlayColor="white">
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

const SimpleApp = StackNavigator({
  Home: { screen: Basics },
  ScrollViewScreen: { screen: ScrollViewScreen },
  ListViewScreen: {screen: ListViewScreen},
  MovieListViewScreen: {screen: MovieListViewScreen}
});

AppRegistry.registerComponent('Basics', () => SimpleApp);
