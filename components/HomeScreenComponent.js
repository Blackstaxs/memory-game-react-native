import React, {Component} from 'react';
import Proptypes from 'prop-types';
import { Text, View, Button, StyleSheet, Image, Vibration, TouchableOpacity} from 'react-native';
import { Constants, Audio } from 'expo';


const timer = require('react-native-timer');

export default class HomeScreenComponent extends Component {

	static navigationOptions = {
		title: 'Welcome to our game'
	};
    
	constructor () {
  super()
 
}


	
  state = {
    showMsg: false
  };

  componentWillUnmount() {
    timer.clearTimeout(this);
  }

  showMsg() {
    this.setState({showMsg: true}, () => timer.setTimeout(
      this, 'hideMsg', () => this.setState({showMsg: false}), 2000
    ));
  }

	
	

	render () {
		const {navigate} = this.props.navigation;
	
  return (
    <Image style={styles.backgroundGif} source={{uri: 'https://media.giphy.com/media/GZd8nPH3TcNSU/giphy.gif'}}>
	  <View style={styles.container}>
	   
	  
	  
	  
	  <Text style={styles.texto2}>please select the difficulty level</Text>
	  
	  
	  <Button style={styles.buttons}
	  	onPress={() => navigate('easyGrid')}
		title="3 x 4"
	 	/>
			
			<View style={styles.container}>
	  <Button style={styles.buttons}
	  	onPress={() => navigate('normalGrid')}
		title="4 x 4"
	 	/>
			</View>

	  <Button
	  	onPress={() => navigate('hardGrid')}
		title="4 x 5"
	 	/>
			
		
			
			
		<TouchableOpacity onPress={() => requestAnimationFrame(() => this.showMsg())}>
          <Text style={styles.texto2}>How to play</Text>
        </TouchableOpacity>
	  {this.state.showMsg ? (
          <Text style={styles.texto3}>Make your move in less than 10 sec</Text>
        ) : (
          null
        )}
			
	

	  </View>
		</Image>
	  
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
	flexDirection: 'column',
	padding: 10,
	margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
	backgroundGif: {
	width: 360,
	height:  695,
},
	texto2: {
    
	color: 'white',
	fontWeight: 'bold',
  
  },
	texto3: {
    
	color: 'black',
	fontWeight: 'bold',
  
  },
	buttons:{
		padding: 10,
		margin: 15,
	}
});