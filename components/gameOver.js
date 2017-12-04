import React, {Component} from 'react';
import Proptypes from 'prop-types';
import { Text, View, Button, BackAndroid, ImageBackground, StyleSheet} from 'react-native';
import { Constants, Audio } from 'expo';





export default class gameOver extends Component {

	static navigationOptions = {
		title: 'Game Over'
	};
	
	 



	render () {
		const {navigate} = this.props.navigation;
	
	
  return (
    <ImageBackground style={styles.backgroundGif} source={{uri: 'https://fsa.zobj.net/crop.php?r=xhZR1YOP3WQDQBYyDL0z82c2pG5OYnM2AK5O4oxbqVorhXW_vJQOkGiIhrFgXqor04FOcnO7BFQXy1m1-WaH96lA1Brc_HKhYrDl3Q-dg3qH81XZFtb3ibU8_ni0JPCt5D5GQCZAZSm8X1jg_6cEkXcxx4GM6AULvd3mHw'}}> 
	  <View style={styles.container}>
	  <View style={styles.container}>
	  <Button
	  	onPress={() => navigate('Home')}
		title="RETRY"
	 	/>
			
		</View>
			  <View style={styles.container}>

	  <Button
	  	onPress={() => BackAndroid.exitApp()}
		title="Give up"
	 	/>
			 </View>
	  </View>
	 </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
	flexDirection: 'column',
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