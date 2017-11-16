import React, {Component} from 'react';
import Proptypes from 'prop-types';
import { Text, View, Button, StyleSheet, Image} from 'react-native';
import { Constants, Audio } from 'expo';




export default class HomeScreenComponent extends Component {

	static navigationOptions = {
		title: 'Welcome to our game'
	};



	render () {
		const {navigate} = this.props.navigation;
	
  return (
    <Image style={styles.backgroundGif} source={{uri: 'https://media.giphy.com/media/GZd8nPH3TcNSU/giphy.gif'}}>
	  <View style={styles.container}>
	  
	  <Text>please select the difficulty level</Text>
	  <Button 
          title="test background"
          onPress={async () => {
            const source = {
              uri: "http://66.90.93.122/ost/super-danganronpa-2-original-soundtrack/asbodgetkh/2-03-beautiful-ruin.mp3" 
            };
            
            try {
              await Audio.setIsEnabledAsync(true);
              const sound = new Audio.Sound();
              await sound.loadAsync(source);
              await sound.playAsync(); 
            } catch(error) {
              console.error(error);
            }
	  		
          }}
        />
	  <Button style={styles.buttons}
	  	onPress={() => navigate('easyGrid')}
		title="3 x 4"
	 	/>
	  <Button style={styles.buttons}
	  	onPress={() => navigate('normalGrid')}
		title="4 x 4"
	 	/>
	  <Button
	  	onPress={() => navigate('hardGrid')}
		title="4 x 5"
	 	/>
	  <Button
	  	onPress={() => navigate('timerTest')}
		title="Timer Test"
	 	/>
	   
	  
	  </View>
		</Image>
	  
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
	buttons:{
		padding: 10,
		margin: 15,
	}
});