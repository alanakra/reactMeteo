import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, FlatList,Button,Alert } from 'react-native';

function Home(props) {
  const apiKey = '41e2a48af7b584163dc359b091426b55';
  var cityName = 'Paris';
  const units = 'metric';
  const lang = 'fr';
  
  const [city, setCity] = useState('');
  // const [desc, setDesc] = useState('');
  const [temp, setTemp] = useState('');
  // const [min, setMin] = useState('');
  // const [max, setMax] = useState('');
  // const [country, setCountry] = useState('');
  
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`)
  .then(response=>response.json())
  .then(data => data.data)
  .then(r=>{
    setCity(r.name)
    setTemp(r.main.temp)
  });


  var date = new Date();
  var heure = date.getHours();
  var minute = date.getMinutes();
  if (minute<=9){
   minute = `0${minute}`;
  }
  
 return (
  <View style={homeStyle.ecran}>
   <Text style={homeStyle.actuel}>Il est {heure.toString()}:{minute.toString()}</Text>
   <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://www.stickpng.com/assets/images/580b585b2edbce24c47b270f.png'}}
        />
     <Text style={homeStyle.ville}>{city}</Text>
     <Text style={homeStyle.temperature}>{temp}C°</Text>
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
   color: 'white',
   fontSize: 30,
  },

  temperature:{
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