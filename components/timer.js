import React, {Component} from 'react';
import Proptypes from 'prop-types';
import { Text, View, Button, TouchableOpacity, BackAndroid, AppRegistry, Animated, Image, Easing, StyleSheet, ImageBackground } from 'react-native';
import CountdownCircle from 'react-native-countdown-circle'

import Leaderboard from 'react-native-leaderboard';



export default class Foo extends Component {
	
   
	
	constructor(props) {
    super(props);
	this.state = {
	score1: 200,
	score: this.props.navigation.state.params.score,
	data: [
        {userName: 'Diego', highScore: 240},
		{userName: 'Ray', highScore: 200},
		{userName: 'Alex', highScore: 60},
		{userName: 'Dylan', highScore: 80},
		{userName: 'Kelvin', highScore: 100},
        {userName: 'Rodney', highScore: 120}
        
    ],
	scores: [
					   {
					   id: 'Diego',
					   points: 240, 
					   },
		{
					   id: 'Ray',
					   points: 200, 
					   },
		{
					   id: 'Rodney',
					   points: 80, 
					   },
		{
					   id: 'Dylan',
					   points: 60, 
					   },
		{
					   id: 'Kelvin',
					   points: 100, 
					   },
		{
					   id: 'Alex',
					   points: 130, 
					   },
		{
					   id: 'PLAYER',
					   points: 2, 
					   },
		]
    
}
	}
	
	componentDidMount() {
		this.setState({data: [
		{userName: 'Diego', highScore: 240},
		{userName: 'Ray', highScore: 200},
		{userName: 'Alex', highScore: 60},
		{userName: 'Dylan', highScore: 80},
		{userName: 'Kelvin', highScore: 100},
        {userName: 'Rodney', highScore: 120},
        
		{userName: 'Me', highScore: this.state.score},
    
			]});
		console.log(this.state.data)
	}
					  
	

  render() {
	  const {navigate} = this.props.navigation;
	  
	  
    return (
		
		<ImageBackground style={styles.backgroundGif} source={{uri: 'https://badgeos.org/wp-content/uploads/edd/2013/11/leaderboard-300x300.png'}}> 
      <View style={styles.container}>
		
		
		
        <Leaderboard 
        data={this.state.data} 
        sortBy='highScore' 
        labelBy='userName'/>
		
		
		
	
		
           
			
			
	  
	 
      </View>
		
		</ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
  },
	
	container2: {
    alignItems: 'center',
	flexDirection: 'row',
		justifyContent: 'flex-end',
    
  },
	container3: {
    
	flexDirection: 'column',
		justifyContent: 'flex-start',
    
  },
	texto: {
    
	color: 'white',
  
  },
	texto2: {
    
	color: 'white',
	fontWeight: 'bold',
		flex: 1,
	flexDirection: 'column',
		backgroundColor: '#0A4E6D',
   
    justifyContent: 'center',
  
  },
	real: {
		flex: 1,
	flexDirection: 'column',
		backgroundColor: '#F6AE2D',
   
    justifyContent: 'center',
	},
	backgroundGif: {
	width: 360,
	height:  695,
},
})