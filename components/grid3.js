import React, {Component} from 'react';
import Proptypes from 'prop-types';
import { Text, View, Button} from 'react-native';





export default class grid3 extends Component {

	static navigationOptions = {
		title: 'Easy Mode'
	};


	render () {
		const {navigate} = this.props.navigation;
	
  return (
    
	  <View>
	  
	  <Text>add the 3 x 3 grid</Text>
	  
	  <Button
	  	onPress={() => navigate('gameOver')}
		title="game over test"
	 	/>
	  
	  </View>
	 
  );
}
}