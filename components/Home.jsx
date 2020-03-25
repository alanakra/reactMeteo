import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, FlatList,Button,Alert } from 'react-native';

function Home(props) {
  var date = new Date();
  var heure = date.getHours();
  var minute = date.getMinutes();
  if (minute<=9){
   minute = "0"+minute;
  }
  
 return (
  <View style={homeStyle.ecran}>
   <Text style={homeStyle.actuel}>Il est {heure.toString()}:{minute.toString()}</Text>
   <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://www.stickpng.com/assets/images/580b585b2edbce24c47b270f.png'}}
        />
     <Text style={homeStyle.ville}>Bailly-Romainvilliers</Text>
     <Text style={homeStyle.temperature}>10 C°</Text>
     <Text style={homeStyle.description}>Ensoleillé</Text>
  </View>
 );
}

setTimeout(Home,1000);

const homeStyle = StyleSheet.create({


  ecran:{
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: 30,
  },

  actuel:{
   color: 'white',
   alignItems: 'center',
   justifyContent: 'center',
  },

  description:{
   // flex: 1,
   // justifyContent: 'center',
   color: 'white',
   // alignItems: 'center',
   fontSize: 30,
  },

  temperature:{
   // flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
   color: 'white',
   fontSize: 40,
  },

  ville:{
   textAlign: 'center',
   justifyContent: 'center',
   alignItems: 'center',
   color: 'white',
   fontSize: 50,
  },


});

export default Home;