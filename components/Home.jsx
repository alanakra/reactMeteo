import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

function Home(props) {
  const apiKey = '96bf68a7d698802acd26cacd7a23d3df';
  var cityName = 'Paris';
  
  const [city, setCity] = useState('');
  const [desc, setDesc] = useState('');
  const [temp, setTemp] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [country, setCountry] = useState('');
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=fr`)
        .then((response) => response.json())
        .then(r => {
            setCity(r.name)
            setTemp(r.main.temp.toFixed(1))
            setMin(r.main.temp_min)
            setMax(r.main.temp_max)
            setDesc(r.weather[0].description)
            setCountry(r.sys.country)
        })
        .catch((error)=>{
          console.log(error);
        });
}, []);

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
     <Text style={homeStyle.ville}>{city} {country}</Text>
     <Text style={homeStyle.temperature}>{temp} C°</Text>
     <Text style={homeStyle.description}>{desc}</Text>
     <Text style={homeStyle.description}>Min: {min} C°  Max: {max} C°</Text>
  </View>
 );
}


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
   fontSize: 16
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