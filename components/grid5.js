import React, {Component} from 'react';
import Proptypes from 'prop-types';
import { Text, View, Button, StyleSheet, Image, TouchableHighlight, Alert, Animated, Easing, Vibration, ImageBackground } from 'react-native';
import { Constants, Audio } from 'expo';
import CountdownCircle from 'react-native-countdown-circle';


const timer = require('react-native-timer');

export default class grid5 extends Component {

	constructor(props) {
    super(props);
	this.pressed = false;
    this.state = { uri: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card1: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card11: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card2: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card22: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card3: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card33: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card4: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card44: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card5: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card55: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card6: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card66: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card7: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card77: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card8: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card88: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				  card9: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card99: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				  card10: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   card1010: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg',
				   pairarray: [],
				   vibrate: [],
				   facedown: [],
				   allcards: [
					   {
					   number: 1,
					   image: 'https://i.pinimg.com/736x/ef/d7/fd/efd7fdc42d3885b0730936ffcb0bd26f--danganronpa-monokuma-anime-life.jpg', 
					   },
					   {
					   number: 1,
					   image:
			       'https://i.pinimg.com/736x/ef/d7/fd/efd7fdc42d3885b0730936ffcb0bd26f--danganronpa-monokuma-anime-life.jpg',
					   },
					   {
					   number: 2,
					   image:
				   'http://www.behindthevoiceactors.com/_img/chars/prinny-disgaea-4-a-promise-unforgotten-6.59.jpg',
					   },
					   {
					   number: 2,
					   image:
				   'http://www.behindthevoiceactors.com/_img/chars/prinny-disgaea-4-a-promise-unforgotten-6.59.jpg',
					   },
					   {
					   number: 3,
					   image:
				   'https://static.giantbomb.com/uploads/scale_small/0/112/520313-chocobo.jpg',
					   },
					   {
					   number: 3,
					   image:
				   'https://static.giantbomb.com/uploads/scale_small/0/112/520313-chocobo.jpg',
					   },
					   {
					   number: 4,
					   image:
				   'https://res.cloudinary.com/teepublic/image/private/s--B90vASpI--/t_Preview/b_rgb:484849,c_limit,f_auto,h_313,q_90,w_313/v1472695640/production/designs/660728_1',
					   },
					   {
					   number: 4,
					   image:
				   'https://res.cloudinary.com/teepublic/image/private/s--B90vASpI--/t_Preview/b_rgb:484849,c_limit,f_auto,h_313,q_90,w_313/v1472695640/production/designs/660728_1',
					   },
					   {
					   number: 5,
					   image:
				   'https://a.wattpad.com/cover/85904401-352-k158004.jpg',
					   },
					   {
					   number: 5,
					   image:
				   'https://a.wattpad.com/cover/85904401-352-k158004.jpg',
					   },
				  	   {
					   number: 6,
					   image: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP0771-CUSA04129_00-AV00000000000008/1499664534000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100',
					   },
					  {
					   number: 6,
					   image: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP0771-CUSA04129_00-AV00000000000008/1499664534000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100'
					  },
					   {
					   number: 7,
					   image: 'http://piq.codeus.net/static/media/userpics/piq_46575_400x400.png',
					   },
					   {
					   number: 7,
					   image: 'http://piq.codeus.net/static/media/userpics/piq_46575_400x400.png',
					   },
					   {
					   number: 8,
					   image: 'https://lumiere-a.akamaihd.net/v1/images/character_mickeymouse_donaldduck_914f6b94.jpeg?region=0%2C0%2C450%2C450',
					   },
					   {
					   number: 8,
					   image: 'https://lumiere-a.akamaihd.net/v1/images/character_mickeymouse_donaldduck_914f6b94.jpeg?region=0%2C0%2C450%2C450',
					   },
					   {
					   number: 9,
					   image: 'https://upload.wikimedia.org/wikipedia/en/b/be/Destiny_box_art.png',
					   },
					   {
					   number: 9,
					   image: 'https://upload.wikimedia.org/wikipedia/en/b/be/Destiny_box_art.png',
					   },
					   {
					   number: 10,
					   image: 'http://drakengard-3.com/blog/stuff/uploads/2017/03/nier-valkyrie-collab01.jpg',
					   },
					   {
					   number: 10,
					   image: 'http://drakengard-3.com/blog/stuff/uploads/2017/03/nier-valkyrie-collab01.jpg',
					   },
							 ],
				   
				   tries: 0,
				   count: 0,
				   score: 100,				   
				   
				   }
  }
	
	componentDidMount() {
		this.shuffle(this.state.allcards);
		timer.clearTimeout(this);
	}
	
	
	
	static navigationOptions = {
		title: 'hard Mode'
	};
	
	playIncorrect() {

        Expo.Audio.setIsEnabledAsync(true)
        const soundA = new Expo.Audio.Sound();

        const play_soundA = (async () => {

            await soundA.loadAsync(require('../assets/false.mp3'));
            await soundA.playAsync();

        })();

    }
	
	playCorrect() {

        Expo.Audio.setIsEnabledAsync(true)
        const soundB = new Expo.Audio.Sound();

        const play_soundB = (async () => {

            await soundB.loadAsync(require('../assets/true.mp3'));
            await soundB.playAsync();

        })();

    }
	
	shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
	console.log(a);
    return a;
}
	
	vibration(){
		if ( this.state.vibrate.length == 1 ){
			Vibration.vibrate();
			
		}
		else{
			
		}
	}
	
	pairdown() {
		if ( this.state.vibrate.length == 1 ){
		
		if ( this.state.facedown.length == 2){
			
		if( this.state.facedown.includes(1)){
		this.setState({card1: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(2)){
		this.setState({card11: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(3)){
		this.setState({card2: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(4)){
		this.setState({card22: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(5)){
		this.setState({card3: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(6)){
		this.setState({card33: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(7)){
		this.setState({card4: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(8)){
		this.setState({card44: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(9)){
		this.setState({card5: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(10)){
		this.setState({card55: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(11)){
		this.setState({card6: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
		if( this.state.facedown.includes(12)){
		this.setState({card66: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
			if( this.state.facedown.includes(13)){
		this.setState({card7: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
			if( this.state.facedown.includes(14)){
		this.setState({card77: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
			if( this.state.facedown.includes(15)){
		this.setState({card8: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
			if( this.state.facedown.includes(16)){
		this.setState({card88: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
			if( this.state.facedown.includes(17)){
		this.setState({card9: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
			if( this.state.facedown.includes(18)){
		this.setState({card99: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
			if( this.state.facedown.includes(19)){
		this.setState({card10: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
			if( this.state.facedown.includes(20)){
		this.setState({card1010: 'https://ih1.redbubble.net/image.275526279.4670/flat,800x800,075,f.jpg'});
		
	}
			this.state.facedown=[];
	}
			
		}
		
	}
	
	
	
	
	card1Change() {
    console.log('card flipped!');
    this.setState({card1: this.state.allcards[0].image});
	this.state.pairarray.push(this.state.allcards[0].number);
    this.state.facedown.push(1);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

	

  }
	card11Change() {
    console.log('card flipped!');
    this.setState({card11: this.state.allcards[1].image});
	this.state.pairarray.push(this.state.allcards[1].number);
    this.state.facedown.push(2);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	
	card2Change() {
    console.log('card flipped!');
    this.setState({card2: this.state.allcards[2].image});
	this.state.pairarray.push(this.state.allcards[2].number);
    this.state.facedown.push(3);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	card22Change() {
    console.log('card flipped!');
    this.setState({card22: this.state.allcards[3].image});
	this.state.pairarray.push(this.state.allcards[3].number);
    this.state.facedown.push(4);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);
	
  }
	
	card3Change() {
    console.log('card flipped!');
    this.setState({card3: this.state.allcards[4].image});
    this.state.pairarray.push(this.state.allcards[4].number);
	this.state.facedown.push(5);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	card33Change() {
    console.log('card flipped!');
    this.setState({card33: this.state.allcards[5].image});
	this.state.pairarray.push(this.state.allcards[5].number);
this.state.facedown.push(6);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	
	card4Change() {
    console.log('card flipped!');
    this.setState({card4: this.state.allcards[6].image});
	this.state.pairarray.push(this.state.allcards[6].number);
this.state.facedown.push(7);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	card44Change() {
    console.log('card flipped!');
    this.setState({card44: this.state.allcards[7].image});
	this.state.pairarray.push(this.state.allcards[7].number);
this.state.facedown.push(8);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);
	
  }
	
	card5Change() {
    console.log('card flipped!');
    this.setState({card5: this.state.allcards[8].image});
	this.state.pairarray.push(this.state.allcards[8].number);
this.state.facedown.push(9);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	card55Change() {
    console.log('card flipped!');
    this.setState({card55: this.state.allcards[9].image});
	this.state.pairarray.push(this.state.allcards[9].number);
this.state.facedown.push(10);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);
	
  }
	
	card6Change() {
    console.log('card flipped!');
    this.setState({card6: this.state.allcards[10].image});
	this.state.pairarray.push(this.state.allcards[10].number);
this.state.facedown.push(11);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	card66Change() {
    console.log('card flipped!');
    this.setState({card66: this.state.allcards[11].image});
	this.state.pairarray.push(this.state.allcards[11].number);
this.state.facedown.push(12);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	
	card7Change() {
    console.log('card flipped!');
    this.setState({card7: this.state.allcards[12].image});
	this.state.pairarray.push(this.state.allcards[12].number);
this.state.facedown.push(13);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	
	card77Change() {
    console.log('card flipped!');
    this.setState({card77: this.state.allcards[13].image});
	this.state.pairarray.push(this.state.allcards[13].number);
this.state.facedown.push(14);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	
	card8Change() {
    console.log('card flipped!');
    this.setState({card8: this.state.allcards[14].image});
	this.state.pairarray.push(this.state.allcards[14].number);
this.state.facedown.push(15);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	
	card88Change() {
    console.log('card flipped!');
    this.setState({card88: this.state.allcards[15].image});
	this.state.pairarray.push(this.state.allcards[15].number);
this.state.facedown.push(16);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	
	card9Change() {
    console.log('card flipped!');
    this.setState({card9: this.state.allcards[16].image});
	this.state.pairarray.push(this.state.allcards[16].number);
this.state.facedown.push(17);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	
	card99Change() {
    console.log('card flipped!');
    this.setState({card99: this.state.allcards[17].image});
	this.state.pairarray.push(this.state.allcards[17].number);
this.state.facedown.push(18);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	card10Change() {
    console.log('card flipped!');
    this.setState({card10: this.state.allcards[18].image});
	this.state.pairarray.push(this.state.allcards[18].number);
this.state.facedown.push(19);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	card1010Change() {
    console.log('card flipped!');
    this.setState({card1010: this.state.allcards[19].image});
	this.state.pairarray.push(this.state.allcards[19].number);
this.state.facedown.push(20);
	this.alertest();
	this.vibration();
	setTimeout(() => this.pairdown(), 2000);

  }
	
    
	
	alertest() {
		
           
        
		console.log(this.state.pairarray[0]);
		if ( this.state.pairarray.length == 2) {
			if (this.state.pairarray[this.state.pairarray.length - 2] == this.state.pairarray[this.state.pairarray.length - 1]){
    Alert.alert(
            'You found a pair'
		),
		
	this.playCorrect();
	this.state.vibrate=[];
				if (this.state.pairarray.length == 2){
			if (this.state.count == 9){
				const {navigate} = this.props.navigation;
				
				navigate('timerTest', { score: this.state.score } )
			}
	}
	
	this.state.pairarray=[];
	this.state.facedown=[];
				
				
	this.setState((prevState, props) => ({
    count: prevState.count + 1,
    tries: prevState.tries + 1,
	score: prevState.score + 30,
})); 
	
			}
			else {
				Alert.alert(
            'keep trying',
					
		),
	this.playIncorrect();
	this.state.vibrate.push(1);		
		
    
	this.state.pairarray=[];
				
	this.setState((prevState, props) => ({
    tries: prevState.tries + 1,
	score: prevState.score - 10,
})); 
			}
		}
		else {
			Alert.alert(
            'Select another card'
		),
				this.state.vibrate=[];
				
		}
	
		}
  


	render () {
		const {navigate} = this.props.navigation;
		const changeStyle = () => {
    console.log('change style')
}
	
  return (
	 <ImageBackground style={styles.backgroundGif} source={{uri: 'https://media.giphy.com/media/10Lj9SPC9dFlKw/giphy.gif'}}> 
	  
<View style={styles.real}>
	   
	  <View style={styles.container3}>
    <Button
	  	onPress={() => navigate('gameOver')}
		title="Custom Cards"
	 	/>
	  </View>
	  
	  <View style={styles.container2}>
	 <CountdownCircle 
            seconds={10}
            radius={30}
            borderWidth={8}
            color="#ff003f"
            bgColor="#fff"
            textStyle={{ fontSize: 20 }}
            onTimeElapsed={() => navigate('gameOver')}
        />
		
		
		</View>
	 
	  
	  <View style={styles.container}>
	   
	  
	 
	 <Text style={styles.texto2}>SCORE: {this.state.score}</Text>
	  
	  </View>
		
<View style={styles.container}>
	  <TouchableHighlight disabled={this.state.button1} onPress={() => this.card1Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card1 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button2} onPress={() => this.card11Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card11 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button3} onPress={() => this.card2Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card2 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button4} onPress={() => this.card22Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card22 }}>
	  </Image>
	  </TouchableHighlight>
	  
</View>
	  
<View style={styles.container}>
	  <TouchableHighlight disabled={this.state.button5} onPress={() => this.card3Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card3 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button6} onPress={() => this.card33Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card33 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button7} onPress={() => this.card4Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card4 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button8} onPress={() => this.card44Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card44 }}>
	  </Image>
	  </TouchableHighlight>
	  
</View>
	  
<View style={styles.container}>
	  <TouchableHighlight disabled={this.state.button9} onPress={() => this.card5Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card5 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button10} onPress={() => this.card55Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card55 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button11} onPress={() => this.card6Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card6 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button12} onPress={() => this.card66Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card66 }}>
	  </Image>
	  </TouchableHighlight>
	  
</View>
	  
<View style={styles.container}>
	  <TouchableHighlight disabled={this.state.button1} onPress={() => this.card7Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card7 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button2} onPress={() => this.card77Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card77 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button3} onPress={() => this.card8Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card8 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button4} onPress={() => this.card88Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card88 }}>
	  </Image>
	  </TouchableHighlight>
	  
</View>
	  
<View style={styles.container}>
	  <TouchableHighlight disabled={this.state.button1} onPress={() => this.card9Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card9 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button2} onPress={() => this.card99Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card99 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button3} onPress={() => this.card10Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card10 }}>
	  </Image>
	  </TouchableHighlight>
	  
	  <TouchableHighlight disabled={this.state.button4} onPress={() => this.card1010Change()}>
	  <Image style={{ width: 45, height: 70, margin: 8 }} source={{ uri: this.state.card1010 }}>
	  </Image>
	  </TouchableHighlight>
	  
</View>
	  
	  
	  
	 <Text style={styles.texto}>Pair found {this.state.count}</Text>
	 <Text style={styles.texto}>tries {this.state.tries}</Text>
	 
	 </View>
	 
	</ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
	flexDirection: 'row',
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
  
  },
	real: {
		flex: 1,
	flexDirection: 'column',
   
    justifyContent: 'center',
	},
	backgroundGif: {
	width: 360,
	height:  695,
},
})